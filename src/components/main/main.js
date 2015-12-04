//boot up the vue instance and wire up the rooter

var Vue = require('lib/vue.js');
var Router = require('lib/director.js').Router;
var footer = require('footer/footer.js');
var top = require('top/top.js');
var modal = require('modal/modal.js');
var home = require('src/home/home.js');

window.app = new Vue({
	el:'#app',
	data:{
		'currentView':'home',
		'loaded':false,
		'cate':"all",
		'wb_id':''
	},
	components:{
		'home':home,
		'list':require('src/list/list.js'),
		'comment':require('src/list/comment.js'),
		'message':require('src/message/message.js'),
		'discover':require('src/discover/discover.js'),
		'user':require('src/user/user.js'),
		'notfound':require('src/error/notfound.js')
	}
});

var home = function(){
	app.currentView = 'home';
	console.log("这是首页");
 },
 list = function(cate){
	app.cate =  cate;
	app.currentView = 'list';
 },
 comment = function(id){
 	app.wb_id = id;
	app.currentView = 'comment';
 },
 message = function(){
	app.currentView = 'message';
 },
 discover = function(){
	app.currentView = 'discover';
 },
 user = function(){
	app.currentView = 'user';
 };


var routes = {
	'/home':home,
	'/list/:cate':list,
	'/p/:id':comment,
	'/message':message,
	'/discover':discover,
	'/user':user,
};

var router = new Router(routes);


router.on('/notfound', function(){
	app.currentView = 'notfound';
});

router.configure({
	notfound:function(){
		console.log("40404");
		app.currentView = 'notfound';
	}
});

router.init('list/all');







