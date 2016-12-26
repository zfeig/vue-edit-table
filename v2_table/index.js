var koa = require('koa');
var app = new koa();

// logger
app.use(function *(next){
  var start = new Date;
  yield next;
  var ms = new Date - start;
  console.log('%s %s - %s', this.method, this.url, ms);
});


// static file server
var staticServer = require('koa-static');
var path = require('path');
app.use(staticServer(path.join(__dirname,'dm')));



app.listen(1000);
console.log("listen at 1000");