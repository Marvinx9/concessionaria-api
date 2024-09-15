import { ICreateUserTokenDto } from '../dtos/iCreateUserTokenDto';
import { UserTokens } from '../infra/typeorm/entities/userTokens';

interface IUsersTokensRepository {
  create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokenDto): Promise<UserTokens>;

  findByRefreshToken(refresh_token: string): Promise<UserTokens>;

  findByUserIdAndRefreshToken(
    user_id: string,
    refresh_token: string,
  ): Promise<UserTokens>;

  deleteById(id: string): Promise<void>;
}

export { IUsersTokensRepository };
