import { Expose } from 'class-transformer';

export class IUserResponseDto {
  @Expose()
  email: string;

  @Expose()
  name: string;

  @Expose()
  id: string;

  @Expose()
  avatar?: string;

  @Expose()
  driver_license?: string;

  @Expose()
  avatar_url?: string;

  constructor(
    email: string,
    name: string,
    id: string,
    avatar?: string,
    driver_license?: string,
    avatar_url?: string,
  ) {
    this.email = email;
    this.name = name;
    this.id = id;
    this.avatar = avatar;
    this.driver_license = driver_license;
    this.avatar_url = avatar_url;
  }
}
