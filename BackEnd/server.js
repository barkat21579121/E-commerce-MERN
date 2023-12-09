const express = require('express');
const { default: data } = require('./data');



const app = express();

app.get('/api/products', (req, res) => {
    res.send(data.products)
})
const port = process.env.PORT || 5000;
app.listen(port, () => {
    console.log(`server is responding on ${port}`)
})