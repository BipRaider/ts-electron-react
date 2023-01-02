import { IMenu } from '../interface';

const devTools = [
  {
    name: 'Toogle Developer Tools',
    action: 'toggle_devtools',
    shortcut: 'Ctrl+Shift+I',
  },
];

export const view: IMenu = {
  name: 'View',
  items: [
    {
      name: 'Reload',
      action: 'reload',
      shortcut: 'Ctrl+R',
    },
    {
      name: 'Force Reload',
      action: 'force_reload',
      shortcut: 'Ctrl+Shift+R',
    },
    ...devTools,
    {
      name: '__',
    },
    {
      name: 'Actual Size',
      action: 'actual_size',
      shortcut: 'Ctrl+0',
    },
    {
      name: 'Zoom In',
      action: 'zoom_in',
      shortcut: 'Ctrl +',
    },
    {
      name: 'Zoom Out',
      action: 'zoom_out',
      shortcut: 'Ctrl -',
    },
    // {
    //   name: '__',
    // },
    // {
    //   name: 'Toggle Fullscreen',
    //   action: 'toggle_fullscreen',
    //   shortcut: 'F11',
    // },
  ],
};
