const express = require('express')
const app = express()
const port = 3000

app.get('/', (req, res) => {
  res.send('Hello World!')
})

app.get('/helio',(req,res)=>{
    console.log(req);
    console.log('--------------------');
    console.log(res)
    res.send('<h1>helio</h1>');
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})