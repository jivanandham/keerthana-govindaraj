const isProd = process.env.NODE_ENV === "production";

module.exports = {
  reactStrictMode: true,
  basePath: isProd ? "/your-repo-name" : "",
  assetPrefix: isProd ? "/your-repo-name/" : "",
  trailingSlash: true,
};
