import { inject, injectable } from 'tsyringe';
import { ICarsRepository } from '../../repositories/iCars.repository';
import { AppError } from '../../../../shared/errors/appError';
import { ISpecificationsRepository } from '../../repositories/iSpecifications.repository';

interface IRequest {
  car_id: string;
  specifications_id: string[];
}

@injectable()
class createCarSpecificationUseCase {
  constructor(
    @inject('CarsRepository')
    private carsRepository: ICarsRepository,
    private specificationsRepository: ISpecificationsRepository,
  ) {}
  async execute({ car_id, specifications_id }: IRequest): Promise<void> {
    const carExists = await this.carsRepository.findById(car_id);

    if (!carExists) {
      throw new AppError('Car does not exists!');
    }

    const specifications =
      await this.specificationsRepository.findByIds(specifications_id);

    carExists.specifications = specifications;

    await this.carsRepository.create(carExists);
  }
}

export { createCarSpecificationUseCase };
