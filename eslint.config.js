import globals from 'globals';
import pluginJs from '@eslint/js';
import tseslint from 'typescript-eslint';
import pluginReact from 'eslint-plugin-react';

export default [
  { files: ['**/*.{js,mjs,cjs,ts,jsx,tsx}'] },
  { languageOptions: { globals: globals.browser } },
  pluginJs.configs.recommended,
  ...tseslint.configs.recommended,
  pluginReact.configs.flat.recommended,
  {
    rules: {
      'linebreak-style': ['error', 'unix'],
      quotes: ['warn', 'single', { avoidEscape: true }],
      semi: ['error', 'always'],
      // Enable
      'no-extra-semi': 'warn',
      '@typescript-eslint/no-unused-vars': ['warn'],

      // Disable
      'no-unused-vars': 'off',
      'react/react-in-jsx-scope': 'off',
      '@typescript-eslint/no-empty-function': 'off',
      '@typescript-eslint/no-explicit-any': 'off',
      'react/jsx-key': 'off',
      'react-hooks/exhaustive-deps': 0,
    },
  },
];
