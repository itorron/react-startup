module.exports = {
  env: {
    browser: true,
    es2022: true,
    node: true,
    jest: true,
  },
  extends: ['plugin:react/recommended', 'standard'],
  overrides: [],
  parserOptions: {
    ecmaVersion: 12,
    sourceType: 'module',
    ecmaFeatures: {
      jsx: true,
    },
  },
  plugins: ['react'],
  settings: {
    'import/resolver': {
      node: {
        extensions: ['.js', '.jsx', '.ts', '.tsx'],
      },
    },
  },
  rules: {
    semi: 0,
    'comma-dangle': 0,
    'space-before-function-paren': 0,
    'no-unused-vars': 1,
    'sort-imports': [
      'error',
      {
        ignoreCase: false,
        ignoreDeclarationSort: true,
        ignoreMemberSort: false,
        memberSyntaxSortOrder: ['none', 'all', 'single', 'multiple'],
      },
    ],
    'react-hooks/exhaustive-deps': 'off',
    'import/no-duplicates': 2,
    'import/no-unresolved': [2, { commonjs: true, amd: true }],
    'import/no-extraneous-dependencies': 2,
    'import/extensions': ['error', 'never', { svg: 'always', json: 'always' }],
    'import/order': [
      'error',
      {
        groups: ['builtin', 'external', 'internal', 'parent'],
        pathGroups: [
          {
            pattern: 'react',
            group: 'external',
            position: 'before',
          },
        ],
        pathGroupsExcludedImportTypes: ['builtin'],
        'newlines-between': 'always',
        alphabetize: {
          order: 'asc',
          caseInsensitive: true,
        },
      },
    ],
  },
};
