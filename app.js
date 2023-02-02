const { response } = require('express')
const express = require('express')
const app = express()

app.get('/',(request, response)=>{
    response.send("Hello from Pranav. First GET request to my web app")
})

app.get('/contact',(request, response)=>{
    response.send("This is the contact info for my web app")
})

const port = process.env.port || 3000;
app.listen(port, ()=> console.log('Listening on port 3000'))