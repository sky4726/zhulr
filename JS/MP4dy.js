var rule = {
    title:'MP4电影网',
    host:'https://m.mp4us.com',
    url:'/list/fyclass-fypage.html',
    //url:'/file/listfyclass_(fypage+1).html',
    searchable:2,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    headers:{
        'User-Agent': 'MOBILE_UA',
    },
    timeout:5000,//网站的全局请求超时,默认是3000毫秒
    class_name:'动漫&剧集&记录',
    class_url:'9&10&8',
    play_parse:true,
	lazy:'',
    limit:6,
    推荐:'*',
    一级:'#list_all&&li;.img&&alt=\'《&&》;.img&&data-original;badge\">&&</span>;a&&href',
    二级:{
        'title':'.pic&&img&&title',
        'img':'.pic&&img&&src',
        'desc':'.jianjie&&ul&&li:eq(4)&&Text',
        'content':'.jianjie&&ul&&span&&Text',
        'tabs':'#playtab&&.cili',
        'lists':'#playtab&&a[href^="magnet:"]'
    },
    searchUrl:'/index.php/ajax/suggest?mid=fypage&wd=**',
    搜索:'json:list;name;pic;;id',
}
