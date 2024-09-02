module.exports = {
  afterCreate(event) {
    const { result, params } = event;
    
    strapi.plugins['email'].services['email'].send({
      to: 'lyme1878@mail.ru',
      from: 'admin@tourverse.ru',
      text: 'Hello world, test-entity process',
    });
  },
};