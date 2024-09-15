import { inject, injectable } from 'tsyringe';
import { IUsersTokensRepository } from '../../repositories/iUsersTokensRepository';
import { AppError } from '../../../../shared/errors/appError';
import { IDateProvider } from '../../../../shared/container/providers/dateProvider/IDateProvider';
import { IUsersRepository } from '../../repositories/iUsersRepository';
import { hash } from 'bcrypt';

interface IRequest {
  token: string;
  password: string;
}

@injectable()
class ResetPasswordUserUseCase {
  constructor(
    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,
    @inject('DayJsDateProvider')
    private dateProvader: IDateProvider,
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async execute({ token, password }: IRequest): Promise<void> {
    const userToken =
      await this.usersTokensRepository.findByRefreshToken(token);

    if (!userToken) {
      throw new AppError('Token inválid!');
    }

    if (
      this.dateProvader.compareIfBefore(
        userToken.expires_date,
        this.dateProvader.dateNow(),
      )
    ) {
      throw new AppError('Token expired!');
    }

    const user = await this.usersRepository.findById(userToken.user_id);

    user.password = await hash(password, 8);

    await this.usersRepository.create(user);

    await this.usersTokensRepository.deleteById(userToken.id);
  }
}

export { ResetPasswordUserUseCase };
