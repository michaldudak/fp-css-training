module.exports = function(grunt) {
	"use strict";

	grunt.initConfig({
		less: {
			options: {
				paths: ["styles/*.less"],
				sourceMap: true
			},
			styles: {
				options: {
					sourceMapURL: "style.css.map"
				},
				files: {
					"styles/style.css": "styles/main.less"
				}
			}
		},
		watch: {
			styles: {
				files: ["styles/*.less"],
				tasks: ["less"]
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-less');
};