/**
 * SampleEmailController
 *
 * @description :: Server-side logic for managing Sampleemails
 * @help        :: See http://sailsjs.org/#!/documentation/concepts/Controllers
 */

module.exports = {

    triggerEmail: function (req, res) {
        let mailBody = {
            recipientName: "Sailsit Develoepr",
            senderName: "Sailsit Admin"
        };
        SampleEmailServices.sendMail(mailBody, "Welcome to sailsIt", "sampleEmail", function (err, message) {
            if(err) {
                sails.log.debug(err);
                res.serverError(message);
                return;
            }
            res.status(200);
            return res.send({
                "message": message
            });
        })
    }

};

