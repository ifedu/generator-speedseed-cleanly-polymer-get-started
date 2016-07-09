module.exports = (data) => {
    const speedseed = require('speedseed')

    const file = new speedseed.Files()

    const bowerJson = {
        name: data.template,
        private: true,

        dependencies: {}
    }

    const getCompiler = {
        babeljs: {},
        coffeescript: {},
        typescript: {}
    }

    const getCss = {
        less: {},
        sass: {},
        scss: {},
        styl: {}
    }

    const getFramework = {
        angularjs: {},
        angular2: {},
        jquery: {},

        polymer: {
            'iron-icon': 'PolymerElements/iron-icon#^1.0.0',
            'iron-icons': 'PolymerElements/iron-icons#^1.0.0',
            'Polymer': '^1.6.0'
        },

        react: {},
        vanillajs: {}
    }

    const getFrameworkDev = {
        angularjs: {},
        angular2: {},
        jquery: {},
        polymer: {},
        react: {},
        vanillajs: {}
    }

    const getTest = {
        no: {},
        jasmine: {},
        mocha: {}
    }

    file.readFile('./bower.json', bowerJson)

    const extend = require('extend')

    extend(
        true,
        bowerJson.dependencies,
        getFramework[data.framework]
    )

    extend(
        true,
        bowerJson.devDependencies,
        getCompiler[data.compiler],
        getCss[data.css],
        getFrameworkDev[data.framework],
        getTest[data.test]
    )

    file.writeFile('bower.json', 2, bowerJson)
}