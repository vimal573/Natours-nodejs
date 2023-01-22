// eslint-disable-next-line import/no-extraneous-dependencies
const nodemailer = require('nodemailer');

const sendEmail = async options => {
  // 1) Create a transporter
  const transporter = nodemailer.createTransport({
    host: process.env.SMTP_MAIL_HOST,
    port: process.env.SMTP_MAIL_PORT,
    auth: {
      user: process.env.SMTP_MAIL_USERNAME,
      pass: process.env.SMTP_MAIL_PASSWORD
    }
  });

  // 2)Define the email options
  const mailOptions = {
    from: 'Vimal Kumar <vimal2540.vk@gmail.com>',
    to: options.email,
    subject: options.subject,
    text: options.message
    // html
  };

  // 3)Actually send the email
  await transporter.sendMail(mailOptions);
};

module.exports = sendEmail;
