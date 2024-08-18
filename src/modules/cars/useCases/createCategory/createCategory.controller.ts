import { Request, Response } from 'express';
import { CreateCategoryUseCase } from './createCategoryUseCase';

class CreateCategoryController {
  constructor(private createCategoryUseCase: CreateCategoryUseCase) {}

  async handle(request: Request, response: Response): Promise<Response> {
    console.log('chegou aqui 1');

    const { name, description } = request.body;

    await this.createCategoryUseCase.execute({ name, description });
    return response.status(201).send();
  }
}

export { CreateCategoryController };
