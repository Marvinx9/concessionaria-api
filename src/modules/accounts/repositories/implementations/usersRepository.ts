import { Repository } from 'typeorm';
import { ICreateUserDto } from '../../dtos/iCreateUserDto';
import { IUsersRepository } from '../iUsersRepository';
import { Users } from '../../entities/user';
import { dataSource } from '../../../../database/data-source';

class UsersRepository implements IUsersRepository {
  private repository: Repository<Users>;

  constructor() {
    this.repository = dataSource.getRepository(Users);
  }

  async create({
    name,
    email,
    driver_license,
    password,
    is_admin,
  }: ICreateUserDto): Promise<void> {
    const user = this.repository.create({
      name,
      email,
      driver_license,
      password,
      is_admin,
    });

    await this.repository.save(user);
  }

  async findByEmail(email: string): Promise<Users> {
    const user = await this.repository.findOneBy({ email });

    return user;
  }

  async findById(id: string): Promise<Users> {
    const user = await this.repository.findOneBy({ id });

    return user;
  }
}

export { UsersRepository };
