/**
 * This is intended to be a basic starting point for linting in your app.
 * It relies on recommended configs out of the box for simplicity, but you can
 * and should modify this configuration to best suit your team's needs.
 */

/** @type {import('eslint').Linter.Config} */
module.exports = {
    root          : true,
    parserOptions : {
        ecmaVersion  : 'latest',
        sourceType   : 'module',
        ecmaFeatures : {
            jsx : true
        }
    },
    env : {
        browser  : true,
        commonjs : true,
        es6      : true
    },
    ignorePatterns : ['!**/.server', '!**/.client'],

    // Base config
    extends : ['eslint:recommended'],
    rules   : {
        'accessor-pairs'        : 'off',
        'array-bracket-spacing' : ['warn', 'never'],
        'array-callback-return' : 'off',
        'brace-style'           : [
            'warn',
            'stroustrup',
            {
                allowSingleLine : false
            }
        ],
        'comma-dangle'              : ['error', 'never'],
        'computed-property-spacing' : ['warn', 'never'],
        'dot-notation'              : 'off',
        eqeqeq                      : 'off',
        indent                      : [
            'error',
            4,
            {
                SwitchCase   : 1,
                ignoredNodes : ['TemplateLiteral']
            }
        ],
        'key-spacing' : [
            'warn',
            {
                multiLine : {
                    afterColon  : true,
                    align       : 'colon',
                    beforeColon : true
                },
                singleLine : {
                    afterColon  : true,
                    beforeColon : true
                }
            }
        ],
        'linebreak-style'   : ['error', 'unix'],
        'multiline-ternary' : 'off',
        'new-cap'           : [
            'warn',
            {
                capIsNew   : false,
                newIsCap   : false,
                properties : false
            }
        ],
        'no-duplicate-imports'         : 'error',
        'no-extra-boolean-cast'        : 'off',
        'no-inner-declarations'        : 'off',
        'no-mixed-operators'           : 'off',
        'no-multi-spaces'              : 'off',
        'no-new-func'                  : 'off',
        'no-new-wrappers'              : 'off',
        'no-prototype-builtins'        : 'off',
        'no-restricted-globals'        : ['error', 'event', 'describe'],
        'no-return-assign'             : 'off',
        'no-trailing-spaces'           : 'warn',
        'no-unmodified-loop-condition' : 'off',
        'no-unused-expressions'        : 'off',
        'no-use-before-define'         : 'off',
        'node/no-callback-literal'     : 'off',
        'object-curly-spacing'         : ['warn', 'always'],
        'one-var'                      : 'off',
        'padded-blocks'                : 'off',
        'prefer-const'                 : 'warn',
        'prefer-promise-reject-errors' : 'off',
        'prefer-regex-literals'        : 'off',
        quotes                         : [
            'warn',
            'single',
            {
                allowTemplateLiterals : true,
                avoidEscape           : true
            }
        ],
        semi                           : ['error', 'always'],
        'space-before-function-paren'  : ['warn', 'never'],
        'spaced-comment'               : 'off',
        'standard/no-callback-literal' : 'off',
        'template-curly-spacing'       : 'off',
        yoda                           : [
            'error',
            'never',
            {
                onlyEquality : true
            }
        ],
        'n/no-callback-literal' : 'off'
    },

    overrides : [
    // React
        {
            files   : ['**/*.{js,jsx,ts,tsx}'],
            plugins : ['react', 'jsx-a11y'],
            extends : [
                'plugin:react/recommended',
                'plugin:react/jsx-runtime',
                'plugin:react-hooks/recommended',
                'plugin:jsx-a11y/recommended'
            ],
            settings : {
                react : {
                    version : 'detect'
                },
                formComponents : ['Form'],
                linkComponents : [
                    { name : 'Link', linkAttribute : 'to' },
                    { name : 'NavLink', linkAttribute : 'to' }
                ],
                'import/resolver' : {
                    typescript : {}
                }
            }
        },

        // Typescript
        {
            files    : ['**/*.{ts,tsx}'],
            plugins  : ['@typescript-eslint', 'import'],
            parser   : '@typescript-eslint/parser',
            settings : {
                'import/internal-regex' : '^~/',
                'import/resolver'       : {
                    node : {
                        extensions : ['.ts', '.tsx']
                    },
                    typescript : {
                        alwaysTryTypes : true
                    }
                }
            },
            extends : [
                'plugin:@typescript-eslint/recommended',
                'plugin:import/recommended',
                'plugin:import/typescript'
            ]
        },

        // Node
        {
            files : ['.eslintrc.cjs'],
            env   : {
                node : true
            }
        }
    ]
};
