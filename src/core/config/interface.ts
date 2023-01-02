export interface IConfigService {
  /*** Get a property from `.env` and `process.env`*/
  get: (key: string) => string | undefined;
  set: (data: NodeJS.ProcessEnv) => void;
  map: Map<string, string>;
}

export interface Dictionary<V = string> {
  [key: string]: V;
}

export enum ENV {
  VITE_ORIGIN = 'VITE_ORIGIN',
  VITE_API_URL = 'VITE_API_URL',
  NODE_ENV = 'NODE_ENV',
  ORIGIN = 'origin',
  API_URL = 'url',
  PROD = 'PROD',
  DEV = 'DEV',
}
