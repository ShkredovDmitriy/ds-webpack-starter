module.exports = {
    'env': {
        'browser': true,
        'commonjs': true,
        'es6': true,
        'node': true,
    },
    'extends': ['airbnb', 'plugin:jest/recommended'],
    'parserOptions': {
        'sourceType': 'module',
    },
    'rules': {

        'linebreak-style': 'off', // Неправильно работает в Windows.

        'arrow-parens': 'off', // Несовместимо с prettier
        'object-curly-newline': 'off', // Несовместимо с prettier
        'no-mixed-operators': 'off', // Несовместимо с prettier
        'arrow-body-style': 'off', // Это - не наш стиль?
        'function-paren-newline': 'off', // Несовместимо с prettier
        'no-plusplus': 'off',
        'space-before-function-paren': 0, // Несовместимо с prettier

        'max-len': ['error', 100, 2, { ignoreUrls: true, }], // airbnb позволяет некоторые пограничные случаи
        'no-console': 'error', // airbnb использует предупреждение
        'no-alert': 'error', // airbnb использует предупреждение

        'no-param-reassign': 'off', // Это - не наш стиль?
        "radix": "off", // parseInt, parseFloat и radix выключены. Мне это не нравится.

        'comma-dangle': [
            'error',
            'always-multiline',
        ],
        'indent': [
            'error',
        2,
        ],
        'quotes': [
            'error',
            'single',
            ],
        'semi': [
            'error',
            'always',
            ],
        'no-unused-vars': [
            'warn',
            ],
        'no-console': 0,
        },
        'globals': {
            '$': true,
            'jQuery': true,
        },
};