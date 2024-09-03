import { CarsRepository } from '../../infra/typeorm/repositories/cars.repository';
import { CreateCarUseCase } from './createCarUseCase';

//Arrange Values
const makeCreateCar = {
  name: 'any_name',
  description: 'any_description',
  daily_rate: 100,
  license_plate: 'ABC-123',
  fine_amount: 512,
  brand: 'any_brand',
  category_id: '1',
};

let createCarUseCase: CreateCarUseCase;
let carsRepository: CarsRepository;

describe('CreateCarUseCase', () => {
  beforeEach(() => {
    carsRepository = new CarsRepository();
    createCarUseCase = new CreateCarUseCase(carsRepository);
  });
  it('Should be able to create a new car', async () => {
    //Act
    await createCarUseCase.execute(makeCreateCar);
  });

  it('Should not be able to create a car with exists license plate', async () => {});

  it('Should create a car with available true by default', async () => {});
});
