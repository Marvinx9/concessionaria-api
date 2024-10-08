import { ICreateUserDto } from '../dtos/iCreateUserDto';
import { Users } from '../infra/typeorm/entities/user';

interface IUsersRepository {
  create(data: ICreateUserDto): Promise<void>;
  findByEmail(email: string): Promise<Users>;
  findById(id: string): Promise<Users>;
}

export { IUsersRepository };
