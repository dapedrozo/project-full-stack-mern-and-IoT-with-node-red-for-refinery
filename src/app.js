//hoja de creacion del server con express
const express = require('express');
const cors = require('cors');
const app = express();
const path = require('path');
//settings
app.set('port',process.env.PORT || 4000);

//middlewares
app.use(cors());
app.use(express.json());
app.use(express.static(path.join(__dirname,"../view")));

//
app.get('/general',(rec,res)=>{
    res.sendFile(path.join(__dirname,"../view/index.html"));
})
//router
app.use('/api-red', require('./routes/api-red'))

app.use('/api-react', require('./routes/api-react'))



module.exports= app;