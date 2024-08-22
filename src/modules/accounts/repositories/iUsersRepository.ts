import { ICreateUserDto } from '../dtos/iCreateUserDto';

interface IUsersRepository {
  create(data: ICreateUserDto): Promise<void>;
}

export { IUsersRepository };
