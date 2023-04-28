module.exports = {
    "env": {
        "browser": true,
        "es2021": true,
        jest: true,
    },
    "extends": [
        "airbnb",
        'airbnb/hooks',
        "eslint:recommended",
        "plugin:react/recommended"
    ],
    "overrides": [
    ],
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module",
        ecmaFeatures: {
            jsx: true,
        },
        ecmaVersion: 12,
        sourceType: 'module',
    },
    "plugins": [
        "react",
        "import"
    ],
    "rules": {
    }
}
