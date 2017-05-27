var gulp = require('gulp');
var $ = require('gulp-load-plugins')();
var open = require('open');
var proxy = require('http-proxy-middleware');
var  rev = require('gulp-rev-append');
var app = {
  srcPath: 'src/',
  devPath: 'build/',
  prdPath: 'dist/'
};

gulp.task('lib', function() {
  gulp.src(app.srcPath+'static/**/*.*')
  .pipe(gulp.dest(app.devPath+'static/' ))
  .pipe(gulp.dest(app.prdPath+'static/' ))
  .pipe($.connect.reload());
});

gulp.task('html', function() {
  gulp.src(app.srcPath + '**/*.html')
  .pipe(rev())
  .pipe(gulp.dest(app.devPath))
  .pipe(gulp.dest(app.prdPath))
  .pipe($.connect.reload());
})


gulp.task('json', function() {
  gulp.src(app.srcPath + 'data/**/*.json')
  .pipe(gulp.dest(app.devPath + 'data'))
  .pipe(gulp.dest(app.prdPath + 'data'))
  .pipe($.connect.reload());
});

gulp.task('css', function() {
  gulp.src(app.srcPath + 'css/**/*.css')
  .pipe($.plumber())
  .pipe($.concat('index.css'))
  .pipe(gulp.dest(app.devPath + 'css'))
  .pipe($.cssmin())
  .pipe(gulp.dest(app.prdPath + 'css'))
  .pipe($.connect.reload());
});

gulp.task('domjs', function() {
  gulp.src(['config/dev.config.js','config/const.js',app.srcPath + 'js/domjs/**/*.js',app.srcPath+'js/common.js'])
  .pipe($.plumber())
  .pipe($.concat('index.js'))
  .pipe(gulp.dest(app.devPath + 'js'))

  // .pipe($.connect.reload());

    gulp.src(['config/pro.config.js','config/const.js',app.srcPath + 'js/domjs/**/*.js',app.srcPath+'js/common.js'])
    .pipe($.plumber())
    .pipe($.concat('index.js'))
    .pipe($.uglify())
    .pipe(gulp.dest(app.prdPath + 'js'))
    .pipe($.connect.reload());
});

gulp.task('datajs', function() {
  gulp.src(app.srcPath + 'js/datajs/**/*.js')
  .pipe($.plumber())
  .pipe(gulp.dest(app.devPath + 'js/datajs'))
   .pipe($.uglify())
  .pipe(gulp.dest(app.prdPath + 'js/datajs'))
  .pipe($.connect.reload());
});

gulp.task('plugsjs', function() {
  gulp.src([
    app.srcPath+'static/jquery/dist/jquery.min.js',
    app.srcPath + 'static/angular/angular.min.js',
      app.srcPath + 'static/angular-cookie/angular-cookie.min.js',
    // app.srcPath+'static/layer/build/layer.js',
    //  app.srcPath+'static/amazeui/dist/js/amazeui.min.js'
    ])
  .pipe($.plumber())
  .pipe($.concat('plugs.js'))
  .pipe(gulp.dest(app.devPath + 'js'))
  .pipe($.uglify())
  .pipe(gulp.dest(app.prdPath + 'js'))
  .pipe($.connect.reload());
});

gulp.task('plugscss', function() {
    gulp.src([
    // app.srcPath+'static/layer/build/skin/default/layer.css',
    // app.srcPath+'static/amazeui/dist/css/amazeui.min.css',
    // app.srcPath+'static/amazeui/dist/css/app.css'
    ])
  .pipe($.plumber())
  .pipe($.concat('plugs.css'))
  .pipe(gulp.dest(app.devPath + 'css'))
  .pipe($.cssmin())
  .pipe(gulp.dest(app.prdPath + 'css'))
  .pipe($.connect.reload());
});

gulp.task('ng', function() {
  gulp.src(app.srcPath + 'ng/**/*.js')
  .pipe($.plumber())
  .pipe($.concat('ng.js'))
  .pipe(gulp.dest(app.devPath + 'js'))
  .pipe($.uglify())
  .pipe(gulp.dest(app.prdPath + 'js'))
  .pipe($.connect.reload());
});

gulp.task('image', function() {
  gulp.src(app.srcPath + 'images/**/*')
  .pipe($.plumber())
  .pipe(gulp.dest(app.devPath + 'images'))
  .pipe($.imagemin())
  .pipe(gulp.dest(app.prdPath + 'images'))
  .pipe($.connect.reload());
});

gulp.task('build', ['image', 'domjs','datajs', 'css', 'lib', 'html','ng','plugscss','plugsjs','json']);

gulp.task('clean', function() {
  gulp.src([app.devPath, app.prdPath])
  .pipe($.clean());
});

gulp.task('serve', ['build'], function() {
  $.connect.server({
//  root: [app.devPath],
		root:[app.prdPath],
    livereload: true,
    port: 3000,
     middleware: function(connect, opt) {
            return [
                proxy('/api',  {
                    target: 'http://192.168.0.128:8082/bbls',
                    changeOrigin:true,
                    pathRewrite: {
                        '^/api' : '',     // rewrite path
                    },
                }),
                proxy('/editorApi', {
                    target: 'http://192.168.0.128:8082/editor',
                    changeOrigin:true,
                    pathRewrite: {
                        '^/editorApi' : '',     // rewrite path
                    },
                })
            ]
        }
  });

  open('http://localhost:3000');

  gulp.watch(app.srcPath+'static/**/*', ['lib']);
  gulp.watch(app.srcPath + 'pages/**/*.html', ['html']);
  gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
  gulp.watch(app.srcPath + 'css/**/*.css', ['css']);
  gulp.watch(app.srcPath + 'js/datajs/**/*.js', ['datajs']);
    gulp.watch(app.srcPath + 'data/**/*.json', ['json']);
  gulp.watch(['config/config.js','config/const.js',app.srcPath + 'js/domjs/**/*.js',app.srcPath+'js/common.js'], ['domjs']);

  gulp.watch(app.srcPath + 'ng/**/*.js', ['ng']);

  gulp.watch(app.srcPath + 'images/**/*', ['image']);
});

gulp.task('default', ['serve']);