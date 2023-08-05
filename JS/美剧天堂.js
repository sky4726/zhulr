var rule = {
    title:'美剧天堂',
    host:'https://wap.meijutt.tv',
    url:'/fypage_fyclass______.html',
    //url:'/file/listfyclass_(fypage+1).html',
    searchable:2,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    headers:{
        'User-Agent': 'MOBILE_UA',
        'Content-Type':'text/html; charset=gbk'
    },
    timeout:5000,//网站的全局请求超时,默认是3000毫秒
    class_name:'魔幻科幻&灵异惊悚&都市情感&犯罪历史&选秀综艺&动漫卡通',
    class_url:'1&2&3&4&5&6',
    play_parse:true,
	lazy:'',
    limit:6,
    推荐:'*',
    一级:'.book-li;.book-title&&Text;.listimg&&img&&src;.book-cell&&em&&Text;a&&href',
    二级:{
        'title':'.pic&&img&&title',
        'img':'.pic&&img&&src',
        'desc':'.jianjie&&ul&&li:eq(4)&&Text',
        'content':'.jianjie&&ul&&span&&Text',
        //'tabs':'#&&.cili',
        tabs:'js:TABS = ["磁力播放"]',
		lists:`js:
		log(TABS);
		pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
		LISTS = [];
		var dd=[];
		TABS.forEach(function(tab) {
			if (/磁力播放/.test(tab)) {
				var d = pdfa(html, '#playtab&&a[href^="magnet:"]');
				d = d.map(function(it) {
					var title = pdfh(it, 'Text');
					log('title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
					var burl = pd(it, 'href');
					log('burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
					return title + '$' + burl
				});
				LISTS.push(d)
			} else if (/在线预览/.test(tab)) {
				var d = pd(html, '.pic&&img&&src');
				if (d) {
					d=['第一集在线播放预览$' + d]
				} else {
					d=['没有预览不要点$']
				}
				LISTS.push(d)
			}
		});
		`,
    },
    searchUrl:'/index.php/ajax/suggest?mid=fypage&wd=**',
    搜索:'json:list;name;pic;;id',
}
