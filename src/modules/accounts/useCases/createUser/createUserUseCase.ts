import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../../repositories/iUsersRepository';
import { ICreateUserDto } from '../../dtos/iCreateUserDto';
import { hash } from 'bcrypt';
import { AppError } from '../../../../errors/appError';

@injectable()
class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    name,
    email,
    password,
    driver_license,
    is_admin,
  }: ICreateUserDto): Promise<void> {
    const userAlreadyExists = await this.usersRepository.findByEmail(email);

    if (userAlreadyExists) {
      throw new AppError('User already exists!');
    }

    const passwordHash = await hash(password, 12);

    this.usersRepository.create({
      name,
      email,
      password: passwordHash,
      driver_license,
      is_admin,
    });
  }
}

export { CreateUserUseCase };
