import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1694626672459 implements MigrationInterface {
    name = 'InitialMigration1694626672459'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" ADD "isAdm" boolean NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "isAdm"`);
    }

}
