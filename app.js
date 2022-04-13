const express = require('express');
const app = express();

// req => middleware => res

app.listen(5000, ()=>{
    console.log('Server is listening on server 5000.');
})