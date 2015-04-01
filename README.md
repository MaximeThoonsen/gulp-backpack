<h1>gulp-backpack</h1>
<p align="center">
  <a href="http://gulpjs.com">
    <img height="239" width="200" src="http://pixabay.com/static/uploads/photo/2012/04/12/11/42/backpack-29635_640.png">
  </a>
</p>

<a href='https://coveralls.io/r/MaximeThoonsen/gulp-backpack?branch=master'><img src='https://coveralls.io/repos/MaximeThoonsen/gulp-backpack/badge.svg?branch=master' alt='Coverage Status' /></a>
<a href='https://travis-ci.org/MaximeThoonsen/gulp-backpack'><img src='https://travis-ci.org/MaximeThoonsen/gulp-backpack.svg' alt='Build Status' /></a>

This repository is meant to simplify the inclusion of all those tools and gulp plugins
we all need to compile our angular app with gulp. One gulp-backpack to gulp them all!

<h2>What gulp-backpack contains</h2>
<h3>Gulp plugins</h3>

* "gulp-angular-templatecache": "^1.1.3"
* "gulp-autoprefixer": "^2.0.0"
* "gulp-coffee": "^1.4.3"
* "gulp-coffeelint": "^0.4.0"
* "gulp-concat": "^2.2.0"
* "gulp-filter": "^0.4.1"
* "gulp-jade": "^0.5.0"
* "gulp-less": "^1.3.9"
* "gulp-manifest": "0.0.6"
* "gulp-ng-annotate": "^0.5.2"
* "gulp-plumber": "^0.6.5"
* "gulp-rename": "^1.2.0"
* "gulp-replace": "^0.4.0"
* "gulp-rev": "^2.0.1"
* "gulp-rev-collector": "^0.1.1"
* "gulp-uglify": "^0.2.1"
* "gulp-util": "^2.2.20"
* "gulp-webserver": "^0.8.8"

<h3> Tools</h3>

* "del": "^1.1.1"
* "require-dir": "^0.1.0"

<h3> HOW TO USE IT</h3>
1) Installation
You need to have gulp installed so your package.json looks like :

    ...
    "gulp": "~3.8.10",
    "gulp-backpack": "^0.1.2",
    ..

2) Use it to build your task
Here a example of how to use it. This is a task to compile the less files.
You don't need to worry to what you have to include or not you just use it with
gulp-backpack.

Not Using gulp-backpack

    gulp = require 'gulp'
    path = require 'path'
    parameters = require '../../parameters.coffee'

    less = require 'gulp-less'
    plumber = require 'gulp-plumber'
    rename = require 'gulp-rename'
    rev = require 'gulp-rev'
    autoprefixer = require 'gulp-autoprefixer'

    # Compile LESS files into CSS
    gulp.task 'less', ->
      gulp.src parameters.less_main_file
      .pipe plumber()
      .pipe less paths: [ path.join(__dirname) ]
      .pipe autoprefixer
        browsers: ['last 2 versions', 'Firefox >= 24', 'ie >= 8']
        cascade: false
      .pipe rev()
      .pipe gulp.dest "#{parameters.web_path}/css"
      .pipe rev.manifest()
      .pipe rename 'rev-less.json'
      .pipe gulp.dest parameters.build_temp_path

Using gulp-backpack

    gbp = require 'gulp-backpack'
    path = require 'path'
    parameters = require '../../parameters.coffee'

    # Compile LESS files into CSS
    gbp.gulp.task 'less', ->
      gbp.gulp.src parameters.less_main_file
      .pipe gbp.plumber()
      .pipe gbp.less paths: [ path.join(__dirname) ]
      .pipe gbp.autoprefixer
        browsers: ['last 2 versions', 'Firefox >= 24', 'ie >= 8']
        cascade: false
      .pipe gbp.rev()
      .pipe gbp.gulp.dest "#{parameters.web_path}/css"
      .pipe gbp.rev.manifest()
      .pipe gbp.rename 'rev-less.json'
      .pipe gbp.gulp.dest parameters.build_temp_path

<h2>PROS and CONS</h2>

<h3>PROS</h3>

    * The package.json is more simple
    * No need to require for every file every plugin
    * Less conflicts with the dependencies

<h3>CONS</h3>

    * Maybe a little slower because we load all plugin
