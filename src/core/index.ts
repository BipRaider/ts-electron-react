import { join } from 'node:path';
import { contextBridge } from 'electron';
import * as dotenv from 'dotenv';

import { ConfigService } from './config';

const envDir = join(process.cwd(), '.env');
dotenv.config({ path: envDir });

ConfigService.set(process.env);

contextBridge.exposeInMainWorld('app_core', {
  ConfigService,
});
