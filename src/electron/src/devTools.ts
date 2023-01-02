//https://github.com/MarshallOfSound/electron-devtools-installer#readme

import installExtension, {
  REDUX_DEVTOOLS,
  REACT_DEVELOPER_TOOLS,
  // EMBER_INSPECTOR,
  //  BACKBONE_DEBUGGER, JQUERY_DEBUGGER,
  //  ANGULARJS_BATARANG, VUEJS_DEVTOOLS,
  //  VUEJS3_DEVTOOLS,
  //  CYCLEJS_DEVTOOL, MOBX_DEVTOOLS,
  //  APOLLO_DEVELOPER_TOOLS
} from 'electron-devtools-installer';

export const installExtensions = async () => {
  try {
    const extensions = [REDUX_DEVTOOLS, REACT_DEVELOPER_TOOLS];
    return await installExtension(extensions);
  } catch {
    console.dir(`[DevTools]: Not found.`);
  }
};
