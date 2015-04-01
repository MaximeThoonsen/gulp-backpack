'use strict';
require('mocha');
var gbp = require('../');
var should = require('should');

describe('gul-packpack should include all modules', function() {
    it('modules should exist', function(done) {
        should.exist(gbp);
        should.exist(gbp.gulp);
        should.exist(gbp.templateCache);
        should.exist(gbp.autoprefixer);
        should.exist(gbp.coffeelint);
        should.exist(gbp.coffee);
        should.exist(gbp.concat);
        should.exist(gbp.filter);
        should.exist(gbp.jade);
        should.exist(gbp.less);
        should.exist(gbp.manifest);
        should.exist(gbp.ngAnnotate);
        should.exist(gbp.plumber);
        should.exist(gbp.rename);
        should.exist(gbp.replace);
        should.exist(gbp.rev);
        should.exist(gbp.revCollector);
        should.exist(gbp.uglify);
        should.exist(gbp.util);
        should.exist(gbp.webserver);
        should.exist(gbp.del);
        should.exist(gbp.requireDir);
        done();
    });
});
