const path = require("path")
const { override } = require("customize-cra")

const addWebpackModuleRule = (rule) => (config) => {
  for (let _rule of config.module.rules) {
    if (_rule.oneOf) {
      for (let testItem of _rule.oneOf) {
        if (testItem.test.toString() === rule.test.toString()) {
          delete rule.test
          testItem.use.push(rule)
          return config
        }
      }
      _rule.oneOf.unshift(rule)
      return config
    }
  }
  return config
}

module.exports = {
  webpack: override(
    addWebpackModuleRule({
      test: /\.(scss|sass)$/,
      loader: "sass-resources-loader",
      options: {
        resources: "./src/global.scss",
      },
    }),
    (config, env) => {
      config.resolve.modules.push(path.resolve(__dirname, "src"))
      return config
    }
  ),
}
