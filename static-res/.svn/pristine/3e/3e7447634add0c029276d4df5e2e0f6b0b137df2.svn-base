//全部替换
String.prototype.replaceAll  = function(s1,s2){
	var sc=new Array(".","[","]","(",")","{","}","^","$");
	s1=s1.replace(/\./g,"\\.");
	s1=s1.replace(/\[/g,"\\[");
	s1=s1.replace(/\]/g,"\\]");
	s1=s1.replace(/\$/g,"\\$");
	s1=s1.replace(/\^/g,"\\^");
	s1=s1.replace(/\{/g,"\\{");
	s1=s1.replace(/\}/g,"\\}");
	s1=s1.replace(/\(/g,"\\(");
	s1=s1.replace(/\)/g,"\\)");
	s1=s1.replace(/\*/g,"\\*");
	s1=s1.replace(/\+/g,"\\+");
	return this.replace(new RegExp(s1,"gm"),s2);    
}
// 功能: 
// 1)去除字符串前后所有空格 
// 2)去除字符串中所有空格(包括中间空格,需要设置第2个参数为:g) 
String.prototype.trim = function(g) {
	if(g)
		return this.replace(/\s/g, "");
	else
		return this.replace(/(^\s*)|(\s*$)/g, "");
}
//删除回车
String.prototype.trimN = function() { 
	return this.replace(/\n/g, ""); 
}
//删除换行
String.prototype.trimR = function() { 
	return this.replace(/\r/g, ""); 
}

//字符串字节长度
String.prototype.lengthByte=function(){
	var num=this.length; 
	//去掉下划线，否则一个下划线占用2个字节
	//下面的正则包含了下划线
	var tmp=this.replaceAll("_",""); 
	//汉字
	var arr=tmp.match(/[^\\\\\\\\\\\\\\\\x00-\\\\\\\\\\\\\\\\x80]/ig);
	if(arr!=null)num+=arr.length;
	
	return num ;
}

//将字符串转化成布尔型	
String.prototype.toBoolean=function(){
	if (this == "true") {
		return true;
	} else {
		return false;
	}
}
//将字符串转化成数字
String.prototype.toNumber=function(){
	if (isNaN(this)) {
		alert("字符串转化数字错误！");
		return 0;
	} else {
		return Number(this);
	}
}

//将字符串转化成日期
String.prototype.toDate=function(){ 
	try{
		return new Date(this.replace(/-/g,"/"));	
	}catch(e){
		alert(e);
	}
}

//将字符串转化成json
String.prototype.toJson=function(){ 
	var json;
	try{
		json=eval('(' + this + ')'); 
	}catch(e){
		alert(e);
	}
	return json; 
}

//将json对象转化为字符串
function json2str(o){ 
	var arr = []; 
	var fmt = function(s) { 
		if (typeof s == 'object' && s != null) 
			return json2str(s); 
		return /^(string|number)$/.test(typeof s) ? "\"" + s + "\"" : s; 
	} 
	
	if (o != null && o instanceof Array) {
		for (var i=0;i<o.length;i++){ 
			arr.push(fmt(o[i]));
		}
	}else{
		for (var i in o) {
			arr.push("\"" + i + "\":" + fmt(o[i])); 
		}
	}
	
	if (o != null && o instanceof Array) {
		return '[' + arr.join(',') + ']'; 
	}else{
		return '{' + arr.join(',') + '}'; 
	}
	
}
