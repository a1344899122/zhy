/**
 * 一、名称： 将window.location.href 虚拟成 form post提交
 * 
 * 二、背景：
 * 		在使用window.location.href方法进行页面跳转时，存在以下问题
 * 		1. 明文参数，不安全，直接在地址栏中暴露了数据内容；
 * 		2. 中文乱码，url中存在中文时，容易乱码。
 * 
 *  三、目标：
 *  		将url及其参数转化成form方式提交
 *  
 *  四、应用示例
 *  
   	$(document).ready(function(){
		var url="http://www.baidu.com";
		// 调用方法一
		ws.tools.location(url);
		// 或 调用方法二
		//ws.tools.location.href(url);
		// 或 调用方法三
		//tools.window.open(url);
	 });
 *  		
 *  		ws.tools.location(url);
 */
	if(typeof ws =="undefined"){
		var ws=new Object();
	}//end if
	if(typeof ws.tools =="undefined"){
		ws.tools=new Object();
	}

	;(function(tools) {
		
		///////////////////////////// 一、外部调用方法  ///////////////////////////////////////////////
		/**  1.1  调用方法一  **/
		tools.location=function(url,target){
			_location(url,target);
		};//end function
		/**  1.2 调用方法二  **/
		tools.location.href=function(url,target){
			tools.location(url,target);
		};//end function
		
		
		/**  1.3 调用方法三  **/
		tools.window=function(url,target){
			tools.window.open(url,target);
		};//end function
		/**  1.3 调用方法三  **/
		tools.window.open=function(url,target){
			_windowOpen(url,target);
		};//end function

		/////////////////////////////  二、内部实现方法  ///////////////////////////////////////////////
		function  _location(url,target){
			if(target==null||typeof(target)=='undefined'){
				target="_self";
			}
			var parametersCode = "";
			if(url.indexOf("?") != -1) { //当url带有参数时
				var urlClear = url.substring(0,url.indexOf("?"));
				var urlParameters = url.substring(url.indexOf("?")+1,url.length);
				//将urlParameters转化成JSON格式
				var array = urlParameters.split("&");
				for(var i=0; i<array.length; i++) {
					
					var decodeArrayElement = decodeURI(array[i]);
					
					var _key = decodeArrayElement.substring(0,decodeArrayElement.indexOf("="));
					var _value = decodeArrayElement.substring(decodeArrayElement.indexOf("=")+1,decodeArrayElement.length);
					
					parametersCode += "<textarea  name="+_key+">"+_value+"</textarea>";
				}//end for
				
				$("body").append(
				"<div style='display:none;' id='dispalyDiv'>"+
				"	<form method='post' action='"+urlClear+"' name='ws_fictitious_form' target='"+target+"'>"+
						parametersCode+
				"	</form>"+
				"</div>");
			}else{
				$("body").append(
				"<div style='display:none;' id='dispalyDiv'>"+
				"	<form method='post' action='"+url+"' name='ws_fictitious_form' target='"+target+"'>"+
						
				"	</form>"+
				"</div>");
			}//end if(url.indexOf("?") != -1) { 
			
			
			var ws_fictitious_form = $("form[name=ws_fictitious_form]");
			if(ws_fictitious_form && ws_fictitious_form.size()>0){
				ws_fictitious_form.get(0).submit();
				ws_fictitious_form.eq(0).remove();
			}
			$("#postFrom").submit();
			$("#dispalyDiv").remove();
		}//end function
		
		function  _windowOpen(url,target){
			if(target==null||typeof(target)=='undefined'){
				target="blank";
			}
			
			var parametersCode = "";
			if(url.indexOf("?") != -1) { //当url带有参数时
				var urlClear = url.substring(0,url.indexOf("?"));
				var urlParameters = url.substring(url.indexOf("?")+1,url.length);
				//将urlParameters转化成JSON格式
				var array = urlParameters.split("&");
				for(var i=0; i<array.length; i++) {
					
					var decodeArrayElement = decodeURI(array[i]);
					
					var _key = decodeArrayElement.substring(0,decodeArrayElement.indexOf("="));
					var _value = decodeArrayElement.substring(decodeArrayElement.indexOf("=")+1,decodeArrayElement.length);
					
					parametersCode += "<textarea  name="+_key+">"+_value+"</textarea>";
				}//end for
				
				$("body").append(
				"<div style='display:none;' id='dispalyDiv'>"+
				"	<form method='post' action='"+urlClear+"' name='ws_fictitious_form' target='"+target+"' onsubmit='javaSript:function(){window.open('about:blank','"+target+"')}'>"+
						parametersCode+
				"	</form>"+
				"</div>");
			}else{
				$("body").append(
				"<div style='display:none;' id='dispalyDiv'>"+
				"	<form method='post' action='"+url+"' name='ws_fictitious_form' target='"+target+"' onsubmit='javaSript:function(){window.open('about:blank','"+target+"')}'>"+
						
				"	</form>"+
				"</div>");
			}//end if(url.indexOf("?") != -1) { 
			
			
			var ws_fictitious_form = $("form[name=ws_fictitious_form]");
			if(ws_fictitious_form && ws_fictitious_form.size()>0){
				ws_fictitious_form.get(0).submit();
				ws_fictitious_form.eq(0).remove();
			}
			
			$("#postFrom").submit();
			$("#dispalyDiv").remove();
		}//end function
		
	})(ws.tools);
	