const CopyPlugin = require("copy-webpack-plugin");
const path = require("path");

module.exports = {
  entry: "./src/server/index.ts",
  mode: "development",
  target: "node",
  module: {
    rules: [
      {
        test: /\.ts?$/,
        use: "ts-loader",
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".js"],
  },
  output: {
    filename: "index.js",
    path: path.resolve(__dirname, "build"),
  },
  plugins: [
    new CopyPlugin({
      patterns: [
        { from: "src/server/public", to: "public" },
        { from: "src/server/pages", to: "pages" },
        { from: "src/server/components", to: "components" },
      ],
    }),
  ],
};
