module.exports = {
  afterCreate(event) {
    const { result, params } = event;

    const email = params.data.userEmail
    const name = params.data.userName
    const phone = params.data.userPhone
    const text = params.data.userText
    const nameHtml = name ? `
    <div>
      <span>Имя:</span>
      <span>${name}</span>
    </div>
  ` : ""
  const emailHtml = (email && email != "notmail@no.ru") ? `
    <div>
      <span>Email:</span>
      <span>${email}</span>
    </div>
  ` : ""
  const phoneHtml = phone ? `
    <div>
      <span>Телефон:</span>
      <span>${phone}</span>
    </div>
  ` : ""
  const textHtml = text ? `
    <div>
      <span>Сообщение:</span>
      <span>${text}</span>
    </div>
  ` : ""
    
    strapi.plugins['email'].services['email'].send({
      to: ['chernyshov@endesign.ru', 'mikhailov@pskovlive.ru'],
      from: 'no-reply@skobarian.ru',
      subject: "Форма обратной связи",
      html: `
        <div>
          <h3>У Вас новый запрос в форме обратной связи!</h3>
          <hr>
          ${nameHtml}
          ${emailHtml}
          ${phoneHtml}
          ${textHtml}
        </div>
        `,
    });
  },
};