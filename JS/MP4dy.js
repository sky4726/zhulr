{
    //规则名
    "title": "MP4DY",
    "Headers":"PC_UA",
    "Coding_format":"gb2312",
    //图片是否需要代理
    "PicNeedProxy":"0",
    //是否开启获取首页数据，0关闭，1开启
    "homeContent":"0",
    //分类链接起始页码,禁止负数和含小数点。
    "firstpage": "1",
    //分类链接,{cateId}是分类，{catePg}是页码,第一页没有页码的可以这样写 第二页链接[firstPage=第一页的链接]
    "class_url": "https://m.mp4us.com/list/{cateId}-{catePg}.html[firstPage=https://m.mp4us.com/list/{cateId}-1.html]",
    //分类名，分类1&分类2&分类3
    "class_name": "动漫&剧集&纪录片&动作片&科幻片&爱情片&喜剧片&恐怖片&战争片&剧情片",
    //分类名替换词，替换词1&替换词2&替换词3，替换词包含英文&的用两个中文＆＆代替，示例：＆＆id=0&＆＆id=1
    "class_value": "9&10&8&1&2&3&4&5&6&7",
    //筛选数据，json格式，参考xpath的筛选写法
    "filterdata":{},
    //分类页面截取数据模式，0为json，其它数字为普通网页。
    "cat_mode": "1",
    //分类列表数组定位，最多支持3层，能力有限，不是所有页面都能支持
    "cat_arr_rule": "#list_all&&ul&&li",
    //分类片单信息jsoup与xb截取写法切换，只作用于html网页，1为jsoup写法(默认)，0为xb写法
    "cat_is_jsoup":"1",
    //分类片单标题
    "cat_title": "a&&alt",
    //分类片单链接
    "cat_url": "a&&href",
    //分类片单图片，支持自定义图片链接
    "cat_pic": "img&&data-original",
    //分类片单副标题
    "cat_subtitle":"",
    //分类片单链接补前缀  
    "cat_prefix": "https://m.mp4us.com",
    //分类片单链接补后缀
    "cat_suffix": "",
    
    //搜索请求头参数,不填则默认okhttp/3.12.11，可填MOBILE_UA或PC_UA使用内置的手机版或电脑版UA
    //多个请求头参数写法示例，键名$键值，每一组用#分开。"User-Agent$PC_UA#Referer$http://ww.baidu.com#Cookie$ser=ok"。
    "SHeaders":"User-Agent$PC_UA#Content-Type$charset=gb2312",
    //搜索链接，搜索关键字用{wd}表示，post请求的最后面加;post
    //POST链接示例 http://www.lezhutv.com/index.php?m=vod-search;post
    "search_url": "https://m.mp4us.com/search/;post",
    //POST搜索body，填写搜索关键字的键值，一般常见的是searchword和wd，不是POST搜索的可留空或删除。
    "sea_PtBody":"keyboard={wd}&submit=搜+索&show=title,smalltext&tempid=1&tbname=article",
    
    //搜索截取模式,0为json搜索，只支持列表在list数组里的，其它数字为网页截取。
    "search_mode": "1",
    //搜索列表数组定位，不填默认内置list，最多支持3层，能力有限，不是所有页面都能支持。
    "sea_arr_rule": "body&&table[width=388]",
    //搜索片单信息jsoup与xb截取写法切换，只作用于html网页，1为jsoup写法(默认)，0为xb写法
    "sea_is_jsoup":"1",
    //搜索片单图片，支持自定义图片链接
    "sea_pic": "img&&src",
    //搜索片单标题
    "sea_title": "img&&alt",
    //搜索片单链接
    "sea_url": "a&&href",
    //搜索片单副标题
    "sea_subtitle":"",
    //搜索片单链接补前缀
    "search_prefix": "https://www.dygang.tv",
    //搜索片单链接补后缀，这个一般json搜索的需要
    "search_suffix": "",
    
    //片单链接是否直接播放，0否，1分类片单链接直接播放，2详情选集链接直接播放。
    //设置成直接播放后，后面3个参数请注意该留空的请务必留空。
    "force_play": "0",
    //直接播放链接补前缀
    "play_prefix": "",
    //直接播放链接补后缀，设置为#isVideo=true#可强制识别为视频链接
    "play_suffix": "",
    //直接播放链接设置请求头，只对直链视频有效，每一组用#分开
    "play_header": "",
    
    //项目信息jsoup与xb截取写法切换，1为jsoup写法(默认)，0为xb写法
    "proj_is_jsoup":"0",
    //类型数据，截取前缀&&截取后缀
    "proj_cate": "",
    //年代数据，截取前缀&&截取后缀
    "proj_year": "",
    //地区数据，截取前缀&&截取后缀
    "proj_area": "",
    //演员数据，截取前缀&&截取后缀
    "proj_actor": "演　　员&&</",
    //简介内容，截取前缀&&截取后缀
    "proj_plot": "简　　介&&</",
    
    //线路截取区域，如果不需要请把tab_title或tab_arr_rule置空或者全部不要填。
    //线路截取数组
    "tab_arr_rule": "#dede_content",
    //线路标题，截取前缀&&截取后缀
    "tab_title": "strong&&Text",
    
    //列表数组截取，必须
    "list_arr_rule": "#dede_content",
    //集数数组截取，必须
    "epi_arr_rule": "table&&[href*=magnet]",
    //集数标题，截取前缀&&截取后缀
    "epi_title": "a&&Text",
    //集数链接，截取前缀&&截取后缀
    "epi_url": "a&&href",
    //选集是否反转显示
    "epi_reverse": "0",
    //集数链接补前缀
    "epiurl_prefix": "",
    //集数链接补后缀
    "epiurl_suffix": "",
    
    //下面几个参数请勿乱用。否则可能会有副作用。
    //分析网页源码中有<script type="text/javascript">var player_aaaa={"flag":"play","encrypt这种源码的链接解析
    //如果网页源码里没有这种请设置为0
    "Anal_MacPlayer":"0",
    //是否开启手动嗅探，只对网页嗅探有效，0否，1是
    "ManualSniffer":"0",
    //手动嗅探视频链接关键字，每个用#隔开
    "VideoFormat":".mp4#.m3u8#.flv",
    //手动嗅探视频链接过滤关键词,每个用#隔开
    "VideoFilter":".html#=http"
}>
