interface ICreateUserDto {
  name: string;
  password: string;
  email: string;
  driver_license: string;
  is_admin: boolean;
}

export { ICreateUserDto };
