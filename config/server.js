module.exports = ({ env }) => ({
  url: env("https://stays-strapi-api.herokuapp.com"),
});

/*module.exports = ({ env }) => ({
  host: env('HOST', '0.0.0.0'),
  port: env.int('PORT', 1337),
  app: {
    keys: env.array('APP_KEYS'),
  },
});*/
