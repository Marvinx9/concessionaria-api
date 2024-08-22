import { Repository } from 'typeorm';
import { ICreateUserDto } from '../../dtos/iCreateUserDto';
import { IUsersRepository } from '../iUsersRepository';
import { User } from '../../entities/user';
import { dataSource } from '../../../../database/data-source';

class UsersRepository implements IUsersRepository {
  private repository: Repository<User>;

  constructor() {
    this.repository = dataSource.getRepository(User);
  }

  async create({
    name,
    email,
    driver_license,
    password,
  }: ICreateUserDto): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password,
    });

    await this.repository.save(user);
  }
}

export { UsersRepository };
