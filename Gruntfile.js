module.exports = function(grunt) {
  grunt.initConfig({
    jshint: {
      all: ['Gruntfile.js', 'js/**/*.js']
    },
    copy: {
      main: {
        files: [{
          src: ['app.html', 'manifest.weapp', 'fonts/*', 'icons/*', 'js/*',
                'style/*', 'style_unstable/*', 'images/*'],
          dest: 'package/'
        }]
      }
    },
    zip: {
      dist: {
        src: 'package/**',
        dest: 'package/app.zip'
      }
    },
    clean: {
      dist: ['package/']
    }
  });

  grunt.loadNpmTasks('grunt-contrib-clean');
  grunt.loadNpmTasks('grunt-contrib-jshint');
  grunt.loadNpmTasks('grunt-contrib-copy');
  grunt.loadNpmTasks('grunt-zip');

  grunt.registerTask('default', ['clean', 'copy', 'zip']);
};
