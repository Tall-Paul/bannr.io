var elixir = require('laravel-elixir');
var js_obfuscator = require('gulp-js-obfuscator');
var gulp = require("gulp");
var shell = require("gulp-shell");
var obfuscate = require('gulp-obfuscate');



var path = {
    build: {
      js: 'public/js/',
    },
    src: {
      js: 'public/js/all.js',
    }
};

/*gulp.src(path.src.js)
    .pipe(js_obfuscator({}))
    .pipe(gulp.dest(path.build.js));*/


/*
 |--------------------------------------------------------------------------
 | Elixir Asset Management
 |--------------------------------------------------------------------------
 |
 | Elixir provides a clean, fluent API for defining some basic Gulp tasks
 | for your Laravel application. By default, we are compiling the Sass
 | file for our application, as well as publishing vendor resources.
 |
 */

elixir.config.sourcemaps = false;

elixir.extend('uglify', function() {

new elixir.Task('uglify', function() {
            return gulp.src('public/js/all.js').pipe(obfuscate()).pipe(gulp.dest('public/js/',{overwrite:true}));
        })
        .watch('./app/**');

});



elixir(function(mix) {
    //mix.sass('app.scss');

    mix.styles([
        "*.css",
    ]);

    mix.scripts([
        "ordered/moment.min.js",
        "ordered/bootstrap-datetimepicker.js",
        "ordered/jquery.form.js",
        "ordered/jquery.jqtransform.js",
        "ordered/bundle.js",
        "ordered/spectrum.js",
        "ordered/bootstrap-tour.min.js",
        "app/editorAPI.js",
        "app/templateBuilder.js",
        "app/campaignBuilder.js",
        "app/scheduleBuilder.js",
        "app/editor.js",
        "*.js",
    ]).uglify();
});
