
var Vue = require('lib/vue.js');
var $ = require('lib/jquery.min.js');
var datetime = require('filter/datetime.js');
// var service = require('main/service.js');

module.exports = Vue.extend({
	template:__inline('discover.html'),
	compiled:function(){
		app.loaded = true;
	}
	
});