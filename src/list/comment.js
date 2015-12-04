
var Vue = require('lib/vue.js');
var $ = require('lib/jquery.min.js');
var datetime = require('filter/datetime.js');

module.exports = Vue.extend({
	template:__inline('comment.html'),
	data:function(){
		return {
			card:[],
            commentList:[]
		};
	},
    compiled:function(){
        this.getCardDetail(this.$parent.wb_id);
        app.loaded = true;
    },
    methods:{
    	getCardDetail:function(id){
    		var self = this;
    		$.ajax({
    			url:"build/src/data.json",
    			type:"GET",
    			dataType:"JSON",
    			success:function(cards){
    				console.log("返回了card ：",id,cards);
                    for(var i=0;i<cards.length;i++){
                        if(cards[i].wb_id==id){                            
                            self.$data.card = cards[i];
                            self.$data.commentList = cards[i].comments;
                            console.log(self.$data.card );
                            break;
                        }
                    }
    			},
    			error:function(){
    				console.log("调数据错了");
    			}
    		});
    	}
    }
});