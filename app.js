const express = require('express');
const app = express();
const {products} = require('./data')

app.get('/', (req,res)=>{
    res.send(`<h1>Home page</h1><a href ="/api/products">Products</a>`);
})
app.get('/api/products', (req, res)=>{
    const newProducts = products.map((product)=>{
      const  {id, name, image } = product
      return {id, name, image}
    })
    res.json(newProducts)
})
app.get('/api/products/:productId', (req, res)=>{
    // console.log(req);
    // console.log(req.params);

    const {productId} = req.params // req/params give you the id from the route we set above

    
    
    const singleProduct = products.find((product)=>product.id === Number(productId))
    
    res.json(singleProduct)
})

app.listen(5000, ()=>{
    console.log('Server is listening on server 5000.');
})