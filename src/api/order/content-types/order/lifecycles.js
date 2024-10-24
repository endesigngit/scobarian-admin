module.exports = {
  afterCreate(event) {
    const { result, params } = event;
    
    strapi.plugins['email'].services['email'].send({
      to: ['chernyshov@endesign.ru', 'mikhailov@pskovlive.ru'],
      from: 'no-reply@skobarian.ru',
      text: 'Получен новый заказ! Подробнее на <a href="http://admin.skobarian.ru/">admin</a>',
    });
  },
};