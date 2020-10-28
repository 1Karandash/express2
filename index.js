const express = require('express');
const app2 = express();
const port = 3011;

app2.get('/app2', (req,res) => {
    res.send('Hi from the second container!')
})

app2.listen(port, () => {
    console.log('This server is listening on port '+ port +'.')
})