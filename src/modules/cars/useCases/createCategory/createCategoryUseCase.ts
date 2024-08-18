import { ICategoriesRepository } from '../../repositories/iCategories.repository';

interface IRequest {
  name: string;
  description: string;
}

class CreateCategoryUseCase {
  constructor(private categoriesRepository: ICategoriesRepository) {}

  async execute({ name, description }: IRequest): Promise<void> {
    console.log('chegou aqui 3 -=-=-=');

    const categoryAlreadyExists =
      await this.categoriesRepository.findByName(name);
    console.log(categoryAlreadyExists);

    if (categoryAlreadyExists) {
      throw new Error('Category already exists!');
    }

    this.categoriesRepository.create({ name, description });
  }
}

export { CreateCategoryUseCase };
