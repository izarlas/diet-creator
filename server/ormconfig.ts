import { DataSource } from 'typeorm';
import { typeOrmConfig } from './src/database/typeorm.config';

export default new DataSource(typeOrmConfig);
