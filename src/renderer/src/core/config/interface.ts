export enum ENV {
  VITE_ORIGIN = 'VITE_ORIGIN',
  VITE_API_URL = 'VITE_API_URL',
  NODE_ENV = 'NODE_ENV',
  ORIGIN = 'origin',
  API_URL = 'url',
  PROD = 'PROD',
  DEV = 'DEV',
}

export interface IReactConfigService {
  /*** Get a property from `.env` and `process.env`*/
  get: (key: ENV) => string | undefined;
  set: (data: NodeJS.ProcessEnv | ImportMetaEnv) => void;
}
