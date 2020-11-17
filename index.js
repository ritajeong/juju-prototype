const express = require('express')
const app = express()
const port = 5000
const bodyParser = require('body-parser');
const { User } = require("./models/User");

//application/x-www-form-urlencoded
app.use(bodyParser.urlencoded({extended:true}));

//application/json
app.use(bodyParser.json());

const mongose = require('mongoose')
mongose.connect('mongodb+srv://jinju:dbjinju@cluster0.0tqfh.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    userNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, seFindAndModify : false
}).then(()=>console.log('MongoDB connected...'))
.catch(err=> console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
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

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

