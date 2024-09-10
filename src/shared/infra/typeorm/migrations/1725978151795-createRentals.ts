import { MigrationInterface, QueryRunner } from 'typeorm';

export class CreateRentals1725978151795 implements MigrationInterface {
  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.dropTable(new Table({}));
  }

  public async down(queryRunner: QueryRunner): Promise<void> {}
}
