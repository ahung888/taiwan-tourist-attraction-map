module.exports = {
  reactStrictMode: true,
  env: {
    APP_VERSION: '0.2.0',
    MAPBOX_TOKEN: process.env.MAP_TOKEN,
    PTX_API_ID: process.env.PTX_API_ID,
    PTX_API_KEY: process.env.PTX_API_KEY,
  },
  basePath: '/taiwan-tourist-attraction-map',
}
