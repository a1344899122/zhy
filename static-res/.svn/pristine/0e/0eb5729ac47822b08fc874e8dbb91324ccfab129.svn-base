/**
 *  一、名称： json/html/js格式化
 * 
 *  二、目标：
 *  		将无结构的json/html/js进行美化
 *  
 *  三、应用示例
 *  
   	$(document).ready(function(){
		$('#beautifyJson').click(function(){
		//1原先凌乱的js/html/json字符串，注意是字符串。
		var json ='[{"name":"name","nameCn":"设备名称","required":true,"minValue":"0","maxValue":"50","validateType":"10","tips":""},{"name":"brand","nameCn":"设备品牌","required":true,"minValue":"0","maxValue":"400","validateType":"10","tips":""},{"name":"phone","nameCn":"联系电话","required":true,"minValue":"0","maxValue":"50","validateType":"10","tips":""}]';
		//2代表格式化时的空格缩进量,默认是2
		var space = 2;
		//美化后有结构的js/html/json
		var beautyJs = ws.component.getBeautifyJs(json,space);
	});
	 });
 */
if(typeof ws =="undefined"){
	var ws=new Object();
}//end if
if(typeof ws.component =="undefined"){
	ws.component=new Object();
}//end if

/*******************************************************************************************************/
/*******************************************************************************************************/
/*******************************************************************************************************/
(function(component) {
	/*
	 * 格式化json/html/js
	 * before_js  原先凌乱的js/html/json字符串，注意是字符串。
	 * tabsize  格式化时的空格缩进量，整形数字或字符串类型的数字。
	 */
	component.getBeautifyJs=function(before_js,tabsize){
		js_source = before_js.replace(/^\s+/, '');
        tabchar = ' ';
        if (tabsize == 1) {
          tabchar = '\t';
        }
		var js_new;
        if (js_source && js_source.charAt(0) === '<') {
      	  js_new = ws.component.style_html(js_source, tabsize, tabchar, 80);
        } else {
      	  js_new = ws.component.js_beautify(js_source, tabsize, tabchar);
        }
        return js_new;
	};//end function
})(ws.component);
/*******************************************************************************************************/





	

	
	