const express = require('express');
const path = require('path'); // used to require the absolute path of the file in demand

const app = express(); // app here now is an object with various properties of express

app.use(express.static('./public'))
// app.use is the property used as an middleware
//public folder consists of all the static pages like styles and javascript

app.get('/', (req, res)=>{
  res.status(200).sendFile(path.resolve(__dirname,'./navbar-app/index.html'))
}) // path.resolve tells the absolute path of the file, // we could aslo use path.join here

app.all('*', (req, res)=>{
  res.status(404).send('Resource Not Found')
})

app.listen(5000, ()=>{
console.log('Server is listening on port 5000')}); // app.listen is one of the properties of object of express




