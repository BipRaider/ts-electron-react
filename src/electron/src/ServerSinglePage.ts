import type { App } from 'electron';

/** Making a single-page web app */
export default class ServerSinglePage {
  constructor(private app: App) {}

  public init = (): void => {
    this.app.setPath('userData', `${this.app.getPath('userData')} (development)`);
  };
}
