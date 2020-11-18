const { User } = require("../models/User");


let auth = (req, res, next) =>{
    //인증처리를 하는 곳
    //클라이언트 쿠키에서 토큰을 가져옴
    let token = req.cookies.x_auth;

    //토큰을 복호화하고 유저를 찾음
    User.findByToken(token, (err, user)=>{
        if(err) throw err;
        if(!user) return res.json({isAuth : false, error : true})

        req.token = token ;
        req.user = user;
        next(); //미들웨어에서 계속 진행할 수 있도록.
    })
    //유저가 있으면 인증ok
    //유저가 없으면 인증no
}

module.exports = {auth};