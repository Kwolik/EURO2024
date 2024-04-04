module.exports = {
  root: true,
  extends: ["eslint:recommended",  "plugin:@typescript-eslint/recommended"],
  rules: {
    // Ensures props and state inside functions are always up-to-date
    "react-hooks/exhaustive-deps": "warn",
  },
  plugins: ["react"],
};

module.exports = {
  extends: "airbnb",
  plugins: ["react"],
};
