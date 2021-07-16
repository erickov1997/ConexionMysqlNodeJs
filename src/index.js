const express = require('express');
const morgan = require('morgan');

const app= express();
const router = express.Router();


app.set('port', process.env.PORT || 3006);

app.use(express.json());
app.use(morgan('dev'));

app.use(require('./routes/links'));

const server = app.listen(app.get('port'),()=>{
    console.log('servidor en el puerto: ',app.get('port'));
});

