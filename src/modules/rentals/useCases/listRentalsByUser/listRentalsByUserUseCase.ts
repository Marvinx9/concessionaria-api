import { inject, injectable } from 'tsyringe';
import { IRentalsRepository } from '../../repositories/IRentalsRepository';
import { Rental } from '../../infra/typeorm/entities/rental';

@injectable()
class ListRentalsByUserUseCase {
  constructor(
    @inject('RentalsRepository')
    private rentalsRepository: IRentalsRepository,
  ) {}

  async execute(user_id: string): Promise<Rental[]> {
    const rentalsByUser = await this.rentalsRepository.findByUser(user_id);

    return rentalsByUser;
  }
}

export { ListRentalsByUserUseCase };
