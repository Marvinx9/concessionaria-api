import { IUserResponseDto } from '../dtos/IUserResponseDto';
import { Users } from '../infra/typeorm/entities/user';

class UserMap {
  static toDto(user: Users): IUserResponseDto {
    const userDto: IUserResponseDto = {
      email: user.email,
      name: user.name,
      id: user.id,
      avatar: user.avatar,
      driver_license: user.driver_license,
      avatar_url: user.avatar_url(),
    };

    return userDto;
  }
}

export { UserMap };
