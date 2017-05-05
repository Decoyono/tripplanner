const express = require('express')
const app = express();

const morgan = require('morgan')
const bodyParser = require('body-parser')
const path = require('path')
const nunjucks = require('nunjucks')


app.set('view engine', 'html');
app.engine('html', nunjucks.render);
var env = nunjucks.configure('views', {noCache: true});

app.use(morgan('dev'));
app.use('/', express.static(path.join(__dirname, './public')));
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: false}));

//app.use(/:routes)
//app.use(/:routes)

app.get('/', function (req, res) {
    res.render('index')
});

app.use(function(req, res, next) {
  var err = new Error('Not Found');
  err.status = 404;
  next(err);
});

app.use(function(err, req, res, next) {
    res.status(err.status || 500);
    console.error(err.stack)
    res.render('error')
});

app.listen(3000, () => {
console.log('listening on port 3000')
})

module.exports = app;