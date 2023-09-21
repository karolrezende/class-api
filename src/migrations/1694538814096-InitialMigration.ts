import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1694538814096 implements MigrationInterface {
    name = 'InitialMigration1694538814096'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" ADD "password" character varying(120) NOT NULL`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "password"`);
    }

}
