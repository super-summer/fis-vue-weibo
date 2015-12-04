//fis3的配置文件
fis.hook('module',{
	mode:'mod'
});  //npm install -g fis3-hook-module

//src 下面所有的js资源都是组件化资源
fis.match("src/**",{
	isMod: true,
	release:'/build/$0'
});
//js库文件mod
fis.match("/lib/*.js",{
	isMod:true,
	useMap:true,
	release:'/build/$0'
});


//组件资源支持id简写
fis.match(/^\/src\/components\/(.*)$/i,{
	id:'$1'
});
//sass的编译
fis.match('**/*.scss',{
	rExt:'css',  //from sass to css
	parser:fis.plugin('sass',{
		//fis-parser-sass option
	})
});
//图片地址不加hash
// fis.match(/build\/images\/.*\.(jpeg|jpg|png)$/,{
// 	userHash:false
// });

fis.match('::packager',{
	//npm install -g fis3-postpackager-loader
	postpackager: fis.plugin('loader',{
		resourceType:'mod',
		userInlineMap:true //资源映射表内嵌
	}),
	packager:fis.plugin('map'),
	spriter:fis.plugin('csssprites',{
		layout:'matrix',
		margin:'15'
	})
}).match('**/*.{css,scss}',{
	packTo:'/build/pkg/all.css' //所有的css 打成一个包
});

//生产环境下css js 压缩合并
//使用方法：fis3 realese prod
fis.media('prod')
	.match('**.js',{
		optimizer:fis.plugin('uglify-js')
	})
	.match('libs/*.js',{
		packTo:'/build/pkg/common.js'
	})
	.match('src/**/*.js',{
		packTo:'/build/pkg/app.js'
	})
	.match('**.css',{
		optimizer:fis.plugin('clean-css')
	});













