module.exports = function(grunt) {
  grunt.initConfig({
    less: {
         development: {
            options: {
                 paths: ["/css"]
            },
            files: {"css/app.css": "css/app.less"}
         },
         production: {
            options: {
                paths: ["/css"],
                cleancss: true
            },
             files: {"css/app.css": "css/app.less"}
            }
        }
    });
   grunt.loadNpmTasks('grunt-contrib-less');
   grunt.registerTask('default', ['less']);
};