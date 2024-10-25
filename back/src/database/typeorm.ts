import { DataSource, EntityTarget, ObjectLiteral, Repository } from 'typeorm';

let typeORMDB: DataSource;

export default async function typeORMConnect(): Promise<void> {
  const dataSource = new DataSource({
    type: 'postgres',
    url: process.env.PGSQL_URL,
    entities: [`${__dirname}/entity/*.entity.ts`], // points to entities
    synchronize: true,
  });

  typeORMDB = await dataSource.initialize();
}

export function useTypeORM(
    entity: EntityTarget<ObjectLiteral>
  ): Repository<ObjectLiteral> {
    if (!typeORMDB) {
      throw new Error('TypeORM has not been initialized!');
    }
  
    return typeORMDB.getRepository(entity);
  }