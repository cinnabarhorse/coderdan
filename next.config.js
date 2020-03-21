

//const withBundleAnalyzer = require("@next/bundle-analyzer");


module.exports = /*withBundleAnalyzer(*/{
    target: 'serverless',
    cssLoaderOptions: {
        url: false
    },
    webpack: (config, { isServer }) => {

        // Fixes npm packages that depend on `fs` module
        if (!isServer) {
            config.node = {
                fs: 'empty',
                net: 'empty',
                tls: 'empty',
            }
        }

        if (typeof require !== 'undefined') {
            require.extensions['.less'] = () => { }
            require.extensions['.css'] = file => { }
        }

        return config;
    },


    /*
    analyzeServer: ["server", "both"].includes(process.env.BUNDLE_ANALYZE),
    analyzeBrowser: ["browser", "both"].includes(process.env.BUNDLE_ANALYZE),
    bundleAnalyzerConfig: {
        server: {
            analyzerMode: 'static',
            reportFilename: '../bundles/server.html'
        },
        browser: {
            analyzerMode: 'static',
            reportFilename: '../bundles/client.html'
        }
    }
    */





}//);


