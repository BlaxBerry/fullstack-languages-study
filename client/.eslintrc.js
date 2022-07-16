module.exports = {
  parser: "@typescript-eslint/parser",
  extends: [
    "react-app",
    "plugin:@typescript-eslint/recommended",
    "plugin:storybook/recommended",
    // "plugin:react-hooks/recommended",
    // "plugin:storybook/recommended",
    // "plugin:react/recommended",
    // "plugin:prettier/recommended",
    // "prettier/@typescript-eslint",
    // "prettier",
  ],
  env: {
    browser: true,
    node: true,
    es6: true,
  },
  rules: {
    "@typescript-eslint/no-empty-interface": 0,
    // allow @ts-ignore for testing purposes
    "@typescript-eslint/ban-ts-comment": "off",
  },
  plugins: ["@typescript-eslint"],
}
