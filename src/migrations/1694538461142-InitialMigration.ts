import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1694538461142 implements MigrationInterface {
    name = 'InitialMigration1694538461142'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP CONSTRAINT "FK_0248566ea8247eccf341639339f"`);
        await queryRunner.query(`ALTER TABLE "admin" DROP CONSTRAINT "REL_0248566ea8247eccf341639339"`);
        await queryRunner.query(`ALTER TABLE "admin" DROP COLUMN "personId"`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" ADD "personId" integer`);
        await queryRunner.query(`ALTER TABLE "admin" ADD CONSTRAINT "REL_0248566ea8247eccf341639339" UNIQUE ("personId")`);
        await queryRunner.query(`ALTER TABLE "admin" ADD CONSTRAINT "FK_0248566ea8247eccf341639339f" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

}
