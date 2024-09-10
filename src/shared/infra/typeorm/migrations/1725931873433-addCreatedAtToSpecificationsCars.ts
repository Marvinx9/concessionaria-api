import { MigrationInterface, QueryRunner, TableColumn } from 'typeorm';

export class AddCreatedAtToTableName1623949755533
  implements MigrationInterface
{
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumn(
      'specifications_cars',
      new TableColumn({
        name: 'created_at',
        type: 'timestamp',
        default: 'NOW()',
      }),
    );
  }

  public async down(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropColumn('specifications_cars', 'created_at');
  }
}
