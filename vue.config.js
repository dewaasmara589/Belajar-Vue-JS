const { defineConfig } = require('@vue/cli-service')
module.exports = defineConfig({
  transpileDependencies: true
})

module.exports = {
  publicPath: 'dist/',
  outputDir: '../dist',
  indexPath: '../index.html'
}