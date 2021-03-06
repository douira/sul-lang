module.exports = {
  root: true,
  env: {
    browser: true,
    node: true
  },
  parserOptions: {
    parser: "babel-eslint"
  },
  ignorePatterns: ["!.prettierrc", "!.eslintrc.js"],
  plugins: ["sonarjs"],
  extends: [
    "plugin:sonarjs/recommended",
    "plugin:import/recommended",
    //"plugin:jest/recommended",
    "plugin:promise/recommended",
    //"plugin:vue/recommended",
    "eslint:recommended",
    //"prettier/vue",
    "plugin:prettier/recommended"
  ],
  rules: {
    "no-console": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-debugger": process.env.NODE_ENV === "production" ? "error" : "off",
    "no-constant-condition": ["error", { checkLoops: false }],
    "import/no-unresolved": "off",
    "promise/catch-or-return": "off",
    "promise/always-return": "off",
    "no-var": "error",
    "sonarjs/cognitive-complexity": ["warn", 15],
    radix: "error",
    "max-len": [
      "error",
      //code: Infinity since prettier already takes care of this
      { code: Infinity, comments: 100, ignorePattern: "TODO|DEBUG|INFO" }
    ],
    "no-use-before-define": "error"
  }
}
