import { ICreateUserTokenDto } from '../dtos/iCreateUserTokenDto';
import { UserTokens } from '../infra/typeorm/entities/userTokens';

interface IUsersTokensRepository {
  create({
    expires_date,
    refresh_token,
    user_id,
  }: ICreateUserTokenDto): Promise<UserTokens>;
}

export { IUsersTokensRepository };
