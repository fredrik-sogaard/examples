var elixir = require('laravel-elixir')
require('laravel-elixir-postcss')
require('laralix-imagemin')

var inProduction = elixir.config.production
var HOSTNAME = 'feed.dev'

elixir(function (mix) {
  mix.postcss('main.css', {
    output: './web/build/css',
    srcPath: './web/css',
    plugins: [
      require('postcss-easy-import'),
      require('precss')
    ]
  })
  mix.webpack('./web/js/index.js', './web/build/js/bundle.js')
  if (!inProduction) {
    mix.browserSync({
      proxy: HOSTNAME,
      files: [
        'templates/**/*.html',
        './web/build/**/*.css',
        './web/build/**/*.js'
      ]
    })
  }
  if (inProduction) {
    mix.imagemin('./web/images', './web/images', {
      verbose: true
    })
  }
})
