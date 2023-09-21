import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1694542764426 implements MigrationInterface {
    name = 'InitialMigration1694542764426'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "studentClass" ADD "studentId" integer`);
        await queryRunner.query(`ALTER TABLE "studentClass" ADD CONSTRAINT "UQ_29213c989c60b22263a4844d890" UNIQUE ("studentId")`);
        await queryRunner.query(`ALTER TABLE "studentClass" ADD CONSTRAINT "FK_29213c989c60b22263a4844d890" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "studentClass" DROP CONSTRAINT "FK_29213c989c60b22263a4844d890"`);
        await queryRunner.query(`ALTER TABLE "studentClass" DROP CONSTRAINT "UQ_29213c989c60b22263a4844d890"`);
        await queryRunner.query(`ALTER TABLE "studentClass" DROP COLUMN "studentId"`);
    }

}
