import { ICreateUserDto } from '../dtos/iCreateUserDto';
import { Users } from '../entities/user';

interface IUsersRepository {
  create(data: ICreateUserDto): Promise<void>;
  findByEmail(email: string): Promise<Users>;
}

export { IUsersRepository };
