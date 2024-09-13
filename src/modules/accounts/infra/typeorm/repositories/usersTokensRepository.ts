import { Repository } from 'typeorm';
import { ICreateUserTokenDto } from '../../../dtos/iCreateUserTokenDto';
import { IUsersTokensRepository } from '../../../repositories/iUsersTokensRepository';
import { UserTokens } from '../entities/userTokens';
import { dataSource } from '../../../../../shared/infra/typeorm/data-source';

class UsersTokensRepository implements IUsersTokensRepository {
  private repository: Repository<UserTokens>;

  constructor() {
    this.repository = dataSource.getRepository(UserTokens);
  }

  async create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokenDto): Promise<UserTokens> {
    const userToken = this.repository.create({
      expires_date,
      refresh_token,
      user_id,
    });

    await this.repository.save(userToken);

    return userToken;
  }
}

export { UsersTokensRepository };
