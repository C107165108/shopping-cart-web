const CracoLessPlugin = require('craco-less');

module.exports = {
    plugins: [
        {
            plugin: CracoLessPlugin,
            options: {
                lessLoaderOptions: {
                    lessOptions: {
                        modifyVars: {
                            '@primary-color': '#78c22e',
                            '@body-background': '#fff',
                            "@border-radius-base": "10px"
                        },
                        javascriptEnabled: true,
                    },
                },
            },
        },
    ],
};