module.exports = function(grunt) {

	// Project configuration.
	grunt.initConfig({
		pkg: grunt.file.readJSON('package.json'),
		qunit: {
			files: ['tests/*.html'],
		},
		jshint: {
			files: ['Gruntfile.js', 'sjs/core/**/*.js', 'tests/*.js'],
			options: {
				// options here to override JSHint defaults
				globals: {
					jQuery: true,
					console: true,
					module: true,
					document: true,
					strict: true,
					smarttabs: true,
					trailing: true
				}
			}
		},
		watch: {
			scripts: {
				files: ['<%= jshint.files %>'],
				tasks: ['jshint', 'qunit', 'snockets'],
				options: {
					debounceDelay: 250,
					livereload: true,
					spawn: false
				}
			},
			css: {
				files: ['scss/**/*.scss', 'scss/**/*.sass', 'scss/**/*.css'],
				tasks: ['compass:dev'],
				options: {
					debounceDelay: 250,
					livereload: true,
					spawn: false
				}
			}
		},
		meta: {
			buildDirectory: 'js',
			header: '',
			footer: '',
		},
		snockets: {
			core: {
				src: ['sjs/core/main.js', 'sjs/core/head.js', 'sjs/core/libs.js'],
				options: {
					concat: {
						header: '<%= meta.header %>',
						destExtension: "js",
						destDir: "<%= meta.buildDirectory %>",
						footer: '<%= meta.footer %>'
					},
					min: {
						destExtension: "js",
						destDir: "<%= meta.buildDirectory %>"
					}
				}
			}
		},
		compass: {
			dist: {
				options: {
					sassDir: 'scss',
					cssDir: 'css',
					environment: 'production'
				}
			},
			dev: {
				options: {
					sassDir: 'scss',
					cssDir: 'css'
				}
			}
		}
	});

	grunt.loadNpmTasks('grunt-contrib-jshint');
	grunt.loadNpmTasks('grunt-barkeep');
	grunt.loadNpmTasks('grunt-contrib-qunit');
	grunt.loadNpmTasks('grunt-barkeep');
	grunt.loadNpmTasks('grunt-contrib-watch');
	grunt.loadNpmTasks('grunt-contrib-compass');

	// Default task(s).
	grunt.registerTask('test', ['jshint', 'qunit']);
	grunt.registerTask('default', ['jshint', 'qunit', 'compass:dist', 'snockets']);
	grunt.registerTask('travis', ['jshint','qunit']);

};
