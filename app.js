var express = require('express')
var bodyParser = require('body-parser')
var mongoose = require('mongoose')
var cors = require('cors')
var app = express()
var api = require('./routes/routes')
var auth = require('./routes/auth')
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));
app.use(cors())

mongoose.connect('mongodb://localhost:27017/auth_test',{
   useNewUrlParser: true 
})

app.use('/api', api)
app.use('/auth', auth)

app.use(function(req, res, next){
    res.status(404).send('not found');
})

const port = process.env.PORT || 8001
app.listen(port, () => {
    console.log(`Server started on port`);
});

