const User = require('./../models/userModel');

exports.findUserByMail = async (mail) => {
    const user = await User.find({mail})
    return user[0];
}
