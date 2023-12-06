muban.mxpro.二级.desc = '.module-info-item:(3)&&Text;;;.module-info-item-content:eq(1)&&Text;.module-info-item-content:eq(0)&&Text';
muban.mxpro.二级.img = '.lazyload&&src';
var rule = {
	title:'蓝蓝影视',
	模板:'mxpro',
	host:'https://lgysw.cn',
	url:'/vodshow/fyclassfyfilter.html',
	filterable:0,//是否启用分类筛选,
	class_parse:'li.swiper-slide.navbar-item;span&&Text;a&&href;/(\\d+).html',
	cate_exclude:'福利',
	一级:'a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
	推荐:'.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',

	// searchUrl:'/vodsearch/**----------fypage---/pjax/NO.html',
	searchUrl:'/vodsearch/-------------/?wd=**',
	detailUrl:'/voddetail/fyid.html', //非必填,二级详情拼接链接
}