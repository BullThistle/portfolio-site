var express = require('express');
var router = express.Router();
var nodemailer = require('nodemailer');

var transport = {
  host: 'smtp.gmail.com',
  auth: {
    user: process.env.GMAIL_USER,
    pass: process.env.GMAIL_PASS
  }
};

var transporter = nodemailer.createTransport(transport);

transporter.verify((error, success) => {
  if (error) {
    console.log(error);
  } else {
    console.log('Nodemailer started!');
  }
});

router.post('/send', (req, res, next) => {
  var email = req.body.email;
  var message = req.body.message;
  var content = `email: ${email} \n message: ${message} `;

  var mail = {
    to: 'rfurry@gmail.com',
    subject: 'New message from rafadev.com',
    text: content
  };

  transporter.sendMail(mail, (err, data) => {
    if (err) {
      res.json({
        msg: 'fail'
      });
    } else {
      res.json({
        msg: 'success'
      });
    }
  });
});

module.exports = router;
