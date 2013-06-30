module.exports = (grunt)->
	grunt.initConfig
		pkg: "<json:package.json>"
		coffee:
			main:
				files:
					"./public/javascripts/main.js": "./public/javascripts/main.coffee"
				options:
					bare: true
					sourceMap: true
			# test:
			# 	files:
			# 		"mul.test.js": "mul.test.coffee"

		# exec:
		# 	test:
		# 		command: "mocha mul.test.js -R spec"
		watch:
			files: ["./public/javascripts/main.coffee"]
			tasks: ["coffee"]

		grunt.loadNpmTasks "grunt-contrib-coffee"
		grunt.loadNpmTasks "grunt-contrib-watch"
		# grunt.loadNpmTasks "grunt-exec"