const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');

const config = require('./config/key');

const { User } = require("./models/User");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//application/json
app.use(bodyParser.json());

const mongoose = require('mongoose')
mongoose.connect(config.mongoURI,{
    useNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, useFindAndModify : false
}).then(()=>console.log('MongoDB connected...'))
.catch(err=> console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World! ')
})

app.post('/register', (req, res) =>{
    //회원 가입시 필요한 정보를 클라이언트에서 가져오면 db에 넣음

    const user = new User(req.body)
    user.save((err, userInfo)=>{
        if(err) return res.json({ success: false, err})
        return res.status(200).json({
            success:true
        })
    })
})

app.post('/login', (req, res) =>{
  //요청된 이메일이 DB에 있는 지 확인
  User.findOne({email: req.body.email}, (err, user)=>{
    if(!user){
      return res.json({
        loginSuccess : false,
        message : "제공된 이메일에 해당하는 유저가 없습니다."
      }) 
    }
    //요청된 이메일이 DB에 있다면 비밀번호가 맞는지 확인
    user.comparePassword(req.body.password, (err, isMatch)=>{
      
    })

  })
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

