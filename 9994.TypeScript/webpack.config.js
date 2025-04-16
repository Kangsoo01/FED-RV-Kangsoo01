const path = require("path");
const HtmlWebpackPlugin = require("html-webpack-plugin");

// 웹팩 설정을 exporting 함.
module.exports = {
  // 웹팩의 시작점(Entry point) 설정. (src/index.ts)
  entry: "./src/index.ts",

  // 웹팩이 파일을 처리하는 방법 정의.
  module: {
    rules: [
      {
        // .ts 파일을 ts-loader를 사용하여 처리.
        test: /\.ts$/,
        use: "ts-loader",
        exclude: /node_modules/,
      },
    ],
  },

  // 웹팩이 모듈을 찾는 방법 정의.
  resolve: {
    // 웹팩이 모듈을 찾을 때, .ts, .js 확장자를 사용.
    extensions: [".ts", ".js"],
  },

  // 웹팩이 출력하는 방법 정의.
  output: {
    // 출력할 파일 이름.
    filename: "bundle.js",
    // 출력할 파일 경로.
    path: path.resolve(__dirname, "dist"),
    // 웹팩이 출력할 때, 이전 번들 결과를 삭제.
    clean: true,
  },

  // 웹팩 플러그인 설정.
  plugins: [
    // HTML 파일을 생성하는 플러그인.
    new HtmlWebpackPlugin({
      // HTML 템플릿 파일 경로.
      template: "./public/index.html",
    }),
  ],

  // 웹팩의 모드 설정. (development, production, none)
  mode: "development",

  // 웹팩이 소스맵을 생성하는 방법 정의.
  devtool: "source-map",
};