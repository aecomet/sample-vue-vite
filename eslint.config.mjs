import jslint from '@eslint/js';
import tsParser from '@typescript-eslint/parser';
import pluginPrettier from 'eslint-plugin-prettier/recommended';
import pluginVue from 'eslint-plugin-vue';
import globals from 'globals';
import tslint from 'typescript-eslint';
import parserVue from 'vue-eslint-parser';

export default tslint.config(
  jslint.configs.recommended,
  ...tslint.configs.recommended,
  ...pluginVue.configs['flat/recommended'],
  pluginPrettier,

  /* Custom config */
  {
    languageOptions: {
      globals: {
        ...globals.browser,
        ...globals.node,
      },
      parser: parserVue,
      parserOptions: {
        parser: tsParser,
        sourceType: 'module',
      },
    },
    rules: {
      '@typescript-eslint/no-explicit-any': 'off',
      'vue/singleline-html-element-content-newline': 0,
      'vue/component-name-in-template-casing': ['error', 'kebab-case'],
    },
  }
);
