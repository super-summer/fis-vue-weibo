

var Vue = require("lib/vue.js");

module.exports = Vue.component("c-footer", {
    className: 'footer',
    props: ['currentView'],
    data:function(){
        return {            
            'showModal':false
        };
    },
    template: __inline('./footer.html'),
    methods:{
    	showWeiboBox:function(){
                		
    	}
    },
    ready: function(){
        var self = this;
    }
});