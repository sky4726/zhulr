muban.mxpro.二级.desc = '.module-info-content:(4)&&Text;;;.module-info-item-content:eq(2)&&Text;.module-info-item-content:eq(0)&&Text';
muban.mxpro.二级.img = '.lazyload&&src';
var rule = {
	title:'蓝蓝影视',
	模板:'mxpro',
	host:'https://lgysw.cn',
	url:'/vodtype/fyclass/',
	searchable: 2,//是否启用全局搜索,
    quickSearch: 1,//是否启用快速搜索,
    filterable: 0,//是否启用分类筛选,
    headers: {
      'User-Agent': 'MOBILE_UA'
     },
	class_name:'电影&电视剧&综艺&动漫',
    class_url:'1&2&3&4',
	class_parse:'li.swiper-slide.navbar-item;span&&Text;a&&href;/(\\d+).html',
	cate_exclude:'福利',
	一级:'a.module-poster-item.module-item;a&&title;.lazyload&&data-original;.module-item-note&&Text;a&&href',
	推荐:'.tab-list.active;a.module-poster-item.module-item;.module-poster-item-title&&Text;.lazyload&&data-original;.module-item-note&&Text;a&&href',
	searchUrl:'/vodsearch/-------------/?wd=**',
	detailUrl:'/voddetail/fyid.html', //非必填,二级详情拼接链接
}