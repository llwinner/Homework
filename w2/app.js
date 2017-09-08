const Koa = require('koa');
const app = new Koa();
const router = require('koa-simple-router');
const path = require('path');
// const convert = require('koa-convert');
const serve = require('koa-static');
const render = require('koa-swig');
const co = require('co');

var mysql = require('mysql');
var connection = mysql.createConnection({
    connectionLimit : 20,
    host: 'localhost',
    user: 'root',
    password: '',
    database: 'test'
});

app.context.render = co.wrap(render({
    root: path.join(__dirname, 'views'),
    autoescape: true,
    cache: 'memory', // disable, set to false 
    ext: 'html',
    writeBody: false
}));

app.use(router(_ => {
    _.get('/', (ctx, next) => {
        ctx.body = 'hello'
    })
    _.get('/index/index', async (ctx, next) => {
        ctx.body = await ctx.render('index.html');
    })
    _.post('/mysql', (ctx, next) => {
        ctx.body = 'success';
        //connection.connect();
        connection.query('UPDATE `yd` SET `click_count` = `click_count` + 1 WHERE id = 1', [], function (error, results, fields) {
            if (error) {

            }
        });
        //connection.end();
    })
}));

// app.use(serve(path.join(__dirname + '/public')));
app.use(serve(__dirname + '/public'));
app.listen(3000, () => {
    console.log('server started');
});