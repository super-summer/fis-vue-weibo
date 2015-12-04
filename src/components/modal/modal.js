
var Vue = require('lib/vue.js');
// register modal component
module.exports = Vue.component('modal', {
	template: __inline('./modal.html'),
	props: {
	  show: {
	    type: Boolean,
	    required: true,
	    twoWay: true    
	  }
	},
	data:function(){
		return {
			showClose:true
		}
	},
	compiled:function(){
		var self = this;
	}
});