const path = require("path");

module.exports = {
  entry: "./src/index.tsx", // Entry point of your application
  output: {
    path: path.resolve(__dirname, "dist"), // Output directory
    filename: "[name].js", // Output filename
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx|ts|tsx)$/, // Use babel-loader for js and jsx files
        exclude: /node_modules/,
        use: {
          loader: "babel-loader",
          options: {
            presets: ["@babel/preset-env", "@babel/preset-react"], // Presets for babel
          },
        },
      },
    ],
  },
  resolve: {
    extensions: [".js", ".jsx", "ts", "tsx"], // Resolve .js and .jsx extensions
  },
};
