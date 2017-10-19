module.exports = {
    "env": {
        "browser": true,
        "commonjs": true,
        "es6": true
    },
    "extends": "eslint:recommended",
    "parserOptions": {
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
        "no-console":0,
        "no-undef":0,
        "no-unused-vars":0,
        "indent": [
            0
        ],
        "linebreak-style": [
            "error",
            "windows"
        ],
        "quotes": [
            0,
            "single"
        ],
        "semi": [
            0,
            "always"
        ]
    }
};