module.exports = ($) => {
    const speedseed = require('speedseed')
    const file = new speedseed.Files()

    const optionsGeneral = {
        name: `${$.general.project} with ${$.user.template}`,
        private: true,

        dependencies: {}
    }

    file.extendFromUser(optionsGeneral, './bower.json')
    file.extendFromOptions($, optionsGeneral.dependencies, {
        framework: {
            polymer: {
                'Polymer': '1.7.0',
                'iron-icon': 'PolymerElements/iron-icon#1.0.12',
                'iron-icons': 'PolymerElements/iron-icons#1.1.3'
            }
        }
    })

    file.writeFile('bower.json', optionsGeneral, 2)
}