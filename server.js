const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res, next) => {
    res.send('hello world!');
});

app.listen(process.env.PORT || port, () => {
    console.log(`Server is running at ${port}`);
});