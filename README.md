# React Tailwind Typescript Chrome Extension Boilerplate

## Getting Started

1. `yarn` to install dependancies
2. `yarn dev` to start running the fast development mode Webpack build process that bundle files into the `dist` folder
3. `yarn add <package_name>` to install new packages

## Loading The Chrome Extension

1. Open Chrome and navigate to `chrome://extensions/`
2. Toggle on `Developer mode` in the top right corner
3. Click `Load unpacked`
4. Select the entire `dist` folder

# Important Initial Steps

1. `git init` to start a new git repo for tracking your changes, do an initial base commit with all the default files
2. Update `package.json`, important fields include `author`, `version`, `name` and `description`
3. Update `manifest.json`, important fields include `version`, `name` and `description`
4. Update `webpack.commmon.js`, the title in the `getHtmlPlugins` function should be your extension name

# Production Build

1. `yarn build` to generate a minimized production build in the `dist` folder

## Important Default Boilerplate Notes

- Wasn't able to share functions between `background.ts` & other files (Only happes with `background.ts`) so either have functions in the file itself or create a separate file that only `background.ts` uses.
- Update the manifest file as per usual for chrome related permissions
- [Offical Chrome Extension](https://developer.chrome.com/docs/extensions/reference/) docs
