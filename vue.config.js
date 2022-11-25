const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  // publicPath harus dicomen jika ingin npm run serve
  // publicPath: 'dist/',
  outputDir: '../dist',
  indexPath: '../index.html'
}