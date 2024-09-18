import { inject, injectable } from 'tsyringe';
import { v4 as uuidV4 } from 'uuid';
import { resolve } from 'path';
import { IUsersRepository } from '../../repositories/iUsersRepository';
import { IUsersTokensRepository } from '../../repositories/iUsersTokensRepository';
import { AppError } from '../../../../shared/errors/appError';
import { IDateProvider } from '../../../../shared/container/providers/dateProvider/IDateProvider';
import { IMailProvider } from '../../../../shared/container/providers/mailProvider/IMailProvider';
import * as dotenv from 'dotenv';

dotenv.config();

@injectable()
class SendForgotPasswordMailUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
    @inject('UsersTokensRepository')
    private usersTokensRepository: IUsersTokensRepository,
    @inject('DayJsDateProvider')
    private dateProvider: IDateProvider,
    @inject('SendGridMailProvider')
    private mailProvider: IMailProvider,
  ) {}
  async execute(email: string): Promise<void> {
    const users = await this.usersRepository.findByEmail(email);

    const templatePath = resolve(
      __dirname,
      '..',
      '..',
      'views',
      'emails',
      'forgotPassword.hbs',
    );

    if (!users) {
      throw new AppError('User does not exists!');
    }

    const token = uuidV4();

    const expires_date = this.dateProvider.addHours(3);

    await this.usersTokensRepository.create({
      refresh_token: token,
      user_id: users.id,
      expires_date,
    });

    const variables = {
      name: users.name,
      link: `${process.env.FORGOT_MAIL_URL}${token}`,
    };

    await this.mailProvider.sendMail(
      email,
      'Recuperação de senha',
      variables,
      templatePath,
    );
  }
}

export { SendForgotPasswordMailUseCase };
