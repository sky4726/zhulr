var rule = {
    title:'美剧天堂',
    host:'https://wap.meijutt.tv',
    //url:'/fypage_fyclass------.html',
    url:'/file/listfyclass_(fypage+1).html',
    searchable:2,//是否启用全局搜索,
    quickSearch:1,//是否启用快速搜索,
    headers:{
        'User-Agent': 'MOBILE_UA',
        'Content-Type':'text/html; charset=gbk'
    },
    timeout:5000,//网站的全局请求超时,默认是3000毫秒
    //class_parse:'.guide-footer;a&&Text;a&&href;.*/(.*?).html',
    class_name:'魔幻科幻&灵异惊悚&都市情感&犯罪历史&选秀综艺&动漫卡通',
    class_url:'1&2&3&4&5&6',
    play_parse:true,
	lazy:'',
    limit:6,
    推荐:'*',
    一级:'.book-li;.book-title&&Text;.listimg&&img&&src;.book-cell&&em&&Text;a&&href',
    二级:{
        'title':'.pic&&img&&title,
        'img':'.pic&&img&&src',
        'desc':'.jianjie&&ul&&li:eq(1)&&Text;.jianjie&&ul&&li:eq(2)&&Text;.jianjie&&ul&&li:eq(4)&&Text;.jianjie&&ul&&li:eq(5)&&Text',
        'content':'.jianjie&&ul&&span',
        'tabs':'.arconix-toggle-title&&span',
        'lists':'.arconix-toggle-content&&li:eq(#id) li'
    },
    searchUrl:'/index.php/ajax/suggest?mid=fypage&wd=**',
    搜索:'json:list;name;pic;;id',
}