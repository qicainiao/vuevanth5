const path = require('path')

const cdnDomian = './' // cdn域名，如果有cdn修改成对应的cdn
const name = '现金贷' // page title
const IS_PRODUCTION = process.env.NODE_ENV === 'production'
function resolve(dir) {
    return path.join(__dirname, dir)
}

module.exports = {
    publicPath: IS_PRODUCTION ? cdnDomian : './',
    outputDir: 'dist',
    assetsDir: 'static',
    lintOnSave: process.env.NODE_ENV === 'development',
    productionSourceMap: false,
    // see https://github.com/vuejs/vue-cli/blob/dev/docs/webpack.md
    // webpack配置
    chainWebpack: (config) => {
    },
    configureWebpack: (config) => {
        if (process.env.NODE_ENV === 'production') {
            // 为生产环境修改配置...
            config.mode = 'production'
        } else {
            // 为开发环境修改配置...
            config.mode = 'development'
        }
        Object.assign(config, {
            // 开发生产共同配置
            resolve: {
                alias: {
                    '@': resolve('src'), // 主目录
                    'views': resolve('src/views'), // 页面
                    'components': resolve('src/components'), // 组件
                    'api': resolve('src/api'), // 接口
                    'utils': resolve('src/utils'), // 通用功能
                    'assets': resolve('src/assets'), // 静态资源
                    'style': resolve('src/style') // 通用样式
                  }
            }
        })
    },
    // css相关配置
    css: {
        extract: true, // 是否使用css分离插件 ExtractTextPlugin
        sourceMap: false, // 开启 CSS source maps?
        loaderOptions: {
            css: {}, // 这里的选项会传递给 css-loader
            postcss: {} // 这里的选项会传递给 postcss-loader
        }, // css预设器配置项 详见https://cli.vuejs.org/zh/config/#css-loaderoptions
        modules: false // 启用 CSS modules for all css / pre-processor files.
    },

    devServer: {
        open: process.platform === 'darwin',
        host: '0.0.0.0', // 允许外部ip访问
        port: 8022, // 端口
        https: false, // 启用https
        overlay: {
            warnings: true,
            errors: true
        }, // 错误、警告在页面弹出
        proxy: {
            '/api': {
                target: 'http://www.baidu.com/api',
                changeOrigin: true, // 允许websockets跨域
                // ws: true,
                pathRewrite: {
                    '^/api': ''
                }
            }
        } // 代理转发配置，用于调试环境
    }
}