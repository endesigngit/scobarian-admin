module.exports = {
  afterCreate(event) {
    const { result, params } = event;
    
    strapi.plugins['email'].services['email'].send({
      to: 'chernyshov@endesign.ru',
      from: 'no-reply@skobarian.ru',
      text: 'Hello world, test-entity process',
    });
  },
};