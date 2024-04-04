const { defaults } = require("jest-config");

/** @type {import('jest').Config} */
const config = {
  testMatch: ["**/__tests__/**/*.[jt]s?(x)", "**/?(*.)+(spec|test).[tj]s?(x)"],
  moduleFileExtensions: [
    "js",
    "jsx",
    "ts",
    "tsx",
    "json",
    "node",
    "mts",
    "cts",
  ],
};

module.exports = config;
