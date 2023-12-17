var rule = {
	title:'BT部落',
	host:'https://www.btbuluo.net',
	url: '/fyclass/',
	/*
	filter_url:'-{{fl.class or "0"}}-{{fl.area or "0"}}',
	filter:{
		"1":[{"key":"class","name":"类型","value":[{"n":"全部","v":"0"},{"n":"剧情","v":"1"},{"n":"喜剧","v":"2"},{"n":"惊悚","v":"3"},{"n":"动作","v":"4"},{"n":"爱情","v":"5"},{"n":"犯罪","v":"6"},{"n":"恐怖","v":"7"},{"n":"冒险","v":"8"},{"n":"悬疑","v":"9"},{"n":"科幻","v":"10"},{"n":"家庭","v":"11"},{"n":"奇幻","v":"12"},{"n":"动画","v":"13"},{"n":"战争","v":"14"},{"n":"历史","v":"15"},{"n":"传记","v":"16"},{"n":"运动","v":"19"},{"n":"西部","v":"20"},{"n":"灾难","v":"21"},{"n":"古装","v":"22"},{"n":"儿童","v":"25"},{"n":"纪录片","v":"26"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":"0"},{"n":"大陆","v":"1"},{"n":"香港","v":"2"},{"n":"台湾","v":"3"},{"n":"美国","v":"4"},{"n":"日本","v":"5"},{"n":"韩国","v":"6"},{"n":"英国","v":"7"},{"n":"法国","v":"8"},{"n":"德国","v":"9"},{"n":"印度","v":"10"},{"n":"泰国","v":"11"},{"n":"丹麦","v":"12"},{"n":"瑞典","v":"13"},{"n":"巴西","v":"14"},{"n":"加拿大","v":"15"},{"n":"俄罗斯","v":"16"},{"n":"意大利","v":"17"},{"n":"比利时","v":"18"},{"n":"爱尔兰","v":"19"},{"n":"西班牙","v":"20"},{"n":"澳大利亚","v":"21"},{"n":"波兰","v":"22"},{"n":"土耳其","v":"23"},{"n":"越南","v":"24"}]}],
		"2":[{"key":"class","name":"类型","value":[{"n":"全部","v":"0"},{"n":"剧情","v":"1"},{"n":"喜剧","v":"2"},{"n":"惊悚","v":"3"},{"n":"动作","v":"4"},{"n":"爱情","v":"5"},{"n":"犯罪","v":"6"},{"n":"恐怖","v":"7"},{"n":"冒险","v":"8"},{"n":"悬疑","v":"9"},{"n":"科幻","v":"10"},{"n":"家庭","v":"11"},{"n":"奇幻","v":"12"},{"n":"动画","v":"13"},{"n":"战争","v":"14"},{"n":"历史","v":"15"},{"n":"传记","v":"16"},{"n":"运动","v":"19"},{"n":"西部","v":"20"},{"n":"灾难","v":"21"},{"n":"古装","v":"22"},{"n":"儿童","v":"25"},{"n":"纪录片","v":"26"}]},{"key":"area","name":"地区","value":[{"n":"全部","v":"0"},{"n":"大陆","v":"1"},{"n":"香港","v":"2"},{"n":"台湾","v":"3"},{"n":"美国","v":"4"},{"n":"日本","v":"5"},{"n":"韩国","v":"6"},{"n":"英国","v":"7"},{"n":"法国","v":"8"},{"n":"德国","v":"9"},{"n":"印度","v":"10"},{"n":"泰国","v":"11"},{"n":"丹麦","v":"12"},{"n":"瑞典","v":"13"},{"n":"巴西","v":"14"},{"n":"加拿大","v":"15"},{"n":"俄罗斯","v":"16"},{"n":"意大利","v":"17"},{"n":"比利时","v":"18"},{"n":"爱尔兰","v":"19"},{"n":"西班牙","v":"20"},{"n":"澳大利亚","v":"21"},{"n":"波兰","v":"22"},{"n":"土耳其","v":"23"},{"n":"越南","v":"24"}]}]
	},*/
	searchUrl: '/s/**.html',
	searchable:1,
	quickSearch:1,
	filterable:1,
	headers:{
		'User-Agent': 'MOBILE_UA'
	},
	timeout:5000,
	class_name:'电影&剧集',
	class_url:'moive&tv',
	play_parse:true,
	lazy:'',
	limit:16,
	推荐: '*',
	一级: `js:
		pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
		var d = [];
		var html = request(input);
		var list = pdfa(html, '.b07df');
		list.forEach(it => {
			d.push({
				title: pdfh(it, 'a&&title'),
				desc: pdfh(it, '.bc0ff&&Text'),
				pic_url: pdfh(it, 'img&&src'),
				url: pd(it, 'a&&href')
			});
		})
		setResult(d);
	`,
	二级:{
		title:'.be0b h1&&Text;.be0b&&p:eq(2)&&Text',
		desc:'.b4694b&&Text',
		img:'.be0b img&&src',
		content:'.b4bdfcc19a&&Text',
		tabs:'js:TABS = ["磁力播放[观影后,记得清理缓存]"]',
		lists:'.b18e9c1a:eq(#id)&&li',
		list_text:'a&&Text',
		list_url:'a&&href',
	},
	搜索: `js:
		pdfh=jsp.pdfh;pdfa=jsp.pdfa;pd=jsp.pd;
		var d = [];
		var html = request(input);
		var list = pdfa(html, '.be0b');
		list.forEach(it => {
			d.push({
				title: pdfh(it, '.b9781dcc987&&Text'),
				pic_url: pdfh(it, '.bac7b img&&src'),
				url: pd(it, '.bac7b a&&href')
			});
		})
		setResult(d);
	`,
}