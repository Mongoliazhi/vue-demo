/**
 * Created by Administrator on 2017/7/21.
 */
// import request from 'request';
var request = require('request'),
  fs = require('fs');
var cheerio = require('cheerio');
var mysql = require('./mysql')

request('https://m.mafengwo.cn/', function (error, response) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  var $ = cheerio.load(response.body.toString());

  var classList = [];
  $(".bd a").each(function () {
    var $me = $(this);

    var item ={
      name: iGetInnerText($me.find("div[class='title']").text()),
      url: $me.attr('href'),
      imgUrl:$me.find("dl[class='clearfix']").find("img").attr("src"),
      imgContent:$me.find("dl[class='clearfix']").find("div[class='summary']").text(),
      imgFabulous:iGetInnerText($me.find("dl[class='clearfix']").find("div[class='extra']").text())
    }
    classList.push(item)

  })
  console.log(classList)

  for(var i=0;i<classList.length;i++){

    mysql.query("INSERT INTO vue_wen (vue_title, vue_url, vue_Imgurl,vue_content,vue_Fabulous) VALUES ('" + classList[i].name + "','" + classList[i].url + "','" + classList[i].imgUrl + "','" + classList[i].imgContent + "','" + classList[i].imgFabulous +  "')",function (err,rows) {
      if(err){
        console.log(err);
      }else{
        console.log(rows);
      }
    })
  }

});

function iGetInnerText(testStr) {
  var resultStr;
  resultStr = testStr.replace(/[ ]/g, "");    //去掉空格
  resultStr = resultStr.replace(/\ +/g, ""); //去掉空格
  resultStr = resultStr.replace(/[\r\n]/g, ""); //去掉回车换行

  return resultStr;
}
// request('http://slinglove.top/my.png').pipe(fs.createWriteStream('doodle.png'))
