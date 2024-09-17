import { container } from 'tsyringe';
import { IDateProvider } from './dateProvider/IDateProvider';
import { DayJsDateProvider } from './dateProvider/implementations/dayJsDateProvider';
import { EtherealMailProvider } from './mailProvider/implementations/EtherealMailProvider';
import { IMailProvider } from './mailProvider/IMailProvider';
import { IStorageProvider } from './storageProvider/IStorageProvider';
import { LocalStorageProvider } from './storageProvider/implementations/localStorageProvider';
import { S3StorageProvider } from './storageProvider/implementations/S3StorageProvider';
import * as dotenv from 'dotenv';

dotenv.config();

container.registerSingleton<IDateProvider>(
  'DayJsDateProvider',
  DayJsDateProvider,
);

container.registerInstance<IMailProvider>(
  'EtherealMailProvider',
  new EtherealMailProvider(),
);

const diskStorage = {
  local: LocalStorageProvider,
  s3: S3StorageProvider,
};

container.registerSingleton<IStorageProvider>(
  'StorageProvider',
  diskStorage[process.env.disk],
);
