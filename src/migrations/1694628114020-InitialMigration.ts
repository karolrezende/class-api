import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1694628114020 implements MigrationInterface {
    name = 'InitialMigration1694628114020'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" ADD "email" character varying(100) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "email"`);
    }

}
