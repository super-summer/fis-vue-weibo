
var Vue = require('lib/vue.js');

module.exports = Vue.extend({
	template:__inline('message.html'),
	data:function(){
		return {
			msgList:[]
		};
	},
	compiled:function(){
		app.loaded = true;
	}
});