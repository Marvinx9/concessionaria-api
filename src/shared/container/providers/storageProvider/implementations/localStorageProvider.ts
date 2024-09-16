import fs from 'fs';
import { resolve } from 'path';
import { IStorageProvider } from '../IStorageProvider';
import upload from '../../../../../config/upload';

class LocalStorageProvider implements IStorageProvider {
  async save(file: string, folder: string): Promise<string> {
    const oldPath = resolve(upload.tmpFolder, file);
    const newPath = resolve(`${upload.tmpFolder}/${folder}`, file);

    await fs.promises.copyFile(oldPath, newPath);

    await fs.promises.unlink(oldPath);

    return file;
  }

  async delete(file: string, folder: string): Promise<void> {
    const filename = resolve(`${upload.tmpFolder}/${folder}`, file);

    try {
      await fs.promises.stat(filename);
    } catch {
      return;
    }
    await fs.promises.unlink(filename);
  }
}

export { LocalStorageProvider };
