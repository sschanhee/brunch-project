module.exports = {
  root: true,
  settings: {
    react: {
      version: 'detect',
    },
  },
  rules: {
    /* Our preferences */
    'max-len': ['off'], // Prettier does this

    curly: ['error', 'all'],
    'react-hooks/exhaustive-deps': ['error'],
    'import/extensions': 'off', // TypeScript가 기본적으로 검사합니다.
    'import/prefer-default-export': 'off',
    'arrow-parens': ['error', 'as-needed'],
    'arrow-body-style': 'off',
    'jsx-quotes': ['error', 'prefer-single'],
    'react/jsx-boolean-value': ['error', 'always'],

    /* -- START: 린터 속도 개선을 위해 끕니다. -- */
    'react/state-in-constructor': 'off',
    'react/no-direct-mutation-state': 'off',
    'react/display-name': 'off',
    'react/destructuring-assignment': 'off',
    'react/no-access-state-in-setstate': 'off',
    'react/no-string-refs': 'off',
    'react/no-deprecated': 'off',
    'react/no-typos': 'off',
    'react/require-render-return': 'off',
    'react/prefer-stateless-function': 'off',
    'react/prefer-es6-class': 'off',
    'react/static-property-placement': 'off',
    /* -- END: 린터 속도 개선을 위해 끕니다. -- */

    'default-case': 'off',

    /* We only add rules here that are not included in @typescript-eslint/recommended. */
    /* https://github.com/typescript-eslint/typescript-eslint/tree/master/packages/eslint-plugin#supported-rules */
    'space-infix-ops': 'off',
    quotes: 'off',
    'object-curly-spacing': 'off',
    'space-before-function-paren': 'off',
    'comma-spacing': 'off',
    'keyword-spacing': 'off',
    'func-call-spacing': 'off',
    semi: 'off',
    'no-shadow': 'off',
    indent: 'off',
    /* These rules should be upgraded to error level gradually */

    /* Useful but difficult to fix */
    'implicit-arrow-linebreak': 'off',
    'no-param-reassign': 'off',

    /* Turned off due to rule collision */
    'array-callback-return': 'off', // this rule confuses fp-ts map with Array.prototype.map
    'consistent-return': 'off', // should rely on TypeScript type signature
    'import/no-unresolved': 'off', // should rely on TypeScript
    'no-undef': 'off', // should rely on TypeScript
    'react/prop-types': 'off', // should rely on TypeScript
    'react/jsx-filename-extension': 'off', // should rely on TypeScript
    // https://github.com/eslint/eslint/issues/11464#issuecomment-468889553
    'no-useless-constructor': 'off', // should rely on @typescript-eslint/no-useless-constructor
    'react/require-default-props': 'off', // should rely on TypeScript
    'no-use-before-define': 'off', // should rely on TypeScript
  },
  extends: ['next/babel', 'next/core-web-vitals', 'prettier'],
}
