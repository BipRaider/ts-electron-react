// Forge Configuration
const path = require('path');

module.exports = {
  // Packager Config
  packagerConfig: {
    // Create asar archive for main, renderer process files
    asar: true,
    // Set executable name
    executableName: 'name executable',
    // Set application copyright
    appCopyright: 'Copyright (C) 2021',
    // Set application icon
    icon: path.resolve('assets/images/appIcon.ico'),
  },
  // Forge Makers
  makers: [
    {
      // Squirrel.Windows is a no-prompt, no-hassle, no-admin method of installing
      // Windows applications and is therefore the most user friendly you can get.
      name: '@electron-forge/maker-squirrel',
      config: {
        name: 'electron-react-ts',
      },
    },
    {
      // The Zip target builds basic .zip files containing your packaged application.
      // There are no platform specific dependencies for using this maker and it will run on any platform.
      name: '@electron-forge/maker-zip',
      platforms: ['darwin'],
    },
    {
      // The deb target builds .deb packages, which are the standard package format for Debian-based
      // Linux distributions such as Ubuntu.
      name: '@electron-forge/maker-deb',
      config: {},
    },
    {
      // The RPM target builds .rpm files, which is the standard package format for
      // RedHat-based Linux distributions such as Fedora.
      name: '@electron-forge/maker-rpm',
      config: {},
    },
  ],
};
