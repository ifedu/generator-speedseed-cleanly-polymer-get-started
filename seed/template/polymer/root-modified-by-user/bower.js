module.exports = ($) => {
    const bowerJson = {
        name: `${$.project} with ${$.template}`,
        private: true,

        dependencies: {}
    }

    const getCompiler = {
        babeljs: {}
    }

    const getCss = {
        sass: {}
    }

    const getFramework = {
        polymer: {
            'iron-icon': 'PolymerElements/iron-icon#^1.0.0',
            'iron-icons': 'PolymerElements/iron-icons#^1.0.0',
            'Polymer': '^1.6.0'
        }
    }

    const getFrameworkDev = {
        polymer: {}
    }

    const getTest = {
        no: {},
        mocha: {}
    }

    const speedseed = require('speedseed')

    const file = new speedseed.Files()

    file.readFile('./bower.json', bowerJson)

    const extend = require('extend')

    extend(
        true,
        bowerJson.dependencies,
        getFramework[$.framework]
    )

    extend(
        true,
        bowerJson.devDependencies,
        getCompiler[$.compiler],
        getCss[$.css],
        getFrameworkDev[$.framework],
        getTest[$.test]
    )

    file.writeFile('bower.json', 2, bowerJson)
}