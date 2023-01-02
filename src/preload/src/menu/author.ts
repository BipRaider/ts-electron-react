import { IMenu } from '../interface';

export const author: IMenu = {
  name: 'Author',
  items: [
    {
      name: 'BipRaider',
      action: 'open_url',
      value: 'https://github.com/BipRaider',
      shortcut: '@bip',
    },
  ],
};
