const path = require('path')
const webpack = require("webpack");
const HtmlWebpackPlugin = require("html-webpack-plugin");
const { CleanWebpackPlugin } = require("clean-webpack-plugin");

module.exports = {
  mode: "development", // 개발모드인지 프로덕션모드인지 설정해줍니다. env도 가능
  entry: "./src/index.js", // 웹팩 번들링을 할 파일
  output: {
    // 번들링이 완료되면 저장될 경로와 번들링 파일 이름
    path: __dirname + "/dist",
    filename: "bundle.[hash].js",
    publicPath: "/",
  },
  resolve: {
    // 번들링의 대상이 될 파일 확장자
    // path.resove 형태로 사용할 수도 있다.
    // 그러면 node의 기본 모듈 'path'를 불러와야 한다.
    extensions: [".js", ".jsx"],
  },
  module: {
    rules: [
      {
        test: /\.(js|jsx)$/, // js와 jsx의 확장자를 가진 것은 바벨 로더를 거침
        include: path.resolve(__dirname, "src"),
        exclude: "/node_modules/",
        // 노드 모듈은 제외
        loader: "babel-loader",
      },
      {
        test: /\.css$/,
        use: [
          { loader: "style-loader" },
          { loader: "css-loader" },
          //tailwindcss 사용 하려면 필수
          { loader: "postcss-loader" },
        ], // 순서가 중요합니다.
      },
    ],
  },
  plugins: [
    new CleanWebpackPlugin(), // 이전에 번들링 됐던 파일을 삭제
    new HtmlWebpackPlugin({
      // index.html에 번들링된 파일을 link 와 script 태그에 추가
      template: "public/index.html",
    }),
    new webpack.DefinePlugin({
      mode: process.env.mode,
      port: process.env.port,
    }),
  ],
  devServer: {
    host: "localhost",    
    // port: process.env.port,
    port: 3002,
    open: true,
    historyApiFallback: true,
    hot: true,
    compress: true,
  },
};
