import MiniCssExtractPlugin from "mini-css-extract-plugin";
import webpack from "webpack";
import { createBabelConfig } from "../../babel.config";
import { IBuildOptions } from "./types/config";

export const buildLoaders = (options: IBuildOptions): webpack.ModuleOptions => {
  const { isDev } = options;

  const cssLoader = {
    loader: "css-loader",
    options: {
      modules: {
        auto: (resPath: string) => Boolean(resPath.includes(".module.")),
        localIdentName: isDev
          ? "[path][name]__[local]--[hash:base64:5]"
          : "[hash:base64:8]",
      },
    },
  };

  const tsLoaderRule: webpack.RuleSetRule = {
    test: /\.(ts|tsx)$/,
    exclude: /node_modules/,
    use: {
      loader: "babel-loader",
      options: createBabelConfig(isDev),
    },
  };

  const scssLoaderRule: webpack.RuleSetRule = {
    test: /\.s[ac]ss$/i,
    use: [
      isDev ? "style-loader" : MiniCssExtractPlugin.loader,
      cssLoader,
      "sass-loader",
    ],
  };

  const imageLoaderRule: webpack.RuleSetRule = {
    test: /\.(png|jpg|jpeg|gif)$/i,
    type: "asset/resource",
  };

  const fontLoaderRule: webpack.RuleSetRule = {
    test: /\.(woff|woff2|eot|ttf|otf)$/i,
    type: "asset/resource",
    generator: { filename: "assets/fonts/[name].[hash][ext][query]" },
  };

  const svgLoaderRule: webpack.RuleSetRule = {
    test: /\.svg$/,
    type: "asset/resource",
  };

  return {
    rules: [
      tsLoaderRule,
      scssLoaderRule,
      imageLoaderRule,
      fontLoaderRule,
      svgLoaderRule,
    ],
  };
};
