interface ICreateUserDto {
  name: string;
  password: string;
  email: string;
  driver_license: string;
  is_admin: boolean;
  id?: string;
  avatar?: string;
}

export { ICreateUserDto };
