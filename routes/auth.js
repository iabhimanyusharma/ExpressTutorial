const express = require('express');
const router = express.Router();




router.post('/', (req, res)=>{
    const {name} = req.body
  
    if (name){
      console.log(name);
      res.status(200).send(`Welcome ${name}`);
    }
    else {
      res.status(401).send('Please provide credemtials')
    }
  })

  module.exports = router;