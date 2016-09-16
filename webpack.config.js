module.exports = {
    entry: "./app-client.js",
    output: {
        filename: "public/bundle.js"
    },
    module: {
        loaders: [
            {
                exclude: /(node_module|app-server.js)/,
                loader: 'babel-loader',
                query: {
                    presets: ['es2015', 'react', "stage-0"]
                }
            }
        ]
    }
};
