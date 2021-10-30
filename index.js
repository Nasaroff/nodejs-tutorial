const express = require('express');
const app = express();
const port = 3000;

app.use(express.urlencoded({ extended: true }));
app.use(express.json())

app.get('/', (req, res) => {
    res.send('Hello, World!');
});


app.get('/add', (req, res) => {
    res.send('Hello, Javohir!');
});


// TODO REST API METHODS
// GET POST PUT DELETE

// +

app.post('/add', (req, res) => {
    const number1 = parseInt(req.body.number1);
    const number2 = parseInt(req.body.number2);
    const result = number1 + number2;
    res.send(`Result: ${number1}  +  ${number2} = ${result}`);
});

// *

app.post('/mult',(req, res) => {

    res.send();

});

// / -  => if(number2 === 0 ){ mana shu amalga oshsin } else{ aks holda mana shu amalga oshsin}

// -


/**
 * header {
 *  Metadata
 * }
 * body {
 *  Variable Object
 * }
 */

app.listen(port, () => {
    console.log(`Example App listenning at http://localhost:${port}`);
});