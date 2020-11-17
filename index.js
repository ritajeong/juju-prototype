const express = require('express')
const app = express()
const port = 5000

const mongose = require('mongoose')
mongose.connect('mongodb+srv://jinju:dbjinju@cluster0.0tqfh.mongodb.net/<dbname>?retryWrites=true&w=majority',{
    userNewUrlParser : true, useUnifiedTopology : true, useCreateIndex : true, seFindAndModify : false
}).then(()=>console.log('MongoDB connected...'))
.catch(err=> console.log(err))


app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`)
})

