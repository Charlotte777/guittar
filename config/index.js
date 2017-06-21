// see http://vuejs-templates.github.io/webpack for documentation.
var path = require('path')

module.exports = {
    build: {
        env: require('./prod.env'),
        index: path.resolve(__dirname, '../dist/index.html'),
        assetsRoot: path.resolve(__dirname, '../dist'),
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        productionSourceMap: true,
        // Gzip off by default as many popular static hosts such as
        // Surge or Netlify already gzip all static assets for you.
        // Before setting to `true`, make sure to:
        // npm install --save-dev compression-webpack-plugin
        productionGzip: false,
        productionGzipExtensions: ['js', 'css'],
        // Run the build command with an extra argument to
        // View the bundle analyzer report after build finishes:
        // `npm run build --report`
        // Set to `true` or `false` to always turn it on or off
        bundleAnalyzerReport: process.env.npm_config_report
    },
    dev: {
        env: require('./dev.env'),
        port: 8080,
        autoOpenBrowser: true,
        assetsSubDirectory: 'static',
        assetsPublicPath: '/',
        proxyTable: {
            '/login/': 'https://localhost:3000/',
            '/user/': 'https://localhost:3000/',
            '/playlist/': 'https://localhost:3000/',
            '/music/': 'https://localhost:3000/',
            '/search/': 'https://localhost:3000/',
            '/lyric/': 'https://localhost:3000/',
            '/comment/': 'https://localhost:3000/',
            '/album/': 'https://localhost:3000/',
            '/artists/': 'https://localhost:3000/',
            '/artist_album/': 'https://localhost:3000/',
            '/personal_fm/': 'https://localhost:3000/',
            '/daily_signin/': 'https://localhost:3000/',
            '/like/': 'https://localhost:3000/',
            '/fm_trash/': 'https://localhost:3000/',
            '/top_playlist/': 'https://localhost:3000/',
            '/new_albums/': 'https://localhost:3000/',
            '/top_artists/': 'https://localhost:3000/',
            '/top_list/': 'https://localhost:3000/',
            '/song/': 'https://localhost:3000/',
            '/top/': 'https://localhost:3000/',
            '/personalized': 'https://localhost:3000/',
            '/search': 'https://localhost:3000/',
        },
        // CSS Sourcemaps off by default because relative paths are "buggy"
        // with this option, according to the CSS-Loader README
        // (https://github.com/webpack/css-loader#sourcemaps)
        // In our experience, they generally work as expected,
        // just be aware of this issue when enabling this option.
        cssSourceMap: false
    }
}