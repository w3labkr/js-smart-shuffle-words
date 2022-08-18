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

## Material UI

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

## react-i18next

react-i18next is a powerful internationalization framework for React / React Native which is based on i18next.

```shell
yarn add react-i18next i18next
```

## Lodash

A modern JavaScript utility library delivering modularity, performance, & extras.

```shell
yarn add lodash
```

## webfontloader

Web Font Loader gives you added control when using linked fonts via @font-face.

```shell
yarn add webfontloader
```

## copy-to-clipboard

Copy stuff into clipboard from your browser using JS

```shell
yarn add copy-to-clipboard
```
