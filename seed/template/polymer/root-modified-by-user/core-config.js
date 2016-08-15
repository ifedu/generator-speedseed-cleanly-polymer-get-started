module.exports = ($) => {
    const coreConfigJson = {
        'app': {
            'folder': 'app',
            'inFolder': {
                'assets': 'assets',
                'components': 'components',
                'vendor': 'vendor'
            }
        },
        'build': {
            'folder': 'build',
            'port': 8001
        },
        'dist': {
            'folder': 'dist',
            'inFolder': {
                'index': 'index.html',
                'jsAll': 'js/all.js',
                'appInFolderComponents': {
                    'vulcanizeFile': 'main.html'
                }
            },
            'port': 8002
        },
        'tmp': {
            'folder': 'tmp'
        },
        'server': {
            'auth': '/auth',
            'request': '/api',
            'route': 'http://localhost',
            'port': 8080,
            'portReload': 35729
        },
        'test': {
            'singleRun': true,
            'browsers': [
                'PhantomJS'
            ],
            'exclude': [],
            'files': [
                './-build/js/**/*.js',
                './-build/components/**/*.js',
                './-tmp/**/*.spec.js'
            ],
            'preprocessors': {}
        },
        'reports': {
            'folder': 'reports',
            'inFolder': {
                'plato': {
                    'folder': 'plato',
                    'port': 8003
                }
            }
        },
        'indent': {
            'folder': 'app',
            'spacesBefore': 2,
            'spacesAfter': 4,
            'src': [
                './app/**/*',
                '!./app/assets/**/*',
                '!./app/-vendor/**/*'
            ]
        }
    }

    const getFramework = {}

    const vendors = getFramework[$.framework] || []
    const testFiles = coreConfigJson.test.files

    coreConfigJson.test.files = []

    vendors.forEach((vendor) => coreConfigJson.test.files.push(vendor))
    testFiles.forEach((testFile) => coreConfigJson.test.files.push(testFile))

    const speedseed = require('speedseed')

    const file = new speedseed.Files()

    file.readFile('core-config.json', coreConfigJson)

    file.writeFile('core-config.json', 4, coreConfigJson)
}