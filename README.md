#Gulp Backpack
This repository is meant to simplify the inclusion of all those tools we need to compile our angular app with gulp

##gulp tool
Gulp Backpack includes:

* "gulp-angular-templatecache": "^1.1.3"
* "gulp-autoprefixer": "^2.0.0"
* "gulp-coffee": "^1.4.3"
* "gulp-coffeelint": "^0.4.0"
* "gulp-concat": "^2.2.0"
* "gulp-filesize": "0.0.6"
* "gulp-filter": "^0.4.1"
* "gulp-jade": "^0.5.0"
* "gulp-less": "^1.3.9"
* "gulp-manifest": "0.0.6"
* "gulp-ng-annotate": "^0.3.6"
* "gulp-plumber": "^0.6.5"
* "gulp-rename": "^1.2.0"
* "gulp-replace": "^0.4.0"
* "gulp-rev": "^2.0.1"
* "gulp-rev-collector": "^0.1.1"
* "gulp-uglify": "^0.2.1"
* "gulp-util": "^2.2.20"
* "gulp-webserver": "^0.8.8"

## Other tools

* "del": "^1.1.1"
* "require-dir": "^0.1.0"


## HOW TO USE IT

    gulp = require 'gulp'
    parameters = require '../../parameters.coffee'
    gbp = require 'gulp-backpack'

    # Compile webpages from Jade to HTML
    # Only applies to files located on the app_path folder
    # Jade files in subdirectories are considered as templates
    gulp.task 'jade', ->
      gulp.src "#{parameters.app_path}/*.jade"
      .pipe gbp.plumber()
      .pipe gbp.jade pretty: true
      .pipe gulp.dest parameters.build_temp_path
