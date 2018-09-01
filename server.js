const express = require('express');
const app = express();

app.use(express.static(__dirname + '/public'));

app.set('view engine', 'pug');
app.set('views', __dirname + '/views');

app.get('/', (req, res) => res.render('index'));

app.set('port', (process.env.PORT ||3000));
app.listen(app.get('port'), () => 
    console.log(`Server is running on port ${app.get('port')}`));
