import 'dotenv/config';
import path from 'path';
import 'reflect-metadata';
import { Admin, DataSource, DataSourceOptions, Repository, getRepository } from 'typeorm';
import { Courses } from './entities/courses.entities';
import { Person } from './entities/person.entities';

const dataSourceConfig = (): DataSourceOptions => {
  const entitiesPath: string = path.join(__dirname, './entities/**.{ts,js}');
  const migrationPath: string = path.join(__dirname, './migrations/**.{ts,js}');

  const nodeEnv: string | undefined = process.env.NODE_ENV;

  if (nodeEnv === 'test') {
    return {
      type: 'sqlite',
      database: ':memory:',
      synchronize: true,
      entities: [entitiesPath],
    };
  }


  const dbUrl: string | undefined = process.env.DATABASE_URL;

  if (!dbUrl) throw new Error("Missing env var: 'DATABASE_URL'");

  return {
    type: 'postgres',
    url: dbUrl,
    synchronize: false,
    logging: true,
    entities: [entitiesPath],
    migrations: [migrationPath],
  };
};

export const AppDataSource = new DataSource(dataSourceConfig());


export const courseRepository : Repository<Courses> = AppDataSource.getRepository(Courses)
export const personRepository : Repository<Person> = AppDataSource.getRepository(Person)
export const adminRepository : Repository<Admin> = AppDataSource.getRepository(Admin)