const withTypescript = require('@zeit/next-typescript')
const withSass = require('@zeit/next-sass')
const withCSS = require("@zeit/next-css")

module.exports = withTypescript(withCSS(withSass({
    cssModules: true,
    cssLoaderOptions: {
        importLoaders: 2,
    },
    webpack: (config, options) => {
        config.module.rules.push({
            test: /\.(png|jpg|gif|svg|eot|ttf|woff|woff2)$/,
            use: {
                loader: 'url-loader',
                options: {
                    limit: 100000
                }
            }
        })

        config.module.rules.forEach(rule => {
            // was rule.test.toString()
            // console.log(rule)
            if (rule.test && rule.test.toString().includes('.scss')) {
                rule.rules = rule.use.map(useRule => {
                    if (typeof useRule === 'string') {
                        return {
                            loader: useRule
                        };
                    }
                    if (useRule.loader === 'css-loader') {
                        return {
                            oneOf: [{
                                    test: new RegExp('.global.scss$'),
                                    loader: useRule.loader,
                                    options: {},
                                },
                                {
                                    loader: useRule.loader,
                                    options: {
                                        modules: true
                                    }
                                },
                            ],
                        };
                    }
                    return useRule;
                });
                delete rule.use;
            }
        });
        return config;
    },
    module: {
        loaders: [{
                test: /\.css$/,
                loaders: ['style-loader', 'css-loader?modules'],
            },
            {
                test: /.tsx?$/,
                loader: 'babel-loader',
                exclude: /node_modules/,
            },
            {
                test: /\.svg$/,
                loader: 'react-svg-loader',
            },
            {
                test: /\.(jpe?g|png|gif|woff|woff2|eot|ttf)(\?[a-z0-9=.]+)?$/,
                loader: 'url-loader?limit=100000',
            },
        ],
    },
})))