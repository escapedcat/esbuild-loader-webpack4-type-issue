const webpack = require("webpack");
const { ESBuildPlugin } = require("esbuild-loader");

const baseConfig = (webpackEnv) => {
  const isEnvDevelopment = webpackEnv === "development";
  const isEnvProduction = webpackEnv === "production";

  const isUsingEsbuild = isEnvDevelopment === true;

  return {
    mode: isEnvProduction ? "production" : isEnvDevelopment && "development",
    devtool: isEnvProduction ? "source-map" : "cheap-module-source-map",
    bail: isEnvProduction,
    entry: {
      app: ["./src/main.js"],
    },
    output: {
      path: "dist",
      publicPath: "/", // path where to find the bundled assets and chunks
    },
    module: {
      rules: [
        {
          test: /\.(j|t)s$/,
          exclude: /node_modules\/(?!@scip\/backoffice).*/,
          loader: "esbuild-loader",
          options: {
            loader: "ts",
            target: "es2018",
          },
        },
      ],
    },
    plugins: [ESBuildPlugin()],
  };
};

module.exports = baseConfig;
