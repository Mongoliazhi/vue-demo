/**
 * Created by Administrator on 2017/7/21.
 */
var request = require('request');

var mysql = require('mysql');

var pool = mysql.createPool({
  host: '139.224.233.15',
  user: 'dashuaibi',
  password: 'qwer123',
  port: '3306',
  database: 'vue_demo',
});

function query(sql, callback) {
  pool.getConnection(function (err, connection) {
    // Use the connection
    connection.query(sql, function (err, rows) {
      callback(err, rows);
      connection.release();//释放链接
    });
  });
}
// var aa = query("select vue_title from vue_wen", function (err, rows) {
//   if (err) {
//     console.log(err);
//   } else {
//     console.log(rows);
//   }
// })

exports.query = query;
