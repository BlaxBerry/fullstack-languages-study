module.exports = {
  extends: ["stylelint-config-sass-guidelines", "stylelint-config-prettier"],
  plugins: ["stylelint-prettier"],
  rules: {
    "prettier/prettier": true,
    "max-nesting-depth": [5],
    "selector-max-compound-selectors": [5],
    "selector-no-qualifying-type": [, { ignore: ["attribute"] }],
    "rule-empty-line-before": [
      "always",
      {
        ignore: ["after-comment"],
      },
    ],
  },
}
