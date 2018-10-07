module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": ["eslint:recommended", "plugin:react/recommended"],
    "parser": "babel-eslint",
    "parserOptions": {
        "ecmaVersion": 8,
        "ecmaFeatures": {
            "experimentalObjectRestSpread": true,
            "jsx": true
        },
        "sourceType": "module"
    },
    "plugins": [
        "react"
    ],
    "rules": {
        "indent": [
            "error",
            4,
            {SwitchCase: 1}
        ],
        "linebreak-style": [
            0,
            "unix"
        ],
        "quotes": [
            "error",
            "single"
        ],
        "semi": [
            "error",
            "always"
        ],
        "no-console": 0,
        "switch": 0,
        "no-case-declarations": 0
    }
};