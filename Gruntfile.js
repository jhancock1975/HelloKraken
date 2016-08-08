'use strict';


module.exports = function (grunt) {

    // Load the project's grunt tasks from a directory
    require('grunt-config-dir')(grunt, {
        configDir: require('path').resolve('tasks')
    });

   grunt.initConfig({
    env: {
      dev: {
        NODE_ENV: 'development'
      },
      test: {
        NODE_ENV: 'test'
      }
    },
    nodemon: {
      dev: {
        script: 'server.js',
        options: {
          ext: 'js,html',
          watch: ['server.js', 'config/**/*.js', 'app/**/*.js']
        }
      }
    }
  });

  grunt.loadNpmTasks('grunt-env');
  grunt.loadNpmTasks('grunt-nodemon');

  grunt.registerTask('default', ['env:dev']);    
  grunt.loadNpmTasks('grunt-makara-amdify');
    
    // Register group tasks
  grunt.registerTask('build', ['eslint', 'eslint', 'dustjs', 'less', 'requirejs', 'copyto']);

  grunt.registerTask('test', [ 'eslint', 'mochacli' ]);

    
};
