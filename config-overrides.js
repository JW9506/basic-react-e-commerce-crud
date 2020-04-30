const path = require("path")
const flow = require("lodash.flow")
const { override, addWebpackModuleRule } = require("customize-cra")

module.exports = {
  webpack: flow(
    override(
      addWebpackModuleRule({
        test: /\.(scss|sass)$/,
        loader: "sass-resources-loader",
        options: {
          resources: "./src/global.scss",
        },
      })
    ),
    (config, env) => {
      config.resolve.modules.push(path.resolve(__dirname, "src"))
      return config
    }
  ),
}
