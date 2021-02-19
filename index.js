//below code helps to create a server using express
//if u want to serve a static website(i.e present in public folder) on it just uncomment the below code 
const express = require('express');
//const path = require('path');
const app = express();

app.use(express.json());
// const staticPath = path.join(__dirname,'/public');
// app.use(express.static(staticPath));

app.get('/',(req,res) => {
    res.send('Hello world !');
});

app.get('/api/about',(req,res) => {
    res.send("Hi from about..!");
});


const port = process.env.PORT || 3000;
app.listen(port, () => {
    console.log(`listening on port ${port}...`);
});