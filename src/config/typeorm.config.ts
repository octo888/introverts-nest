import { TypeOrmModuleOptions } from '@nestjs/typeorm';

export const typeOrmConfig: TypeOrmModuleOptions = {
  type: 'postgres',
  host: 'localhost',
  port: 5432,
  username: 'tester',
  password: 'tester',
  database: 'intro',
  entities: [__dirname + '/../**/*.entity.ts'],
  synchronize: true
};
