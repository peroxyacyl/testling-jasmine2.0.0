module.exports = function(grunt) {
  grunt.initConfig({
    typescript: {
      sourcemap: {
        src: ['src/index.ts'],
        dest: 'dist/index.js',
        options: {
          target: "ES5",
          sourceMap: true
        }
      }
    },
    watch: {
      typescript: {
        files: ['src/*.ts'],
        tasks: ['compile']
      }
    }
  });
  grunt.loadNpmTasks('grunt-typescript');
  grunt.loadNpmTasks('grunt-contrib-watch');
  grunt.registerTask('compile', ['typescript:sourcemap']);
};
