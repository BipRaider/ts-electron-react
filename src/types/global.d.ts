import { TitlebarContextApi } from '../preload/src/titlebarContext';
import { IConfigService } from '../core/config';
import 'electron';
//Should be
export {};

// This additional params for global interfaces
declare global {
  /** Added new params from `.env` file */
  export interface ImportMetaEnv {
    GITHUB_AUTH_TOKEN: string;
    NODE_ENV: 'development' | 'production';
    PORT?: string;
    PWD: string;
    VITE_ORIGIN: string;
    VITE_API_URL: string;
    PROD: boolean;
    DEV: boolean;
  }
  /** Added new params from `preload` */
  export interface AppWindow {
    titlebar: TitlebarContextApi;
    openUrl: (url: string) => Promise<void>;
  }
  export interface AppCore {
    ConfigService: IConfigService;
  }
  /** Added new params to Window interface */
  interface Window {
    app_window: AppWindow;
    app_core: AppCore;
  }

  /** Added new params to NodeJs interface */
  namespace NodeJS {
    interface ImportMeta {
      env: ImportMetaEnv;
    }
  }
}
