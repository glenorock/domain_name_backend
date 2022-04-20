var nodemailer = require('nodemailer');
var config = require('config')

var transporter = nodemailer.createTransport(config.get("email"));


const send = (subject, message, receiver) => {
  return new Promise((resolve, reject) => {
    var mailOptions = {
      from: config.get("email.auth.user"),
      to: receiver,
      subject: subject,
      html: message
    }
    transporter.sendMail(mailOptions, function (error, info) {
      if (error) {
        console.log(error);
        resolve(undefined)
      } else {
        console.log('Email sent: ' + info.response);
        resolve(info.response)
      }
    });
  })
}

const sendBulk = (subject, message, receivers) => {
  let tmp = Array(receivers)
  let to = tmp.join(",")
  var mailOptions = {
    from: config.get("email.auth.user"),
    to: to,
    subject: subject,
    html: message
  }

  transporter.sendMail(mailOptions, function (error, info) {
    if (error) {
      console.log(error);
      return undefined
    } else {
      console.log('Email sent: ' + info.response);
      return info.response
    }
  });
}

module.exports = { send, sendBulk }