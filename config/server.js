module.exports = ({ env }) => ({
  host: env('HOST', '127.0.0.1'),
  //port: env.int('PORT', 1337),
  port: 1338,
  url: 'http://admin.skobarian.ru/', 
  app: {
    keys: env.array('APP_KEYS'),
  },
  webhooks: {
    populateRelations: env.bool('WEBHOOKS_POPULATE_RELATIONS', false),
  },
});
