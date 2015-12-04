
var Vue = require('lib/vue.js');
var $ = require('lib/jquery.min.js');
var datetime = require('filter/datetime.js');
// var service = require('main/service.js');

module.exports = Vue.extend({
	template:__inline('list.html'),
    props: ['cate'],
	data:function(){
		return {
			cardList:[],
            cateName:'全部'
		};
	},
    created:function(){
    	this.getCardList(app.cate);
        this.showCateName();
        app.loaded = true;
    },
    watch:{
        "cate":function(){
            console.log("检测到cate变化为： "+ this.cate );
            this.showCateName();
            this.getCardList(this.cate);
        }
    },
    methods:{
    	getCardList:function(cate){
            console.log("取得" + cate +"列表");
            //此处应该根据cate 去请求接口
    		var self = this;
    		$.ajax({
    			url:"build/src/data.json",
    			type:"GET",
    			dataType:"JSON",
    			success:function(cards){
    				console.log("返回了card 列表：",cards);
    				self.$data.cardList = cards;
    			},
    			error:function(){
    				console.log("调数据错了");
    			}
    		});
    	},
        showCateName:function(){
            switch(this.cate){
                case "all":
                    this.cateName = "全部";
                    break;
                case "special":
                    this.cateName = "特别推荐";
                    break;
                case "tech":
                    this.cateName = "科技";
            }
        }
    }
});