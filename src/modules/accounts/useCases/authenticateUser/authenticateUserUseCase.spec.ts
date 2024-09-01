/* eslint-disable @typescript-eslint/no-unused-vars */
import 'reflect-metadata'; // necessário para uso de injeção de dependências com tsyringe
import { AppError } from '../../../../shared/errors/appError';
import { AuthenticateUserUseCase } from './authenticateUserUseCase';
import { IUsersRepository } from '../../repositories/iUsersRepository';
import { compare } from 'bcrypt';
import { sign } from 'jsonwebtoken';

//Arrange Values
const makeUser = {
  id: '1',
  name: 'any_name',
  email: 'any_email@mail.com',
  password: 'any_password',
  driver_license: '23465',
  is_admin: false,
  avatar: 'dir_to_image',
  created_at: new Date('24-02-2000'),
};

const makeValidCredential = {
  email: 'any_email@mail.com',
  password: 'any_password',
};

jest.mock('bcrypt', () => ({
  compare: jest.fn(),
}));

jest.mock('jsonwebtoken', () => ({
  sign: jest.fn(),
}));

const mockUsersRepository: jest.Mocked<IUsersRepository> = {
  findByEmail: jest.fn(),
  create: jest.fn(),
  findById: jest.fn(),
};

describe('AuthenticateUserUseCase', () => {
  let authenticateUserUseCase: AuthenticateUserUseCase;

  beforeEach(() => {
    authenticateUserUseCase = new AuthenticateUserUseCase(mockUsersRepository);
  });

  it('Should be able to authentication a user on success', async () => {
    //Arrange
    mockUsersRepository.findByEmail.mockResolvedValueOnce(makeUser);

    (compare as jest.Mock).mockResolvedValueOnce(true);

    (sign as jest.Mock).mockReturnValue('fake-token');

    //Act
    const response = await authenticateUserUseCase.execute(makeValidCredential);

    //Assert
    expect(response).toHaveProperty('token', 'fake-token');
    expect(response.user).toEqual({
      name: 'any_name',
      email: 'any_email@mail.com',
    });
  });

  it('Should throw if user not exists', async () => {
    mockUsersRepository.findByEmail = jest.fn().mockResolvedValueOnce(null);

    await expect(
      authenticateUserUseCase.execute(makeValidCredential),
    ).rejects.toStrictEqual(new AppError('Email or password incorrect!', 400));
  });

  it('Should throw error if user insert invalid password', async () => {
    mockUsersRepository.findByEmail = jest.fn().mockResolvedValueOnce(makeUser);

    // (compare as jest.Mock).mockResolvedValue(false);

    await expect(
      authenticateUserUseCase.execute({
        email: 'any_email@mail.com',
        password: 'other_password',
      }),
    ).rejects.toStrictEqual(new AppError('Email or password incorrect!', 400));
  });
});
