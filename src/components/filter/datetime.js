
var Vue = require("lib/vue.js");

Vue.filter('datetime', function (date) {
    var now = +new Date;
    var text='';
    var distance = now - date;
    if(distance <= 3600*1000){
        text = Math.round((now - date)/60000)+ "分钟前";
    }else if(distance <= 86400*1000 ){
        text = Math.round((now - date)/3600000)+ "小时前";
    }else if(distance < 86400000*30){
        text = Math.round((now - date)/86400000)+ "天前";
    }else if(distance < 86400000*30*12){
        text = Math.round((now - date)/86400000/30)+ "个月前";
    }else{
        text = "一年以前";
    }
    return text;
})