import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../../repositories/iUsersRepository';
import { ICreateUserDto } from '../../dtos/iCreateUserDto';

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
  }: ICreateUserDto): Promise<void> {
    await this.usersRepository.create({
      name,
      email,
      password,
      driver_license,
    });
  }
}
export { CreateUserUseCase };
