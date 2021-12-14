const { merge } = require("webpack-merge");
const singleSpaDefaults = require("webpack-config-single-spa-react-ts");

module.exports = (webpackConfigEnv, argv) => {
  const defaultConfig = singleSpaDefaults({
    orgName: "csx",
    projectName: "data-center-public",
    webpackConfigEnv,
    argv,
  });
  defaultConfig.externals= [ 'single-spa', /^@csx\// ];
  console.log(defaultConfig);

  return merge(defaultConfig, {
    // modify the webpack config however you'd like to by adding to this object
  });
};
