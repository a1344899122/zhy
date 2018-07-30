/*****************************************************************
                  jQuery Ajax封装通用类      
*****************************************************************/
/**调用示例：
   ws.tools.ajaxRequest({options});
*/
/**
 * ajax封装
 * url 发送请求的地址,url?传参时，参数名誉data的key相同时会被覆盖data的参数值
 * data 发送到服务器的数据，数组存储，如：{"date": new Date().getTime(), "state": 1}
 * async 默认值: false。默认设置下，所有请求均为同步请求。如果需要发送异步请求，请将此选项设置为 true。
 *       注意，同步请求将锁住浏览器，用户其它操作必须等待请求完成才可以执行。
 * type 请求方式("POST" ， "GET" ，"")， 默认为 "POST"
 * cache 缓存，默认为false
 * dataType 预期服务器返回的数据类型，常用的如：xml、html、json、text
 * beforeSendfun 在发送请求之前调用，并且传入一个XMLHttpRequest作为参数。
 * successfun 成功回调函数
 * errorfun 失败回调函数
 * isShowCover:false, 是否显示遮罩层，默认false:不显示   true:显示
 */


$(document).ready(function(){
	if($("#loading").size()==0){
		var loading='<div id="loading" style="position:fixed;top: 0;right: 0; bottom: 0;left: 0;text-align: center; z-index: 8000;display:none;">'+
	    '   <div style="position:absolute;top:30%;left:50%;width: 250px;min-height: 22px;text-align: center;background: #666;filter:alpha(Opacity=70);-moz-opacity:0.7;opacity:0.7;box-shadow: 0 1px 2px rgba(0, 0, 0, 0.27);border-radius: 5px;padding: 20px 15px;font-size: 14px;color: #fff;margin-left: -140px;margin-top: -30px;word-break: break-all;"'+
		'      <i class="fa fa-spinner"></i><span style="padding-left:5px;">请求中，请稍后</span>'+
	    '   </div>'+
	    '</div>';
		$("body").append(loading);
	}
});

if(typeof ws =="undefined"){
	var ws=new Object();
}//end if
if(typeof ws.tools =="undefined"){
	ws.tools=new Object();
}
;(function(tools){
	var cover={
			show:function(){
				$("#loading").show();
			},
			hide:function(){
				$("#loading").hide();
			}
	}
	
	
	tools.ajaxRequest=function(options) {
    	var defaults={
			type: "POST",
            async: false,
            cache: false,
            processData: true,
            contentType : "application/x-www-form-urlencoded; charset=UTF-8",
            data: null,
            url: null,
            dataType: "json",
            successfun:null,
            errorfun:null,
            isShowCover:false
    	}
    	
    	 
        //url参数转json   (urlParam: url参数对 ,json: 已有json对象)
    	urlParam2json=function(urlParam,json){ 
    		if(!json){
    			json={};
    		}
    		var pairs = urlParam.split('&'),name,value; 
    		for(var i=0;i<pairs.length;i++){
    			var pair = pairs[i].split('='); 
    			var name = pair[0]; 
    			var value = pair[1]; 
    			json[name] =!json[name] ? value : [].concat(json[name]).concat(value); 
    		}; 
    		return json; 
    	};

    	 
    	//对url的参数进行处理.当url带有参数时对其进行清洗,将url中参数值转化到json中
    	if(options.url.indexOf("?") != -1) {   //当url带有参数时
    		options.url = options.url.substring(0,options.url.indexOf("?"));
    		var urlParameters = options.url.substring(options.url.indexOf("?")+1,options.url.length);
    		options.data=urlParam2json(urlParameters , options.data);
    	}
    	
    	var options = $.extend(defaults, options);
    	
    	if(options.successfun){
    		options.success=options.successfun;
    	}
    	if(options.beforeSendfun){
    		options.beforeSend=options.beforeSendfun;
    	}
    	
    	if(options.errorfun){
    		options.error=options.errorfun;
    	}
    	
    	//请求完毕后，加入去除‘遮罩层’事件，和判断登陆超时跳转事件
    	options.complete= function(XMLHttpRequest, textStatus){
			//隐藏遮罩层 
    		if(options.isShowCover){
    			cover.hide();
    		}
			 
			var response = JSON.parse(XMLHttpRequest.responseText);
			if (response.status == 100||response.status == 103) {
	    		window.top.location.href=SystemGlobal.ssoLoginUrl+"?msg="+encodeURIComponent(response.msg);
				return;
			}
		}
    	
    	//显示遮罩层
    	if(options.isShowCover){
    		cover.show();
    	}
		
    	$.ajax(options);
       
    };

})(ws.tools);
