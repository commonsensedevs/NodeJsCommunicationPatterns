//Setup express
const express = require('express');
const app = express();
const port = 3000;

const bookRouter = require('./src/bookRouter');
//Setup api get route

app.use('/api', bookRouter);

//listen on port 3000
app.listen(port, () => {
    console.log("Example app listening at http://localhost:${port}");
});