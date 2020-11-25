module.exports = {
  root: true,

  env: {
    node: true
  },

  rules: {
    'no-console': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow debugger in development
    'no-debugger': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // allow alert in development
    'no-alert': process.env.NODE_ENV === 'production' ? 'error' : 'off',
    // max nest callback 3
    'max-nested-callbacks': ['error', 3],
    // allow modify param property
    'no-param-reassign': ['error', { props: false }],
    //eslint-plugin-prettier插件配置,报告prettier中不符合的格式
    'prettier/prettier': [
      'warning',
      {
        usePrettierrc: true
      }
    ],
    'vue/component-name-in-template-casing': [
      'warning',
      'PascalCase' | 'kebab-case',
      {
        ignores: []
      }
    ],
    'vue/html-quotes': 'error',
    'vue/no-confusing-v-for-v-if': 'error',
    'vue/order-in-components': 'warning',
    'vue/this-in-template': 'warning',
    'vue/html-self-closing': 'warning',
    //disallow line breaks before the closing bracket.
    'vue/html-closing-bracket-newline': [
      'error',
      {
        singleline: 'never',
        multiline: 'always'
      }
    ],
    //属性排序
    'vue/attributes-order': [
      'error',
      {
        order: [
          'DEFINITION',
          'LIST_RENDERING',
          'CONDITIONALS',
          'RENDER_MODIFIERS',
          'GLOBAL',
          'UNIQUE',
          'TWO_WAY_BINDING',
          'OTHER_DIRECTIVES',
          'OTHER_ATTR',
          'EVENTS',
          'CONTENT'
        ]
      }
    ],
    //属性换行
    'vue/max-attributes-per-line': [
      'error',
      {
        singleline: 2,
        multiline: {
          max: 1,
          allowFirstLine: false //不允许首行属性
        }
      }
    ],
    'vue/html-indent': [
      'error',
      4, // vue html 4个缩进
      {
        attribute: 1,
        baseIndent: 1,
        closeBracket: 0,
        alignAttributesVertically: true,
        ignores: []
      }
    ],
    'vue/script-indent': [
      'error',
      2,
      {
        baseIndent: 0,
        switchCase: 1,
        ignores: []
      }
    ]
  },

  parserOptions: {
    parser: '@typescript-eslint/parser'
  },

  extends: ['plugin:vue/strongly-recommended', '@vue/prettier', '@vue/typescript']
}
