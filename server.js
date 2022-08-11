var express = require('express');
var app = express();
app.use(express.json());
let url = "/";

app.get(url, (req, res) =>{
    res.send("Welcome to Express server");
})

app.listen(process.env.PORT, ()=>console.log('express server running'));