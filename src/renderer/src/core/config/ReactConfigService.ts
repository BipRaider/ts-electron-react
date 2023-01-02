import { ENV, IReactConfigService } from './interface';

class ReactConfigService implements IReactConfigService {
  #map: Map<string, string | undefined> = new Map();
  constructor() {
    this.init();
    this.#map.set('VITE_ORIGIN', 'https://<YOUR SITE>');
    this.#map.set('VITE_API_URL', 'https://<YOUR API>');
  }
  private init() {
    const { app_core } = window;
    const { ConfigService } = app_core;
    this.set(import.meta?.env);
    const map = ConfigService.map;
    map.forEach((value, key) => {
      this.#map.set(key, value);
    });
  }

  public get = (key: ENV & keyof NodeJS.ProcessEnv & keyof ImportMetaEnv): string | undefined => {
    return this.#map.get(key);
  };

  public set = (data: NodeJS.ProcessEnv): void => {
    if (!data) return;
    for (const key in data) {
      this.#map.set(key, data[key]);
    }
  };
}

export default new ReactConfigService();
