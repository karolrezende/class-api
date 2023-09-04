import { MigrationInterface, QueryRunner } from "typeorm";

export class InitialMigration1693843013636 implements MigrationInterface {
    name = 'InitialMigration1693843013636'

    public async up(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`CREATE TABLE "person" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "desc" character varying(250) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "PK_5fdaf670315c4b7e70cce85daa3" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "ativities" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "objetive" character varying(250) NOT NULL, "suppliesId" integer, CONSTRAINT "PK_3470f56b528fe2e01a0b3c813b7" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "supplies" ("id" SERIAL NOT NULL, "name" character varying(35) NOT NULL, "desc" character varying(250) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_f5bf463988950dfd84b2e39a3d6" UNIQUE ("name"), CONSTRAINT "PK_49c0dc272c9fcf2723bdfd48be1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "Professor" ("id" SERIAL NOT NULL, "exp" character varying(200) NOT NULL, "personId" integer, CONSTRAINT "REL_fdc32d85b89e78d1227d1f46a5" UNIQUE ("personId"), CONSTRAINT "PK_0370c22dca7a40f725affc6cdc8" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "classy" ("id" SERIAL NOT NULL, "number" character varying(12) NOT NULL, "coursesId" integer, "suppliesId" integer, "professorId" integer, "studentClassId" integer, CONSTRAINT "PK_18ea82559d6ab20dd9885b16711" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "studentClass" ("id" SERIAL NOT NULL, "name" character varying(50) NOT NULL, "objetive" character varying(250) NOT NULL, "grade" integer NOT NULL, CONSTRAINT "PK_c3dbd1e5a7ad86b4c93ffceccf1" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "student" ("id" SERIAL NOT NULL, "mat" character varying(11) NOT NULL, "personId" integer, CONSTRAINT "REL_1314dc48b129d9a708d996d642" UNIQUE ("personId"), CONSTRAINT "PK_3d8016e1cb58429474a3c041904" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "coments" ("id" SERIAL NOT NULL, "title" character varying(50) NOT NULL, "desc" character varying(250) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, "studentId" integer, "coursesId" integer, CONSTRAINT "PK_72e8370171a0aab72163a5dbf15" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "courses" ("id" SERIAL NOT NULL, "name" character varying(35) NOT NULL, "desc" character varying(250) NOT NULL, "createdAt" TIMESTAMP NOT NULL DEFAULT now(), "updatedAt" TIMESTAMP NOT NULL DEFAULT now(), "deletedAt" TIMESTAMP, CONSTRAINT "UQ_6ba1a54849ae17832337a39d5e5" UNIQUE ("name"), CONSTRAINT "PK_3f70a487cc718ad8eda4e6d58c9" PRIMARY KEY ("id"))`);
        await queryRunner.query(`CREATE TABLE "admin" ("id" SERIAL NOT NULL, "personId" integer, CONSTRAINT "REL_0248566ea8247eccf341639339" UNIQUE ("personId"), CONSTRAINT "PK_e032310bcef831fb83101899b10" PRIMARY KEY ("id"))`);
        await queryRunner.query(`ALTER TABLE "ativities" ADD CONSTRAINT "FK_785521bef3a4ac03708c10123f4" FOREIGN KEY ("suppliesId") REFERENCES "supplies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "Professor" ADD CONSTRAINT "FK_fdc32d85b89e78d1227d1f46a57" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "classy" ADD CONSTRAINT "FK_c5fe33f0f382d2339abc4757cb2" FOREIGN KEY ("coursesId") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "classy" ADD CONSTRAINT "FK_bb806518303477903de980bdb31" FOREIGN KEY ("suppliesId") REFERENCES "supplies"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "classy" ADD CONSTRAINT "FK_fa353891d3b6697db2c1be296d7" FOREIGN KEY ("professorId") REFERENCES "Professor"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "classy" ADD CONSTRAINT "FK_2fbde5e383ad2cca1a6dd0d0dc1" FOREIGN KEY ("studentClassId") REFERENCES "studentClass"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "student" ADD CONSTRAINT "FK_1314dc48b129d9a708d996d6421" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "coments" ADD CONSTRAINT "FK_1191298275bd932b57241997086" FOREIGN KEY ("studentId") REFERENCES "student"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "coments" ADD CONSTRAINT "FK_7ad9fb249e6bbbd4f8caeb0fbc0" FOREIGN KEY ("coursesId") REFERENCES "courses"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
        await queryRunner.query(`ALTER TABLE "admin" ADD CONSTRAINT "FK_0248566ea8247eccf341639339f" FOREIGN KEY ("personId") REFERENCES "person"("id") ON DELETE NO ACTION ON UPDATE NO ACTION`);
    }

    public async down(queryRunner: QueryRunner): Promise<void> {
        await queryRunner.query(`ALTER TABLE "admin" DROP CONSTRAINT "FK_0248566ea8247eccf341639339f"`);
        await queryRunner.query(`ALTER TABLE "coments" DROP CONSTRAINT "FK_7ad9fb249e6bbbd4f8caeb0fbc0"`);
        await queryRunner.query(`ALTER TABLE "coments" DROP CONSTRAINT "FK_1191298275bd932b57241997086"`);
        await queryRunner.query(`ALTER TABLE "student" DROP CONSTRAINT "FK_1314dc48b129d9a708d996d6421"`);
        await queryRunner.query(`ALTER TABLE "classy" DROP CONSTRAINT "FK_2fbde5e383ad2cca1a6dd0d0dc1"`);
        await queryRunner.query(`ALTER TABLE "classy" DROP CONSTRAINT "FK_fa353891d3b6697db2c1be296d7"`);
        await queryRunner.query(`ALTER TABLE "classy" DROP CONSTRAINT "FK_bb806518303477903de980bdb31"`);
        await queryRunner.query(`ALTER TABLE "classy" DROP CONSTRAINT "FK_c5fe33f0f382d2339abc4757cb2"`);
        await queryRunner.query(`ALTER TABLE "Professor" DROP CONSTRAINT "FK_fdc32d85b89e78d1227d1f46a57"`);
        await queryRunner.query(`ALTER TABLE "ativities" DROP CONSTRAINT "FK_785521bef3a4ac03708c10123f4"`);
        await queryRunner.query(`DROP TABLE "admin"`);
        await queryRunner.query(`DROP TABLE "courses"`);
        await queryRunner.query(`DROP TABLE "coments"`);
        await queryRunner.query(`DROP TABLE "student"`);
        await queryRunner.query(`DROP TABLE "studentClass"`);
        await queryRunner.query(`DROP TABLE "classy"`);
        await queryRunner.query(`DROP TABLE "Professor"`);
        await queryRunner.query(`DROP TABLE "supplies"`);
        await queryRunner.query(`DROP TABLE "ativities"`);
        await queryRunner.query(`DROP TABLE "person"`);
    }

}
