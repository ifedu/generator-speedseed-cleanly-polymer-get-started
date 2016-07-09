const generators = require('yeoman-generator')

const speedseed = require('speedseed')

module.exports = class Yo extends speedseed.Yo {
    constructor(...args) {
        super(...args)
    }

    paths() {
        this.pathsSet()
    }

    write() {
        const options = this.config.getAll()

        require('../files/_bower.js')(options)
    }
}