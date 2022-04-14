var needle = require("needle");
var cheerio = require("cheerio");
var async = require("async");

var aUrl = [];
aUrl[0] = "https://vk.com/search?c%5Bgroup%5D=119490810&c%5Bsection%5D=people";
// aUrl[1] = "https://habr.com/en/all/page2/";
// aUrl[2] = "https://habr.com/en/all/page3/";

var q = async.queue(function(url){

    needle.get(url,function(err,res){
        if(err) throw(err);
        
        var $ = cheerio.load(res.body);

        console.log($(".info").text());

        img = $(".search_item_img_link img");

        img.each(function(i,val){
            console.log($(val).attr("src"));
            // console.log($(val).attr("src").replace("50x50","640x640"));
        });

    });

},10);

var i = 0;
while(aUrl.length > i)
{
    q.push(aUrl[i]);
    i++;
}

