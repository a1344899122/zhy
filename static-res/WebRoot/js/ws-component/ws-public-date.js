//日期控件
//年度：
//<input type="text" name="" value="" onFocus="ws.tools.date({dateFmt:'yyyy'});"/>

//开始日期、结束日期
//<input type="text" id="startDate" name="begin_time" value=""  onFocus="ws.tools.date({maxDate:'#F{$dp.$D(\'endDate\')}'});"/>
//<input type="text" id="endDate" name="end_time" value="" onFocus="ws.tools.date({minDate:'#F{$dp.$D(\'startDate\')}'});"/>
						     

if(typeof ws =="undefined"){
		var ws=new Object();
}//end if
if(typeof ws.tools =="undefined"){
	ws.tools=new Object();
}
	
;(function(tools) {
	tools.date=function(param){
		new WdatePicker(param);
	};//end function
})(ws.tools);


/* 
日期格式化
alert(new Date().format("yyyy年MM月dd日")); 
alert(new Date().format("MM/dd/yyyy")); 
alert(new Date().format("yyyyMMdd")); 
alert(new Date().format("yyyy-MM-dd hh:mm:ss")); 
*/
Date.prototype.format =function(format)
{
	var o = {
		"M+" : this.getMonth()+1, //month
		"d+" : this.getDate(), //day
		"h+" : this.getHours(), //hour
		"m+" : this.getMinutes(), //minute
		"s+" : this.getSeconds(), //second
		"q+" : Math.floor((this.getMonth()+3)/3), //quarter
		"S" : this.getMilliseconds() //millisecond
	}
	if(/(y+)/.test(format)) format=format.replace(RegExp.$1,(this.getFullYear()+"").substr(4- RegExp.$1.length));
	for(var k in o)
		if(new RegExp("("+ k +")").test(format))
			format = format.replace(RegExp.$1,RegExp.$1.length==1? o[k] :("00"+ o[k]).substr((""+ o[k]).length));
	return format;
}

























