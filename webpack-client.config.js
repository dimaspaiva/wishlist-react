const path = require("path");

module.exports = {
  entry: "./src/client/index.tsx",
  mode: "development",
  target: "node",
  module: {
    rules: [
      {
        test: /\.tsx?$/,
        use: "ts-loader",
        exclude: [/node_modules/],
      },
      {
        test: /\.(?:ico|gif|png|jpg|jpeg|svg)$/i,
        type: "asset/resource",
      },
    ],
  },
  resolve: {
    extensions: [".ts", ".tsx", ".js", ".jsx"],
  },
  watch: true,
  output: {
    filename: "client.js",
    path: path.resolve(__dirname, "build", "public", "js"),
  },
};
