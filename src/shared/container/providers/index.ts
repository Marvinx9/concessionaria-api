import { container } from 'tsyringe';
import { IDateProvider } from './dateProvider/IDateProvider';
import { DayJsDateProvider } from './dateProvider/implementations/dayJsDateProvider';
import { EtherealMailProvider } from './mailProvider/implementations/EtherealMailProvider';
import { IMailProvider } from './mailProvider/IMailProvider';

container.registerSingleton<IDateProvider>(
  'DayJsDateProvider',
  DayJsDateProvider,
);

container.registerInstance<IMailProvider>(
  'EtherealMailProvider',
  new EtherealMailProvider(),
);
