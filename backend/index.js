const express = require('express')
const path= require('path')
const fs= require('fs')

const app = express();
app.listen(3000,()=>{
    console.log("listening")
})


// middleware to render the static html css and js file
app.use(express.static(path.join(__dirname,"..", 'frontend')));

app.get('/', (req, res) => {
    res.sendFile(path.join(__dirname, 'frontend', 'index.html'));
  });
