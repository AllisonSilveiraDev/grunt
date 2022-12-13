module.exports = function (grunt) {
  grunt.initConfig({
    pkg: grunt.file.readJSON("package.json"),
    less: {
      development: {
        files: {
          "./build/styles/main.css": "./src/styles/main.less",
        },
      },
      production: {
        options: {
          compress: true,
        },
        files: {
          "./build/styles/main.min.css": "./src/styles/main.less",
        },
      },
    },
  });

  grunt.registerTask("olaGrunt", function () {
    const done = this.async();
    setTimeout(function () {
      console.log("olá Grunt");
      done();
    }, 300);
  });

  grunt.loadNpmTasks("grunt-contrib-less");

  grunt.registerTask("default", ["less"]);
};
