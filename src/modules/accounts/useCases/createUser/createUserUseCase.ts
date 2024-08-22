import { inject } from 'tsyringe';
import { IUsersRepository } from '../../repositories/iUsersRepository';
import { ICreateUserDto } from '../../dtos/iCreateUserDto';

class CreateUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}

  async execute({
    name,
    username,
    email,
    password,
    driver_license,
  }: ICreateUserDto): Promise<void> {
    await this.usersRepository.create({
      name,
      username,
      email,
      password,
      driver_license,
    });
  }
}
export { CreateUserUseCase };
