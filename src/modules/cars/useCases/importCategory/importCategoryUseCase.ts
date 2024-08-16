import { parse } from 'csv-parse';
import fs from 'fs';

class ImportCategoryUseCase {
  execute(file: Express.Multer.File): void {
    const stream = fs.createReadStream(file.path);

    const parser = parse();

    stream.pipe(parser);

    parser.on('data', async (line) => {
      console.log(line);
    });
  }
}

export { ImportCategoryUseCase };
