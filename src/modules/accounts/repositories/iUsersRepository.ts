import { ICreateUserDto } from '../dtos/iCreateUserDto';

interface IUsersRepository {
  create(data: ICreateUserDto): Promise<void>;
  findByEmail(email: string): Promise<void>;
}

export { IUsersRepository };
