const set = (name, value, extra, exclude) => ({ name, value, extra, exclude })

module.exports = [{
    message: 'Library / Framework?',
    name: 'framework',

    choices: [
        set('Polymer', 'polymer')
    ]
}, {
    message: 'HTML?',
    name: 'html',

    choices: [
        set('Jade', 'jade')
    ]
}, {
    message: 'JS?',
    name: 'js',

    choices: [
        set('BabelJS', 'babeljs', 'js')
    ]
}, {
    message: 'CSS?',
    name: 'css',

    choices: [
        set('SaSS', 'sass', 'sass')
    ]
}]