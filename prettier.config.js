module.exports = {
  overrides: [
    {
      files: "*.js",
      options: {
        parser: "babel",
      },
    },
    {
      files: "*.json",
      options: {
        parser: "json",
      },
    },
    {
      files: "*.ts",
      options: {
        parser: "typescript",
      },
    },
  ],
  printWidth: 100,
  tabWidth: 2,
  trailingComma: "all",
};
