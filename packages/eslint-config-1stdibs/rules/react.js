module.exports = {
    "plugins": [
        "react"
    ],
    "parserOptions": {
        "ecmaFeatures": {
            "jsx": true
        }
    },
    "rules": {
        "react/display-name": [
            1,
            {
                "ignoreTranspilerName": false
            }
        ],
        "react/jsx-boolean-value": 1,
        "react/jsx-no-duplicate-props": 2,
        "react/jsx-no-undef": 2,
        "react/jsx-quotes": 0,
        "react/jsx-sort-prop-types": 0,
        "react/jsx-sort-props": 0,
        "react/jsx-uses-react": 2,
        "react/jsx-uses-vars": 2,
        "react/no-danger": 0,
        "react/no-did-mount-set-state": [
            2
        ],
        "react/no-did-update-set-state": 2,
        "react/no-multi-comp": [
            2,
            {
                "ignoreStateless": true
            }
        ],
        "react/no-unknown-property": 2,
        "react/prop-types": 1,
        "react/react-in-jsx-scope": 2,
        "react/self-closing-comp": 2,
        "react/sort-comp": 1,
        "react/jsx-wrap-multilines": 2,
        "react/jsx-closing-bracket-location": 1,
        "react/jsx-indent-props": 1,
        "react/prefer-es6-class": [1, "always"],
        "react/prefer-stateless-function": 1
    }
};