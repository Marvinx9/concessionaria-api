import { Repository } from 'typeorm';
import { ICreateRentalDto } from '../../../dtos/ICreateRentalDto';
import { IRentalsRepository } from '../../../repositories/IRentalsRepository';
import { Rental } from '../entities/rental';
import { dataSource } from '../../../../../shared/infra/typeorm/data-source';

class RentalsRepository implements IRentalsRepository {
  private repository: Repository<Rental>;

  constructor() {
    this.repository = dataSource.getRepository(Rental);
  }

  async findByUser(user_id: string): Promise<Rental[]> {
    const rental = await this.repository.find({
      where: { user_id },
      relations: ['car'],
    });

    return rental;
  }

  async findById(id: string): Promise<Rental> {
    const rental = await this.repository.findOneBy({ id });

    return rental;
  }

  async findOpenRentalByCar(car_id: string): Promise<Rental> {
    const openByCar = await this.repository.findOne({
      where: { car_id, end_date: null },
    });

    return openByCar;
  }

  async findOpenRentalByUser(user_id: string): Promise<Rental> {
    const openByUser = await this.repository.findOne({
      where: { user_id, end_date: null },
    });

    return openByUser;
  }

  async create({
    car_id,
    expected_return_date,
    user_id,
    start_date,
    id,
    end_date,
    total,
  }: ICreateRentalDto): Promise<Rental> {
    const rental = this.repository.create({
      car_id,
      expected_return_date,
      user_id,
      start_date,
      id,
      end_date,
      total,
    });

    await this.repository.save(rental);

    return rental;
  }
}

export { RentalsRepository };
