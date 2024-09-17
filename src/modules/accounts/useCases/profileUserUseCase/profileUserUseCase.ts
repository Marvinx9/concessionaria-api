import { inject, injectable } from 'tsyringe';
import { IUsersRepository } from '../../repositories/iUsersRepository';
import { IUserResponseDto } from '../../dtos/IUserResponseDto';
import { UserMap } from '../../mapper/userMap';

@injectable()
class ProfileUserUseCase {
  constructor(
    @inject('UsersRepository')
    private usersRepository: IUsersRepository,
  ) {}
  async execute(id: string): Promise<IUserResponseDto> {
    const user = await this.usersRepository.findById(id);

    return UserMap.toDto(user);
  }
}

export { ProfileUserUseCase };
