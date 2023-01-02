import * as dotenv from 'dotenv';
import { join } from 'node:path';
import ConfigService from './ConfigService';

const envDir = join(process.cwd(), '.env');
dotenv.config({ path: envDir });

ConfigService.set(process.env);

export { default as ConfigService } from './ConfigService';
export * from './interface';
