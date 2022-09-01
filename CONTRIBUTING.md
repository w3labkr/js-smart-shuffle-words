# Contributing Guide

## Getting Started

To create a new app.

```shell
npx create-react-app .
```

Recoil is an experimental state management framework for React.

```shell
yarn add recoil recoil-persist
```

Create React App Configuration Override.

```shell
yarn add @craco/craco
```

Update the existing calls to react-scripts in the scripts section of your package.json file to use the craco CLI:

```json
{
    "scripts": {
        "start": "craco start",
        "build": "craco build",
        "test": "craco test"
    }
}
```

Upgrade all the packages in your package.json to the latest version.

```shell
yarn add --dev global npm-check-updates
npm-check-updates -u
yarn add --dev yarn-upgrade-all
```

Runs the app in the development mode.

```shell
yarn start
```

Builds the app for production to the `build` folder.

```shell
yarn build
```

## Environment

`.env`

```txt
REACT_APP_NAME=$npm_package_name
REACT_APP_VERSION=$npm_package_version
REACT_APP_GA_TRACKING_ID=UA-000000-01
```

## Dependencies

### react-i18next

react-i18next is a powerful internationalization framework for React / React Native which is based on i18next.

```shell
yarn add react-i18next i18next
```

### react-router-dom

Declarative routing for React

```shell
yarn add react-router-dom
```

`src/index.js`

```javascript
root.render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
);
```

### react-helmet-async

Thread-safe Helmet for React 16+ and friends.

```shell
yarn add react-helmet-async
```

### Material UI

Install Material UI.

```shell
yarn add @mui/material @emotion/react @emotion/styled
```

Material UI was designed with the Roboto font in mind.

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/css?family=Roboto:300,400,500,700&display=swap"
/>
```

To use the font Icon component, you must first add the Material Icons font.

```html
<link
  rel="stylesheet"
  href="https://fonts.googleapis.com/icon?family=Material+Icons"
/>
```

In order to use prebuilt SVG Material icons, you must first install the @mui/icons-material package.

```shell
yarn add @mui/icons-material
```

### Lodash

A modern JavaScript utility library delivering modularity, performance, & extras.

```shell
yarn add lodash
```

### webfontloader

Web Font Loader gives you added control when using linked fonts via @font-face.

```shell
yarn add webfontloader
```

### copy-to-clipboard

Copy stuff into clipboard from your browser using JS

```shell
yarn add copy-to-clipboard
```

### react-ga

React Google Analytics Module

```shell
yarn add react-ga
```

`src/App.js`

```javascript
import ReactGA from 'react-ga';
ReactGA.initialize('UA-000000-01');
ReactGA.pageview(window.location.pathname + window.location.search);
```

## devDependencies

### prettier

```shell
yarn add --dev prettier eslint-config-prettier eslint-plugin-prettier
```

`package.json`

```json
{
    "scripts": {
        "format": "prettier --check ./src",
        "format:fix": "prettier --write ./src"
    },
}
```

```shell
yarn format
yarn format:fix
```

### eslint

```shell
yarn add --dev eslint eslint-plugin-react eslint-plugin-react-hooks
```

```shell
yarn add --dev @babel/core @babel/eslint-parser @babel/preset-react
```

`package.json`

```json
{
    "scripts": {
        "lint": "eslint ./src",
        "lint:fix": "eslint --fix ./src",
    },
}
```

`.eslintrc.json`

```json
{
    "parser": "@babel/eslint-parser",
    "parserOptions": {
        "requireConfigFile": false,
        "babelOptions": {
            "babelrc": false,
            "configFile": false,
            "presets": [
                [
                    "@babel/preset-react",
                    {
                        "runtime": "automatic"
                    }
                ]
            ]
        }
    },
}
```

```shell
yarn lint
yarn lint:fix
```

```shell
yarn add --dev eslint-plugin-import eslint-import-resolver-node eslint-import-resolver-alias
```

`.eslintrc.json`

```json
{
    "settings": {
        "import/resolver": {
            "node": {
                "extensions": [".js", ".jsx"],
                "moduleDirectory": ["node_modules", "./src"],
            },
            "alias": {
                "map": [
                    ["~", "./src"],
                ],
                "extensions": [".ts", ".js", ".jsx", ".json"],
            },
        },
    },
}
```

## Deployment

### conventional-changelog-cli

```shell
yarn add global conventional-changelog-cli
```

```json
{
    "scripts": {
        "version": "conventional-changelog -p conventionalcommits -i CHANGELOG.md -s && git add CHANGELOG.md",
        "version:init": "conventional-changelog -p conventionalcommits -i CHANGELOG.md -s -r 0 && git add CHANGELOG.md"
    }
}
```

```shell
npm version [patch|minor|major]
```

### gh-pages

General purpose task for publishing files to a gh-pages branch on GitHub.

```shell
yarn add gh-pages
yarn deploy
```

```json
{
    "homepage": "./", // "https://<username>.github.io/<repository>/"
    "scripts": {
        "predeploy": "npm run build",
        "deploy": "gh-pages -d build"
    }
}
```
