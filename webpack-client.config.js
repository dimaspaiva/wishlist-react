const path = require("path");

module.exports = {
  entry: "./src/client/app.tsx",
  mode: "development",
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [/node_modules/],
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  output: {
    filename: "client.js",
    path: path.resolve(__dirname, "build", "public", "js"),
  },
};
