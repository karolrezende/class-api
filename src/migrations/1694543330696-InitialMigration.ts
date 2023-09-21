import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1694543330696 implements MigrationInterface {
    name = 'InitialMigration1694543330696'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" ADD "adminId" integer`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "UQ_7360a969df476f014faf2c26de2" UNIQUE ("adminId")`);
        await queryRunner.query(`ALTER TABLE "person" ADD CONSTRAINT "FK_7360a969df476f014faf2c26de2" FOREIGN KEY ("adminId") REFERENCES "admin"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "FK_7360a969df476f014faf2c26de2"`);
        await queryRunner.query(`ALTER TABLE "person" DROP CONSTRAINT "UQ_7360a969df476f014faf2c26de2"`);
        await queryRunner.query(`ALTER TABLE "person" DROP COLUMN "adminId"`);
    }

}
