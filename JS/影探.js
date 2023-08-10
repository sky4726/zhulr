{
"spider":"./jar/spider.jar",
"wallpaper":"https://api.likepoems.com/img/bing",
  "lives": [
    {
      "name": "直播",
      "type": 0,
      "url": "https://raw.iqiq.io/dxawi/0/main/tvlive.txt",
      "epg": "http://epg.51zmt.top:8000/api/diyp/?ch\u003d{name}\u0026date\u003d{date}"
    },
    {
      "group": "redirect",
      "channels": [
        {
          "name": "live",
          "urls": ["proxy://do\u003dlive\u0026type\u003dtxt\u0026ext\u003daHR0cDovL2hvbWUuanVuZGllLnRvcDo4MS9DYXQvdHYvbGl2ZS50eHQ\u003d"]}],"epg": "http://epg.51zmt.top:8000/api/diyp/"}
  ],
"rules":[{"name": "量子","hosts":["vip.lz","hd.lz"],"regex": ["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:6.433333,[\\s\\S]*?#EXT-X-DISCONTINUITY"]},
{"name": "非凡","hosts": ["vip.ffzy","hd.ffzy"],"regex": ["#EXT-X-DISCONTINUITY\\r*\\n*#EXTINF:6.666667,[\\s\\S]*?#EXT-X-DISCONTINUITY"]},
{"host": "piaku.cc","rule": [".mp4",".m3u8","?auth_token","m3u8"]},
{"host": "app.syrme.top","rule": ["aliyundrive.net","cn-beijing-data","?auth_token","m3u8"]},
{"host": "v.3412.net.cn","rule": [".mp4","security-token=","aliyuncs.com","m3u8"]},
{"host": "jx.jsonplayer.com","rule": [".mp4",".m3u8","?vkey=","110.42.2.115","m3u8"]},
{"host": "movie.bulei.cc","rule": [".mp4",".m3u8","?vkey=","1ftn_handler","http://1.71.18.153","mu.dcd1.cn","aliyundrive.net","m3u8"]},
{"host": "www.6080dy1.com","rule": ["m3u8.php",".m3u8"]},{"host": "*","rule": ["default.365yg.com"]},
{"host": "www.agemys.cc","rule": ["cdn-tos","obj/tos-cn"]},{"host": "zjmiao.com","rule": ["play.videomiao.vip/API.php","time\u003d"]},
{"host": "www.sharenice.net","rule": ["http.*?/play.{0,3}\\?[^url]{2,8}\u003d.*"]},
{"host": "www.sharenice.net","rule": ["qianpailive.com","vid\u003d"]},{"host": "*","rule": ["douyin.com/aweme","video_id\u003d"]},
{"host": "*","rule": ["huoshan.com","/item/video/"]},
{"host": "*","rule": ["http((?!http).){12,}?\\.(m3u8|mp4|flv|avi|mkv|rm|wmv|mpg|m4a)\\?.*|http((?!http).){12,}\\.(m3u8|mp4|flv|avi|mkv|rm|wmv|mpg|m4a)|http((?!http).)*?xg.php\\?id\u003d|http((?!http).)*?/m3/(.*)\\.css"]}],

"sites":[
{"key":"豆瓣","name":"豆瓣","type":3,"api":"./JS/drpy.min.js","searchable":0,"quickSearch":0,"filterable":0,"ext":"./JS/豆瓣.js"},
{"key":"草莓熊","name":"草莓熊","type": 3,"api":"./JS/drpy.min.js","searchable":1,"quickSearch":1,"filterable": 1,"ext":"./JS/草莓熊.js"},
{"key":"北极狐","name":"北极狐","type":3,"api":"csp_AppYsV2","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://www.kuin.one/api.php/app/"},
{"key":"迷你库","name":"迷你库","type":3,"api":"csp_AppYsV2","searchable":1,"quickSearch":1,"filterable":1,"ext":"http://www.miniku.cc/xgapp.php/v1/"},
{"key":"萌蛋蛋","name":"萌蛋蛋","type":3,"api":"csp_AppYsV2","searchable":1,"quickSearch":1,"filterable":1,"ext":"http://app.mengdandan.com/xgapp.php/v1/"},
{"key":"荐片","name":"荐片","type":3,"api":"./JS/drpy.min.js","playerType":1,"searchable":1,"quickSearch":1,"filterable":1,"ext":"./JS/荐片.js"},
{"key":"csp_YT","name":"影探","type":3,"api":"csp_YT","searchable":1,"quickSearch":1,"filterable":1,"jar":"./jar/f.jar"},
{"key":"影探","name":"影探2","type":3,"api":"./JS/drpy.min.js","searchable":1,"quickSearch":1,"filterable":1,"ext":"./JS/影探.js"},
{
      "key": "飞速",
      "name": "🚄┃影探┃影视",
      "type": 3,
      "api": "csp_AppYsV2",
      "jar":"https://qu.ax/xDRt.jpg",
      "ext": "http://yt22106.lfytyl.com/api.php/app"
    },
{"key":"酷酷","name":"酷酷","type":3,"api":"csp_Kuying","searchable":1,"quickSearch":1,"changeable":1,"jar":"./jar/f.jar"},
{"key":"乐迪","name":"乐迪","api":"csp_AppYsV2","type":3,"searchable":1,"quickSearch":1,"changeable":1,"ext":"https://api123.adys.app/xgapp.php/v3/"},
{"key":"csp_Kunyu77","name":"七七","type":3,"api":"csp_Kunyu77","searchable":1,"quickSearch":1,"filterable":1,"jar":"./jar/f.jar"},
{"key":"csp_Lib","name":"LibVio","type":3,"api":"csp_Libvio","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://www.libvio.cc/","jar":"./jar/f.jar"},
{"key":"HDmoli","name":"HDmoli","type":3,"api":"./JS/drpy.min.js","searchable":1,"quickSearch":1,"filterable":1,"ext":"./JS/HDmoli.js"},
{"key":"Voflix","name":"Voflix","type":3,"api":"./JS/drpy.min.js","searchable":1,"quickSearch":1,"filterable":1,"ext":"./JS/Voflix.js"},
{"key":"csp_WoGG","name":"玩偶哥哥","type":3,"api":"csp_WoGG","searchable":1,"quickSearch":1,"filterable":1,"jar":"./jar/f.jar","ext":"https://shuyuan.miaogongzi.net/shuyuan/1691460316.txt$$$http://wogg.xyz/"},
{"key":"在线之家","name":"在线之家","type":3,"api":"./JS/drpy.min.js","searchable":1,"quickSearch":1,"filterable":1,"ext":"./JS/在线之家.js"},
{"key":"五五五","name":"五五五","type":3,"api":"./JS/drpy.min.js","searchable":1,"quickSearch":1,"filterable":1,"ext":"./JS/五五五.js"},
{"key":"大米星球","name":"大米星球","type":3,"api":"./JS/drpy.min.js","searchable":1,"quickSearch":1,"filterable":1,"ext":"./JS/大米星球.js"},
{"key":"低端影视","name":"低端影视","type":3,"api":"./JS/drpy.min.js","searchable":1,"quickSearch":1,"filterable":1,"playerType":2,"ext":"./JS/低端影视.js"},
{"key":"独播库","name":"独播库","type":3,"api":"csp_XYQHiker","searchable":1,"quickSearch":1,"filterable":1,"ext":"./JS/独播库.js"},
{"key":"大师兄","name":"大师兄","type":3,"api":"./JS/drpy.min.js","searchable":1,"quickSearch":1,"filterable":1,"ext":"./JS/大师兄.js"},
{"key":"电影先生","name":"电影先生","type":3,"api":"./JS/drpy.min.js","searchable":1,"quickSearch":1,"filterable":1,"ext":"./JS/电影先生.js"},
{"key":"一三九","name":"一三九","type":3,"api":"./JS/drpy.min.js","searchable":1,"quickSearch":1,"filterable":1,"ext":"./JS/一三九.js"},
{"key":"路漫漫","name":"路漫漫","type":3,"api":"./JS/drpy.min.js","searchable":1,"quickSearch":1,"filterable":1,"ext":"./JS/路漫漫.js"},
{"key":"动漫岛","name":"动漫岛","type":3,"api":"./JS/drpy.min.js","searchable":1,"quickSearch":1,"filterable":1,"ext":"./JS/动漫岛.js"},
{"key":"蘑菇影视","name":"蘑菇影视","type":3,"api":"csp_AppYs","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://www.moguys.xyz/api.php/app/"},
{"key":"鸭鸭影视","name":"鸭鸭影视","type": 3,"api": "csp_AppYsV2","searchable": 1,"quickSearch": 1,"filterable": 1,"ext": "https://yayayaaapp.ynf.icu/api.php/app/"},
{"key":"ikan","name":"爱看Bot","type":3,"api": "./JS/drpy.min.js","searchable": 1,"quickSearch": 1,"filterable": 1,"ext": "./JS/ikan.js"},
{"key":"素白白","name":"素白白","type":3,"api":"csp_XBPQ","searchable":1,"quickSearch":1,"filterable":1,"ext":"./JS/素白白.js"},
{"key":"达达龟","name":"达达龟","type":3,"api":"./JS/drpy.min.js","searchable":1,"quickSearch":1,"filterable":1,"ext":"./JS/达达龟.js"},
{"key":"臭蛋蛋","name":"臭蛋蛋","type":3,"api":"csp_XYQHiker","searchable":1,"quickSearch":1,"filterable":1,"ext":"https://gitee.com/PizazzGY/TVBox/raw/main/XYQHiker/臭蛋蛋.json"},
{"key":"子子影视","name":"子子影视","type":3,"api":"csp_XYQHiker","searchable":1,"quickSearch":1,"filterable":1,"ext":"./JS/子子影视.js"},
{"key":"饭团影视","name":"饭团影视","type": 3,"api": "csp_XBPQ","searchable": 1,"quickSearch": 1,"filterable": 1,"ext": "./JS/饭团.js"}, 
#云盘
{"key":"csp_search_七夜","name": "七夜｜云盘","type": 3,"api": "csp_Dovx","searchable": 1,"quickSearch": 1,"filterable": 0,"ext": "http://shuyuan.miaogongzi.net/shuyuan/1691460316.txt","jar":"./jar/yun.jar"},
{"key":"PanSou","name":"盘搜｜云盘","type":3,"api":"csp_PanSou","searchable":1,"quickSearch":1,"filterable":1,"changeable":1,"ext": "http://shuyuan.miaogongzi.net/shuyuan/1691460316.txt","jar":"./jar/yun.jar"},
{"key":"UpYun","name":"云搜｜云盘","type":3,"api":"csp_UpYun","searchable":1,"quickSearch":1,"filterable":1,"changeable":1,"ext": "http://shuyuan.miaogongzi.net/shuyuan/1691460316.txt","jar":"./jar/yun.jar"},
{"key":"fenx","name":"分享社｜云盘","type":3,"api":"csp_XYQBiu","searchable":1,"quickSearch":1,"filterable":1,"ext":"./JS/分享社.js"},
{"key":"push_agent","name":"数据来源于互联网｜LR","type":3,"api":"csp_PushAgent","searchable":0,"quickSearch":0,"filterable":0}
],

"parses":[
        {"name":"解析聚合","type":3,"url":"Demo"},
        {"name":"Json轮询","type":2,"url":"Sequence"},
        {"name":"255TV","type":1,"url":"https://jx.255tv.tk/api/?key=S6kQHaE1gVEY5KAv8L&url=","ext":{"flag":["qiyi","youku","mgtv","pptv","PPTV","letv","leshi","bilibili","ltnb","sohu","cntv","xigua","fun","leshi","iqiyi"]}},
        {"name":"左岸","type":1,"url":"http://110.42.2.247:880/analysis/json/?uid=2449&my=acfgikquvzFGJRW459&url=","ext":{"flag":["qq","sohu","letv","cntv","mgtv","qiyi","ltnb","bilibili","rx","1905","xigua"]}},
        {"name":"刚佬","type":1,"url":"http://json.g9.pub:66/?url=","ext":{"flag":["qq","qiyi","youku","sohu","cntv","letv","1905","mgtv","iqiyi"]}},
        {"name": "稻香","type": 1,"url": "https://vip.mosangkeji.com/api/?key=rRNvXAnOghBBLnC35c&url=","ext":{"flag":["qq","qiyi","youku","sohu","letv","cntv","ltnb","1905","xigua"]}},
        {"name":"影探","type": 1,"url": "http://lflong.lyyytv.cn/json.php?url=","ext": {"flag": ["YT_4k","qiqi"],"header":{"User-Agent":"okhttp/3.12.0"}}},
        {"name":"777","type":0,"url":"https://jx.777jiexi.com/player/?url="},
        {"name":"布雷","type":0,"url":"https://jx.jsonplayer.com/player/?url="},
        {"name":"虾米","type":0,"url":"https://jx.xmflv.com/?url="},
        {"name":"盘古","type":0,"url":"https://www.pangujiexi.com/pangu/?url="}
        ],
        
"flags":
["youku","qq","QQ","iqiyi","qiqi","qiyi","letv","sohu","tudou","pptv","PPTV","mgtv","ltnb","rx","SLYS4k","BYGA","luanzi","dxzy","QEYSS","aliyun","AliS","122","chuangying","CL4K","xfyun","wuduzy","wasu","bilibili","renrenmi","ppayun","haiwaikan","cool","dbm3u8","xmm","xigua","m1905","funshion","imgo","ruyi1080","ruyib1080","YQK","优酷","芒果","腾讯","爱奇艺","奇艺","哔哩哔哩","哔哩","西瓜视频","腾讯视频","奇艺视频","优酷视频","芒果视频","乐视视频","厂长资源","非凡资源","云","视频列表","线路"],

"ijk":[
{"group":"软解码","options":[
{"category":4,"name":"opensles","value":"0"},
{"category":4,"name":"overlay-format","value":"842225234"},
{"category":4,"name":"framedrop","value":"1"},
{"category":4,"name":"soundtouch","value":"1"},
{"category":4,"name":"start-on-prepared","value":"1"},
{"category":1,"name":"http-detect-range-support","value":"0"},
{"category":1,"name":"fflags","value":"fastseek"},
{"category":2,"name":"skip_loop_filter","value":"48"},
{"category":4,"name":"reconnect","value":"1"},
{"category":4,"name":"enable-accurate-seek","value":"0"},
{"category":4,"name":"mediacodec","value":"0"},
{"category":4,"name":"mediacodec-auto-rotate","value":"0"},
{"category":4,"name":"mediacodec-handle-resolution-change","value":"0"},
{"category":4,"name":"mediacodec-hevc","value":"0"},
{"category":1,"name":"dns_cache_timeout","value":"600000000"}
]},
{"group":"硬解码","options":[
{"category":4,"name":"opensles","value":"0"},
{"category":4,"name":"overlay-format","value":"842225234"},
{"category":4,"name":"framedrop","value":"1"},
{"category":4,"name":"soundtouch","value":"1"},
{"category":4,"name":"start-on-prepared","value":"1"},
{"category":1,"name":"http-detect-range-support","value":"0"},
{"category":1,"name":"fflags","value":"fastseek"},
{"category":2,"name":"skip_loop_filter","value":"48"},
{"category":4,"name":"reconnect","value":"1"},
{"category":4,"name":"enable-accurate-seek","value":"0"},
{"category":4,"name":"mediacodec","value":"1"},
{"category":4,"name":"mediacodec-auto-rotate","value":"1"},
{"category":4,"name":"mediacodec-handle-resolution-change","value":"1"},
{"category":4,"name":"mediacodec-hevc","value":"1"},
{"category":1,"name":"dns_cache_timeout","value":"600000000"}
]}],
"ads":["mimg.0c1q0l.cn","www.googletagmanager.com","www.google-analytics.com","mc.usihnbcq.cn","mg.g1mm3d.cn","mscs.svaeuzh.cn","cnzz.hhttm.top","tp.vinuxhome.com","cnzz.mmstat.com","www.baihuillq.com","s23.cnzz.com","z3.cnzz.com","c.cnzz.com","stj.v1vo.top","z12.cnzz.com","img.mosflower.cn","tips.gamevvip.com","ehwe.yhdtns.com","xdn.cqqc3.com","www.jixunkyy.cn","sp.chemacid.cn","hm.baidu.com","s9.cnzz.com","z6.cnzz.com","um.cavuc.com","mav.mavuz.com","wofwk.aoidf3.com","z5.cnzz.com","xc.hubeijieshikj.cn","tj.tianwenhu.com","xg.gars57.cn","k.jinxiuzhilv.com","cdn.bootcss.com","ppl.xunzhuo123.com","xomk.jiangjunmh.top","img.xunzhuo123.com","z1.cnzz.com","s13.cnzz.com","xg.huataisangao.cn","z7.cnzz.com","xg.huataisangao.cn","z2.cnzz.com","s96.cnzz.com","q11.cnzz.com","thy.dacedsfa.cn","xg.whsbpw.cn","s19.cnzz.com","z8.cnzz.com","s4.cnzz.com","f5w.as12df.top","ae01.alicdn.com","www.92424.cn","k.wudejia.com","vivovip.mmszxc.top","qiu.xixiqiu.com","cdnjs.hnfenxun.com","cms.qdwght.com"]
}