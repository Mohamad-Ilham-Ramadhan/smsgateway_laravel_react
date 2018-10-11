let mix = require('laravel-mix');

/*
 |--------------------------------------------------------------------------
 | Mix Asset Management
 |--------------------------------------------------------------------------
 |
 | Mix provides a clean, fluent API for defining some Webpack build steps
 | for your Laravel application. By default, we are compiling the Sass
 | file for the application as well as bundling up all the JS files.
 |
 */

mix.react('resources/js/app.js', 'public/js')
   .sass('resources/sass/404.sass', 'public/css')
   .sass('resources/sass/main.scss', 'public/css')
   .webpackConfig({
   	resolve: {
   		extensions:['.js', 'jsx'],
   		alias: {
   			'@': __dirname + '/resources/js'
   		}
   	}
   });