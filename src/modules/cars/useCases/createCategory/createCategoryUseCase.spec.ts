// import 'reflect-metadata';
// import { CreateCategoryUseCase } from './createCategoryUseCase';
// import { ICategoriesRepository } from '../../repositories/iCategories.repository';
// import { AppError } from '../../../../shared/errors/appError';

// //Arrange Values

// const makeRequest = {
//   name: 'Category Test',
//   description: 'Category description test',
// };

// const mockCategoriesRepository: jest.Mocked<ICategoriesRepository> = {
//   findByName: jest.fn(),
//   create: jest.fn(),
//   list: jest.fn(),
// };

// describe('CreateCategoryUseCase', () => {
//   let createCategoryUseCase: CreateCategoryUseCase;

//   beforeEach(() => {
//     createCategoryUseCase = new CreateCategoryUseCase(mockCategoriesRepository);
//   });

//   it('Should be able to create a new category', async () => {
//     //Arrange
//     mockCategoriesRepository.findByName.mockResolvedValueOnce(undefined);

//     //Act
//     await createCategoryUseCase.execute(makeRequest);

//     //Assert
//     expect(mockCategoriesRepository.create).toHaveBeenCalledWith(makeRequest);
//   });

//   it('Should not be able to create a new category with name exists', async () => {
//     //Arrange
//     mockCategoriesRepository.findByName.mockResolvedValueOnce({
//       id: '1',
//       name: 'Category Test',
//       description: 'Category description test',
//       created_at: new Date('02-02-2024'),
//     });

//     //Assert
//     await expect(createCategoryUseCase.execute(makeRequest)).rejects.toEqual(
//       new AppError('Category already exists!'),
//     );
//   });
// });
