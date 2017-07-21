/**
 * Created by Administrator on 2017/7/21.
 */
// import request from 'request';
var request = require('request'),
  fs = require('fs');
var cheerio = require('cheerio')

request('https://m.mafengwo.cn/', function (error, response) {
  console.log('error:', error); // Print the error if one occurred
  console.log('statusCode:', response && response.statusCode); // Print the response status code if a response was received
  // console.log('body:', body); // Print the HTML for the Google homepage.

  var $ = cheerio.load(response.body.toString());

  var classList = [];
  $(".bd a").each(function () {
    var $me = $(this);

    var item ={
      name: $me.find("div[class='title']").text(),
      url: $me.attr('href')
    }
    classList.push(item)

  })
  console.log(classList)

  // var a = $("div .tn-list")

});

// request('http://slinglove.top/my.png').pipe(fs.createWriteStream('doodle.png'))
