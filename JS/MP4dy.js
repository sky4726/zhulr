var rule = {
	title:'MP4dy',
	host:'https://m.mp4us.com',
	// url: '/fyclass/index_(fypage-1).html',
	url: '/list/fyclass-fypage.html',
	searchUrl: '/search/;post?wd={wd}&nobot=1',
	searchable:2,
	quickSearch:1,
	headers:{
		'User-Agent': 'MOBILE_UA'
	},
	timeout:5000,
	class_name:'剧集&动漫&记录片',
	class_url:'10&9&8',
	play_parse:true,
	lazy:'',
	limit:6,
	推荐: `js:
		pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
		var d = [];
		var html = request(input);
		var list = pdfa(html, '#list_all&&ul&&li');
		list.forEach(it => {
			d.push({
				title: pdfh(it, 'alt=\'《&&》'),
				desc: pdfh(it, 'rate badge\'>&&</span>'),
				pic_url: pd(it, 'data-original=\'&&\''),
				url: pd(it, 'href=\'&&\'')
			});
		})
		setResult(d);
	`,
	一级: `js:
		pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
		var d = [];
		if (MY_CATE !== '1' && MY_CATE !== '2') {
			let turl = (MY_PAGE === 1)? 'index' : 'index_'+ MY_PAGE;
			input = HOST + MY_CATE + turl + '.html';
		}
		var html = request(input);
		var list = pdfa(html, '#list_all&&ul&&li');
		list.forEach(it => {
			d.push({
				title: pdfh(it, 'img&&alt=\'《&&》'),
				desc: pdfh(it, 'a&&rate badge\'>&&</span>'),
				pic_url: pd(it, 'img&&data-original=\'&&\''),
				url: pd(it, 'a&&href=\'&&\'')
			});
		})
		setResult(d);
	`,
	二级:{
		title:'h1&&Text;p.mb-2:eq(4)&&Text',
		desc:'p.mb-2:eq(1)&&Text;;;p.mb-2:eq(7)&&Text;p.mb-2:eq(5)&&Text',
		img:'.rounded-2&&src',
		content:'.mv_card_box&&Text',
		tabs:'js:TABS = ["磁力播放"]',
		lists:`js:
		log(TABS);
		pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
		LISTS = [];
		var dd=[];
		TABS.forEach(function(tab) {
			if (/磁力播放/.test(tab)) {
				var d = pdfa(html, '.mv_down&&a[href^="magnet:"]');
				d = d.map(function(it) {
					var title = pdfh(it, 'Text');
					log('title >>>>>>>>>>>>>>>>>>>>>>>>>>' + title);
					var burl = pd(it, 'href');
					log('burl >>>>>>>>>>>>>>>>>>>>>>>>>>' + burl);
					return title + '$' + burl
				});
				LISTS.push(d)
			} else if (/在线预览/.test(tab)) {
				var d = pd(html, 'iframe&&src');
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
	搜索:'.col;h2&&Text;.card-img&&style;.me-auto&&Text;a&&href',
}