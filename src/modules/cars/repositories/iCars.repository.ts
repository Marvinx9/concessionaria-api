import { ICreateCarDto } from '../dtos/ICreateCarDto';
import { Car } from '../infra/typeorm/entities/car';

interface ICarsRepository {
  create(data: ICreateCarDto): Promise<Car>;
  findByLicensePlate(license_plate: string): Promise<Car>;
}

export { ICarsRepository };
