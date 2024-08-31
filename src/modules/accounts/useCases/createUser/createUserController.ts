import { container } from 'tsyringe';
import { CreateUserUseCase } from './createUserUseCase';
import { Request, Response } from 'express';

class CreateUserController {
  async handle(request: Request, response: Response): Promise<Response> {
    const { name, email, password, driver_license } = request.body;

    const createUserUseCase = container.resolve(CreateUserUseCase);

    const is_admin = false;

    await createUserUseCase.execute({
      name,
      email,
      password,
      driver_license,
      is_admin,
    });

    return response.status(201).send();
  }
}

export { CreateUserController };
