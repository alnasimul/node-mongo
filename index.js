const express = require('express');

const app = express();

app.get('/',(req,res) => {
    res.send('I know how to open node....YAY');
})

app.get('/fruits/banana', (req,res) => {
    res.send({
        name:"Banana",
        quantity:1000,
        price:10000

    })
})

const users = ['Sadaf','Orni','Rafa','Karim','Susmita','Nayem'];

app.get('/users/:id', (req,res) => {
    const id = req.params.id;
    const name = users[id];

    res.send({name,id});
})

app.listen(3000,() => console.log('Listening to port 3000'));