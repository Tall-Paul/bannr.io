var elixir = require('laravel-elixir');

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
        "app/editorAPI.js",
        "app/templateBuilder.js",
        "app/campaignBuilder.js",
        "app/scheduleBuilder.js",
        "app/editor.js",
        "*.js",
    ]);
});
