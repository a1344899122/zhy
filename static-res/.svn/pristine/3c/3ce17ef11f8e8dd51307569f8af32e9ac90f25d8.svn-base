/**
 * 使用说明
 * 1.在操作的input框中加入 class="typeahead" 样式
 *		如： <input  class="typeahead"  id="name"  name="name"  placeholder="姓名" />
 * 2.操作的input框，其name属性必须与数据库查询的字段对应
 * 		如：<input  class="typeahead"   name="name" />，执行的sql语句为：select name from [数据表]；
 * 3.js调用getInput(options)方法。其中options为必须为sqlId;
 * 		如：ws.tools.getInput("com.waysoft.modules.user.dao.UserDao.findByField");
 * @author zhanghaiyun
 */ 

if(typeof ws =="undefined"){
	var ws=new Object();
}//end if
if(typeof ws.tools =="undefined"){
	ws.tools=new Object();
}
	
;(function(tools) {
	
	tools.getInput(options){
		
		//判断是否有传sqlId
		if(options!=null && options!=''){
			sqlId=options;
		}
		
		//用于存放请求到的数据
		var allDate=[];
	
		//为所选的input框绑定取值事件
		$('input.typeahead').click(function(){
			GetUserallDate(this);
			//GetUserallDate();
		})
		
		//为所选的input框绑定typeahead.js
		$('input.typeahead').typeahead({
			hint: true,
			highlight: true,
			minLength: 1
		},
		{
			name: 'states',
			displayKey: 'value',
			source: substringMatcher(allDate),
			limit: 10
		});
	}
	
	//在input框中填充数据
	function GetUserallDate(obj){
		
		var field = $(obj).attr('name');
		
		var data={
			"sqlId":sqlId,
			"field":field,
			"token" : $.cookie("token")	
		};
		
		$.ajaxRequest({
			url : commonServiceUrl  + "/getList.action",
			dataType : 'json',
			async: false,
			type : 'post',
			data :data,
			successfun : function(response) {
				//登录超时跳转
				//$.fn.Global.isLoginTimeOut(response);
				if(response.status == 0){
					
					//删除之前追加的数据
					for(var i in allDate){
						delete allDate[i];
					}
					//把数据存放到allDate中	
					for(var i in response.data){
						var value = null;
						for(var val in response.data[i]){
							value = response.data[i][val];
						}
						allDate.push(value);
					}
				}else{
					top.$("body").modalDialog().alert(response.msg);
				}
			},
			errorfun : function() {
				top.$("body").modalDialog().alert("请求失败");
			}
		});
		 
	}
	
	
	//定义正则匹配方法，用于匹配相关的数据
	function substringMatcher(strs) {
		return function findMatches(q, cb) {
			var matches, substringRegex;

			matches = [];
			 
			substrRegex = new RegExp(q, 'i');

			$.each(strs, function(i, str) {
				if (substrRegex.test(str)) {
					 
					matches.push({
						value: str
					});
				}
			});
			cb(matches);
		}
	}
	
})(ws.tools)
	
	
 
