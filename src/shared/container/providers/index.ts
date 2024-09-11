import { container } from 'tsyringe';
import { IDateProvider } from './dateProvider/IDateProvider';
import { DayJsDateProvider } from './dateProvider/implementations/dayJsDateProvider';

container.registerSingleton<IDateProvider>(
  'DayJsDateProvider',
  DayJsDateProvider,
);
