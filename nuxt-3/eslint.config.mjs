// @ts-check

import { createConfigForNuxt } from '@nuxt/eslint-config';
import pluginPrettierRecommended from 'eslint-plugin-prettier/recommended';

export default createConfigForNuxt().prepend(pluginPrettierRecommended, {
  rules: {
    'prettier/prettier': [
      'error',
      {
        singleQuote: true,
        semi: true,
        trailingComma: 'all',
        arrowParens: 'always',
        tabWidth: 2,
        printWidth: 80,
      },
    ],
  },
});
