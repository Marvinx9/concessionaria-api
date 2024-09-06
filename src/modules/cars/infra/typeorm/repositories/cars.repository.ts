import { Repository } from 'typeorm';
import { dataSource } from '../../../../../shared/infra/typeorm/data-source';
import { ICreateCarDto } from '../../../dtos/iCreateCarDto';
import { ICarsRepository } from '../../../repositories/iCars.repository';
import { Car } from '../entities/car';

class CarsRepository implements ICarsRepository {
  private repository: Repository<Car>;

  constructor() {
    this.repository = dataSource.getRepository(Car);
  }

  async create({
    name,
    description,
    daily_rate,
    license_plate,
    fine_amount,
    brand,
    category_id,
  }: ICreateCarDto): Promise<Car> {
    const car = this.repository.create({
      name,
      description,
      daily_rate,
      license_plate,
      fine_amount,
      brand,
      category_id,
    });

    await this.repository.save(car);

    return car;
  }

  async findByLicensePlate(license_plate: string): Promise<Car> {
    const car = await this.repository.findOneBy({ license_plate });

    return car;
  }
}

export { CarsRepository };
