import { IConfigService } from './interface';

class ConfigService implements IConfigService {
  private static instance: ConfigService;
  public map: Map<string, string | undefined> = new Map();

  constructor() {
    this.map.set('VITE_ORIGIN', 'https://<YOUR SITE>');
    this.map.set('VITE_API_URL', 'https://<YOUR API>');
    if (ConfigService.instance instanceof ConfigService) {
      return ConfigService.instance;
    }

    ConfigService.instance = this;
    return this;
  }

  public get = (key: string): string | undefined => {
    return this.map.get(key);
  };

  public set = (data: NodeJS.ProcessEnv): void => {
    if (!data) return;
    for (const key in data) {
      this.map.set(key, data[key]);
    }
  };
}
export default new ConfigService();
