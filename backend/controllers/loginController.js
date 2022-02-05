const catchAsync = require("./../utils/catchAsync");
const AppError = require("./../utils/appError");
const userService = require("./../services/userService");

const jwt = require('jsonwebtoken');

exports.login = catchAsync(async (req, res, next) => {

    const user = await userService.findUserByMail(req.body.mail);
    if(!user) next(new AppError("User not found", 404));

    const passwordIsValid = req.body.password === user.password;

    if (!passwordIsValid) next(new AppError("Password not valid", 401));

    const token = jwt.sign({ id: user._id }, process.env.JWY_SECRET_KEY, {
        expiresIn: 86400 // expires in 24 hours
      });
        
    console.log(token);
    return res.status(200).json({ auth: true, token: token });
  
});