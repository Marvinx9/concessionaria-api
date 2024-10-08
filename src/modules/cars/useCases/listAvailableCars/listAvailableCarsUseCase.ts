import { inject, injectable } from 'tsyringe';
import { Car } from '../../infra/typeorm/entities/car';
import { ICarsRepository } from '../../repositories/iCars.repository';

interface IRequest {
  category_id?: string;
  brand?: string;
  name?: string;
}

@injectable()
class ListAvailableCarsUseCase {
  constructor(
    @inject('CarsRepository') private carsRepository: ICarsRepository,
  ) {}

  async execute({ category_id, brand, name }: IRequest): Promise<Car[]> {
    const cars = await this.carsRepository.findAvailable(
      category_id,
      brand,
      name,
    );
    return cars;
  }
}

export { ListAvailableCarsUseCase };
