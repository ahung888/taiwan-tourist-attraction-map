module.exports = {
  reactStrictMode: true,
  env: {
    APP_VERSION: process.env.APP_VERSION,
    MAPBOX_TOKEN: process.env.REACT_APP_MAP_API,
    PTX_API_ID: process.env.PTX_API_ID,
    PTX_API_KEY: process.env.PTX_API_KEY,
  },
  basePath: '/taiwan-tourist-attraction-map',
}
