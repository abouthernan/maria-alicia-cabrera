module.exports = {
  env: {
    es2021: true,
    node: true,
  },
  extends: ["plugin:react/recommended", "standard-with-typescript"],
  overrides: [],
  parserOptions: {
    ecmaVersion: "latest",
    project: "./tsconfig.json",
  },
  plugins: ["react"],
  rules: {
    "react/prop-types": "off",
    "react/react-in-jsx-scope": "off",
    "@typescript-eslint/key-spacing": "off",
    "@typescript-eslint/strict-boolean-expressions": "off",
    quotes: ["error", "double"],
    semi: ["error", "always"],
    trailingComma: "all",
  },
};
