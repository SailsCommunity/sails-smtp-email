module.exports = {

    sendMail: function(mailBody, subject, template, cb) {
        sails.hooks.email.send(
            template,
            mailBody,
            { to: "developer@sailsit.com", subject: subject},
            function(err) {
                if(err) {
                    sails.log.debug(err);
                    cb(err, "Email not sent");
                }
                cb(null, "EMail Sent");
            }
        )
    }

};