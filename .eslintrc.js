module.exports = {
  root: true,
  extends: ["airbnb"],
  rules: {
    // Ensures props and state inside functions are always up-to-date
    "react-hooks/exhaustive-deps": "warn",
  },
  plugins: ["react"],
};

