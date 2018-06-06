const User = require('./userSchema');

const userController = {};

userController.createUser = (req, res) => {
    console.log('info: ', req.body);
    User.create({
        username: req.body.username,
        password: req.body.password
    }, (err, user) => {
        if (err) {
            console.log("error is : ", err);
        }
        else {
            console.log("User is created : ", user);
            res.status(200).send(200);
        }
    })
};

userController.verifyUser = (req, res) => {

    User.findOne(req.body, (err, userInfo) => {
        if (userInfo == null) {
            res.send({error: 'User does not exist, please create an account!'});
        } else {
            res.locals.userInfo = userInfo;
            res.send(res.locals.userInfo);
        }
    });

};

module.exports = userController;