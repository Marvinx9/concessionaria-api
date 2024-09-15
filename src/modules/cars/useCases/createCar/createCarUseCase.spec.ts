// import 'reflect-metadata';
// import { ICarsRepository } from '../../repositories/iCars.repository';
// import { CreateCarUseCase } from './createCarUseCase';

// //Arrange Values
// const makeCreateCar = {
//   name: 'any_name',
//   description: 'any_description',
//   daily_rate: 100,
//   license_plate: 'ABC-123',
//   fine_amount: 512,
//   brand: 'any_brand',
//   category_id: '1',
// };

// const mockcarsRepository: jest.Mocked<ICarsRepository> = {
//   create: jest.fn(),
//   findByLicensePlate: jest.fn(),
//   findAvailable: jest.fn(),
// };

// describe('CreateCarUseCase', () => {
//   let createCarUseCase: CreateCarUseCase;

//   beforeEach(() => {
//     createCarUseCase = new CreateCarUseCase(mockcarsRepository);
//   });

//   it('Should be able to list available cars', async () => {
//     //Arrange

//     //Act
//     await createCarUseCase.execute(makeCreateCar);

//     //Assert
//     expect(mockcarsRepository.create).toHaveBeenCalled();
//   });
// });
