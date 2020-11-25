const HardSourceWebpackPlugin = require('hard-source-webpack-plugin')
const path = require('path')
function resolve(dir) {
  return path.join(__dirname, dir)
}

module.exports = {
  lintOnSave: true,
  productionSourceMap: false,

  devServer: {
    port: 8200,
    host: '0.0.0.0',
    https: false,
    open: false,
    proxy: {
      '/mockjs': {
        target: 'http://localhost:8200/',
        ws: true
      }
    }
  },

  css: {
    loaderOptions: {
      sass: {
        data: '@import "@/assets/scss/variable.scss";'
      }
    },
    extract: false
  },

  //从@vue/cli-service/lib/config/prod.js拷贝,进行自定义
  chainWebpack: webpackConfig => {
    if (process.env.NODE_ENV === 'production') {
      const Version = new Date().getTime()
      const isLegacyBundle = process.env.VUE_CLI_MODERN_MODE && !process.env.VUE_CLI_MODERN_BUILD
      const getAssetPath = require('./src/libs/vueUtils/getAssetPath')
      const filename = getAssetPath({}, `js/[name]${isLegacyBundle ? `-legacy` : ``}${'.[contenthash:8]'}-${Version}.js`)

      webpackConfig
        .mode('production')
        .devtool(false)
        .output.filename(filename)
        .chunkFilename(filename)

      //自动切换cdn.html模板
      webpackConfig
        .mode('production')
        .plugin('html')
        .tap(args => {
          args[0].template = resolve('/public/index.html')
          return args
        })
    }
    //eslint自动格式化
    webpackConfig.module
      .rule('eslint')
      .use('eslint-loader')
      .tap(options => {
        options.fix = true
        return options
      })

    webpackConfig.resolve.alias.set('tabs', resolve('src/views/supplierInfo/detailForm/tabs'))
  },

  configureWebpack: config => {
    if (process.env.NODE_ENV === 'production') {
      // config.plugins.push(new BundleAnalyzerPlugin())
      config.entry = {
        app: ['./src/main.ts']
      }
      //去除console
      config.optimization.minimizer[0].options.terserOptions.compress.drop_console = true
      config.optimization.minimizer[0].options.terserOptions.compress.drop_debugger = true
      config.optimization.minimizer[0].options.terserOptions.compress.pure_funcs = ['console.log']
    } else {
      config.plugins.push(
        new HardSourceWebpackPlugin({
          cacheDirectory: '../.cache/hard-source/[confighash]'
        })
      )
    }
  }
}
