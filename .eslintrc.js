module.exports = {
  env: {
    browser: true,
    node: true,
    es6: true,
    jest: true,
  },
  parser: '@babel/eslint-parser',
  parserOptions: {
    ecmaVersion: 6,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
    requireConfigFile: false,
    babelOptions: {
      babelrc: false,
      configFile: false,
      presets: [
        [
          '@babel/preset-react',
          {
            runtime: 'automatic',
          },
        ],
      ],
    },
  },
  plugins: ['react', 'react-hooks'],
  extends: [
    'eslint:recommended',
    'plugin:import/recommended',
    'plugin:react/recommended',
    'plugin:react-hooks/recommended',
    'plugin:prettier/recommended',
  ],
  ignorePatterns: ['**/*.min.js'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx'],
        moduleDirectory: ['node_modules', './src'],
      },
      alias: {
        map: [
          ['@', './src'],
          ['@assets', './src/assets'],
          ['@css', './src/assets/css'],
          ['@images', './src/assets/images'],
          ['@components', './src/components'],
          ['@contexts', './src/contexts'],
          ['@hooks', './src/hooks'],
          ['@locales', './src/locales'],
          ['@modules', './src/modules'],
          ['@pages', './src/pages'],
          ['@resources', './src/resources'],
          ['@store', './src/store'],
          ['@atoms', './src/store/atoms'],
          ['@selectors', './src/store/selectors'],
          ['@templates', './src/templates'],
        ],
        extensions: ['.js', '.jsx', '.json'],
      },
    },
  },
  rules: {
    'prettier/prettier': 'error',
    'import/namespace': [2, { allowComputed: true }],
    'react/prop-types': 'off',
    'react/jsx-uses-react': 'off',
    'react/react-in-jsx-scope': 'off',
    'react-hooks/rules-of-hooks': 'error',
    'react-hooks/exhaustive-deps': [
      'warn',
      {
        additionalHooks: '(useRecoilCallback|useRecoilTransaction_UNSTABLE)',
      },
    ],
  },
};
