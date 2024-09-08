import 'reflect-metadata';
import { ListAvailableCarsUseCase } from './listAvailableCarsUseCase';
import { ICarsRepository } from '../../repositories/iCars.repository';
import { Category } from '../../infra/typeorm/entities/category';

// Arrange Values
const makeRequest = {
  name: 'any_name',
};

const mockcarsRepository: jest.Mocked<ICarsRepository> = {
  create: jest.fn(),
  findByLicensePlate: jest.fn(),
  findAvailable: jest.fn(),
};

describe('ListAvailableCarsUseCase', () => {
  let listAvailableCarsUseCase: ListAvailableCarsUseCase;

  beforeEach(() => {
    listAvailableCarsUseCase = new ListAvailableCarsUseCase(mockcarsRepository);
  });

  it('Should be able to list available cars', async () => {
    // Arrange
    mockcarsRepository.findAvailable.mockResolvedValueOnce([
      {
        id: 'any_id',
        available: true,
        name: 'any_name',
        description: 'any_description',
        daily_rate: 111,
        license_plate: 'test-123',
        fine_amount: 100,
        brand: 'any_brand',
        category_id: 'any_category_id',
        created_at: new Date('2024-09-08'),
        category: new Category(),
      },
      {
        id: 'other_id',
        available: false,
        name: 'other_name',
        description: 'other_description',
        daily_rate: 522,
        license_plate: 'test-658',
        fine_amount: 411,
        brand: 'other_brand',
        category_id: 'other_category_id',
        created_at: new Date('2024-05-02'),
        category: new Category(),
      },
    ]);

    // Act
    const result = await listAvailableCarsUseCase.execute(makeRequest);

    // Assert
    expect(result).toEqual([
      expect.objectContaining({
        id: 'any_id',
        available: true,
        name: 'any_name',
        description: 'any_description',
        daily_rate: 111,
        license_plate: 'test-123',
        fine_amount: 100,
        brand: 'any_brand',
        category_id: 'any_category_id',
        created_at: new Date('2024-09-08'),
        category: expect.objectContaining({}),
      }),
      expect.objectContaining({
        id: 'other_id',
        available: false,
        name: 'other_name',
        description: 'other_description',
        daily_rate: 522,
        license_plate: 'test-658',
        fine_amount: 411,
        brand: 'other_brand',
        category_id: 'other_category_id',
        created_at: new Date('2024-05-02'),
        category: expect.objectContaining({}),
      }),
    ]);
    // Esperando que findAvailable seja chamado com os valores corretos.
    expect(mockcarsRepository.findAvailable).toHaveBeenCalledWith(
      undefined,
      undefined,
      'any_name',
    );
  });
});
