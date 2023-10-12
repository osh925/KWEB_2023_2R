const express = require('express');
const app = express();
const port = 3000;

function factorial(n, total = 1) {
    if(!n) return total;
    return factorial (n-1, n*total);
}

app.get('/factorial', (req, res) => {
    const { number } = req.query;
    return res.redirect(`/factorial/${number}`);
});

app.get('/factorial/:number', (req, res) => {
    const { number } = req.params;
    const parsedNumber = parseInt(number, 10);
    let result = factorial(parsedNumber);
    return res.send(`${parsedNumber}! = ${result}`);
});

app.listen(port, () => console.log(`Server listening on port ${port}!`));