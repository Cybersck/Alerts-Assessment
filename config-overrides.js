const path = require('path');
const resolve = dir => path.resolve(__dirname, dir);

// Set up absolute paths
module.exports = (config, env) => {
    config.resolve.alias = Object.assign(config.resolve.alias, {
        "@controllers": resolve("src/controllers"),
        "@data": resolve("src/data"),
        "@helpers": resolve("src/helpers"),
        "@services": resolve("src/model/services"),
        "@state": resolve("src/model/state"),
        "@components": resolve("src/view/components"),
        "@containers": resolve("src/view/containers"),
        "@root": resolve("src"),
        "@resources": resolve("src/_resources")
    });


    return config;
}