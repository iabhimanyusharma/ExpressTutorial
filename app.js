const express = require('express');
const authorise = require('./authorise');
const app = express();
const logger = require('./logger')

app.use([logger, authorise])


app.get('/', logger, (req, res)=>{
  
  res.send('Home');
  
})
app.get('/about', (req, res)=>{
   res.send('About page');

})
app.get('/api/products', (req, res)=>{
   res.send('products');

})
app.get('/api/items', (req, res)=>{
   res.send('items');
   console.log(req.user);
  
})


app.listen(5000, ()=>{
  console.log('Server is listening at port 5000');
})