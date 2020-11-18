const { User } = require("../models/User");


let auth = (req, res, next) =>{
    //인증처리를 하는 곳

    //클라이언트 쿠키에서 토큰을 가져온다.
    let token = req.cookies.x_auth;

    //토큰을 복호화한후 유저를 찾음
    User.findByToken(token, (err, user)=>{
        console.log("findByToken진입")
        if(err) throw err;
        if(!user) return res.json({isAuth: false, error: true})
        req.token = token
        req.user = user
        console.log("next후")
        next()
        console.log("next후")
    })
    
    //유저가 있으면 인증 ok
    //유저가 없으면 인증 no
}

module.exports = { auth };
