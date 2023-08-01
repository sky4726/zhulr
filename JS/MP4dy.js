{
    "规则名": "MP4电影",
    "规则作者": "香雅情",
    "请求头参数": "手机",
    "网页编码格式": "UTF-8",
    "图片是否需要代理": "0",
    "是否开启获取首页数据": "1",
    "首页推荐链接": "https://m.mp4us.com/custom/update.html",
    "首页列表数组规则": "body&&.list-group",
    "首页片单列表数组规则": "li",
    "首页片单是否Jsoup写法": "0",
    "首页片单标题": "《&&》",
    "首页片单链接": "href=\"&&\"",
    "首页片单图片": "",
    "首页片单副标题": "title=\"&&《",
    "首页片单链接加前缀": "https://m.mp4us.com",
    "首页片单链接加后缀": "",
    "分类起始页码": "1",
    "分类链接": "https://m.mp4us.com/list/{cateId}-{catePg}.html",
    "分类名称": "电影&电视剧&动画片",
    "分类名称替换词": "1&10&9",
    "筛选数据": "ext",
    "筛选子分类名称": "动作&科幻&爱情&喜剧&恐怖&战争&剧情&纪录",
    "筛选子分类替换词": "1&2&3&4&5&6&7&8",
    "分类截取模式": "1",
    "分类列表数组规则": "#list_all&&ul&&li",
    "分类片单是否Jsoup写法": "0",
    "分类片单标题": "alt=\"《&&》",
    "分类片单链接": "href=\"&&\"",
    "分类片单图片": "data-original=\"&&\"",
    "分类片单副标题": "badge\">&&</span>",
    "分类片单链接加前缀": "https://m.mp4us.com",
    "分类片单链接加后缀": "",
    "搜索请求头参数": "User-Agent$手机",
    "搜索链接": "https://m.mp4us.com/search/;post",
    "POST请求数据": "wd={wd}&nobot=1",
    "搜索截取模式": "1",
    "搜索列表数组规则": "#list_all&&ul&&li",
    "搜索片单是否Jsoup写法": "0",
    "搜索片单图片": "data-original=\"&&\"",
    "搜索片单标题": "alt=\"《&&》",
    "搜索片单链接": "href=\"&&\"",
    "搜索片单副标题": "rate badge\">&&</span>",
    "搜索片单链接加前缀": "https://m.mp4us.com",
    "搜索片单链接加后缀": "",
    "链接是否直接播放": "0",
    "直接播放链接加前缀": "",
    "直接播放链接加后缀": "",
    "直接播放直链视频请求头": "",
    "详情是否Jsoup写法": "0",
    "类型详情": "类型：</em>&&</a>",
    "年代详情": "年份：</em>&&</span>",
    "地区详情": "地区：</em>&&</p>",
    "演员详情": "主演：</em>&&</p>",
    "简介详情": "剧情介绍</h2>&&</p>",
    "线路列表数组规则": "body&&[id^=down]&&h2",
    "线路标题": "Text",
    "播放列表数组规则": '.down-list&&a[href^="magnet:"]',
    "选集列表数组规则": "a",
    "选集标题链接是否Jsoup写法": "1",
    "选集标题": "title",
    "选集链接": "a&&href",
    "是否反转选集序列": "1",
    "选集链接加前缀": "",
    "选集链接加后缀": "",
    "分析MacPlayer": "0",
    "是否开启手动嗅探": "0",
    "手动嗅探视频链接关键词": ".mp4#.m3u8#.flv",
    "手动嗅探视频链接过滤词": ".html#=http"
}