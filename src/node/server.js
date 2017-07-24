var express = require('express');
var app = express();
var dp = require("./mysql");


//支持跨域请求
app.all('*', function(req, res, next) {
  res.header("Access-Control-Allow-Origin", "*");
  res.header("Access-Control-Allow-Headers", "Content-Type, Content-Length, Authorization, Accept, X-Requested-With , yourHeaderFeild");
  res.header("Access-Control-Allow-Methods","PUT,POST,GET,DELETE,OPTIONS");
  res.header("X-Powered-By",' 3.2.1')
  res.header("Content-Type", "application/json;charset=utf-8");
  next();
});

app.get('/demo', function(req, res){
  res.statusCode = 200;
  // res.header("Content-Type", "application/json;charset=utf-8");

  dp.query("select vue_title,vue_url,vue_Imgurl,vue_content,vue_Fabulous,vue_Time from vue_wen", function (err, rows) {
    if (err) {
      console.log(err);
    } else {
      console.log(rows)
      // res.send((JSON.stringify(rows)));
      res.json(JSON.stringify(rows))
    }
  })

});
app.listen(3000);


// 简单的服务 http模块，则无法使用send方法，其中callback是回调函数的函数名。

// const http = require('http');
// const dp = require("./mysql")
//
// const hostname = '127.0.0.1';
// const port = 3000;
//
// const server = http.createServer((req, res) => {
//   res.statusCode = 200;
//   res.setHeader('Content-Type', 'text/html;charset=utf-8');
//
//   dp.query("select vue_title from vue_wen", function (err, rows) {
//     if (err) {
//       console.log(err);
//     } else {
//       console.log(rows)
//       res.end((JSON.stringify(rows)));
//     }
//   })
// });
//
// server.listen(port, hostname, () => {
//   console.log(`服务器运行在 http://${hostname}:${port}/`);
// });
