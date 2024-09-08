import { ICreateCarDto } from '../dtos/iCreateCarDto';
import { Car } from '../infra/typeorm/entities/car';

interface ICarsRepository {
  create(data: ICreateCarDto): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car>;
  findAvailable(
    category_id?: string,
    brand?: string,
    name?: string,
  ): Promise<Car[]>;
}

export { ICarsRepository };
