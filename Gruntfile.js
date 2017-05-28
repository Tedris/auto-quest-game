module.exports = function(grunt) {
    // Project configuration.
    grunt.initConfig({
        connect: {
            server: {
                options: {
                    port: 8000,
                    keepalive: true,
                    open: {
                        target: 'http://localhost:8000'
                    }
                }
            }
        }
    });
    grunt.loadNpmTasks('grunt-contrib-connect');

    grunt.registerTask('default', ['connect']);
};