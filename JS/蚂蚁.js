muban.mxpro.二级.desc = '.module-info-item:(3)&&Text;;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text';
muban.mxpro.二级.img = '.lazyload&&data-src';
var rule = {
	title:'蚂蚁',
	模板:'mxpro',
	host:'https://www.mayi4k.com',
	url:'/vodshow/fyclass--------fypage---.html',
	filterable:0,//是否启用分类筛选,
	headers:{
		'User-Agent': 'MOBILE_UA'
	},
	timeout:5000,
	class_name:'蓝光圆盘&4K电影&剧集&演唱会',
	class_url:'266&269&247&246',
	一级:'.module-item-pic;a&&title;.lazyloaded&&data-src;.module-item-caption&&span:eq(0);a&&href',
	推荐:'.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
	searchUrl:'/index.php/ajax/suggest?mid=fypage&wd=**',
	搜索:'json:list;name;pic;;id',
}