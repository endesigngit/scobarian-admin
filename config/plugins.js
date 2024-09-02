module.exports = ({ env }) => ({
  email: {
    config: {
      provider: 'nodemailer',
      providerOptions: {
        host: env('EMAIL_SMTP_HOST'),
        port: env('EMAIL_SMTP_PORT'),
        auth: {
          user: env('EMAIL_SMTP_USERNAME'),
          pass: env('EMAIL_SMTP_PASSWORD'),
        },
      },
      settings: {
        defaultFrom: env('EMAIL_ADDRESS_FROM'),
        defaultReplyTo: env('EMAIL_ADDRESS_REPLY'),
      },
    },
  },
});
