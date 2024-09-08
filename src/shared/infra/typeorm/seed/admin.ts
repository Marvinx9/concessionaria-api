import { dataSource } from '../data-source';
import { v4 as uuidV4 } from 'uuid';
import { hash } from 'bcrypt';

async function create() {
  await dataSource.initialize();

  const id = uuidV4();
  const password = await hash('admin', 8);

  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const connection = dataSource.query(
    `
        INSERT INTO USERS(
            id,
            name,
            email,
            driver_license,
            password,
            is_admin,
            created_at)
        VALUES (
            '${id}',
            'admin',
            'admin@gmail.com',
            '12345',
            '${password}',
            true,
            '${new Date().toISOString()}')
        `,
  );

  dataSource.destroy;
}
('');

create().then(() => console.log('User admin created'));
