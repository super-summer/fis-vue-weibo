

var Vue = require("lib/vue.js");

module.exports = Vue.component("c-top", {
    className: 'top',
    template: __inline('./top.html'),
    props:['cate'],
    data:function(){
    	return {
    		username:"village_flower",
            dropDown:false
    	}
    },
    methods:{

    }

});