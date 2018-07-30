 /*
 *  表单验证使用说明：
 *  1、首先加载配置的json文件
 *     调用格式：var validataFields=ws.tools.loadValidate('validate.json');  
 *  2、验证表单：
 *     调用格式：ws.tools.formValidate(validataFields);
	name     ：字段名称，不可空
	nameCn   ：字段中文名称，不可空
	required ：是否必填，不可空
	          true:必须有值
	          false:可以为空
	validateType：验证规则，不可空
		基本类型
			10	字符串,任意字符串
			11 	只能是字母
			12 	只能是汉字
			13	只能是数字，0-9
			14	只能是数字，包括"."
			15 	只能是字母、数字ale
			16 	只能是下划线和字母、数字，且以字母开头
		
			20	数字
			21 	整形
		日期型
			30	日期年月日 ,自动绑定日期控件，默认为双日历，格式：yyyy-MM-dd，可使用otherRule指定其他格式，如：otherRule="{doubleCalendar:true,dateFmt:'yyyy-MM-dd',startDate:'1980-05-01'}" 
			301	日期年月,自动绑定日期控件，,格式：yyyy-MM，可使用otherRule指定其他格式
			302	日期年,自动绑定日期控件，,格式：yyyy，可使用otherRule指定其他格式
		其他类型
			31：手机
			32：电话
			33：email
			34：邮政编码
			35：URL地址
			37:身份证号				
	
	minValue,maxValue：
	           字符型：最小长度，最大长度
	           整形，浮点型：最小值，最大值
	decimalDigits：小数位数
	           
	tips：提示信息，可不要
	                           
 */

if(typeof ws =="undefined"){
	var ws=new Object();
}//end if
if(typeof ws.tools =="undefined"){
	ws.tools=new Object();
}
	
;(function(tools) {
	
	//10：字符串,任意字符串
	stringValidate10=function(value,minValue,maxValue){
		if(value.length>0){
			//新增将英文单引号和双引号列入非法字符中进行校验
			/*if(value.indexOf("\'")>-1||value.indexOf("\"")>-1){
				return "不能输入英文单引号、双引号等非法字符";
			}*/
			if(value.lengthByte()<minValue||value.lengthByte()>maxValue){//按字节进行判断
				return "长度必须在"+minValue+"~"+maxValue+"个字节之间，一个汉字占用两个字节";
			}
		}
	},
	//11：只能是字母
	stringValidate11=function(value,minValue,maxValue){
		if(value.length>0){
			var patrn=/^[A-Za-z]+$/;
			if(!patrn.test(value)){
				return "必须为A-Z或a-z之间的字符";
			}else{
				return stringValidate10(value,minValue,maxValue);
			}
		}
	},
	//12：只能是汉字
	stringValidate12=function(value,minValue,maxValue){
		if(value.length>0){
			var patrn = /^[\u4E00-\u9FA5\uF900-\uFA2D]+$/;
			if(!patrn.test(value)){
					return ("必须为汉字");
			}else{
				return stringValidate10(value,minValue,maxValue);
			}
		}
	},
	//13：只能是数字，不包括"."
	stringValidate13=function(value,minValue,maxValue){
		if(value.length>0){
			var patrn = /^\d+$/;
			if(!patrn.test(value)){
					return ("必须为0-9的数字");
			}else{
				return stringValidate10(value,minValue,maxValue);
			}
		}
	},
	//14：只能是数字，包括"."
	stringValidate14=function(value,minValue,maxValue){
		if(value.length>0){
			var patrn = /^(\+|-)?\d+($|\.\d+$)/;
			if(!patrn.test(value)){
					return ("必须为数字，格式\"XX.XX\"");
			}else{
				return stringValidate10(value,minValue,maxValue);
			}
		}
	},
	//15：只能是字母、数字
	stringValidate15=function(value,minValue,maxValue){
		if(value.length>0){
			var patrn = /^([a-z]|[A-Z]|[0-9])*$/;
			if(!patrn.test(value)){
					return ("必须为字母或数字");
			}else{
				return stringValidate10(value,minValue,maxValue);
			}
		}
	},
	//16：只能是字母、数字、下划线，且以字母开头
	stringValidate16=function(value,minValue,maxValue){
		if(value.length>0){
			var patrn =/^[a-zA-Z]{1}(\w)*$/;   
			if(!patrn.test(value)){
					return ("必须为字母或数字或下划线，且以字母开头");
			}else{
				return stringValidate10(value,minValue,maxValue);
			}
		}
	},
	//17：只能是字母、数字、汉字、中划线、下划线、空格
	stringValidate17=function(value,minValue,maxValue){
		if(value.length>0){
			var patrn = /^([a-z]|[A-Z]|[0-9]|[_-]|[\u4E00-\u9FA5\uF900-\uFA2D]|[\s])*$/;
			if(!patrn.test(value)){
					return ("必须为字母、数字、汉字、中划线、下划线、空格");
			}else{
				return stringValidate10(value,minValue,maxValue);
			}
		}
	},
	
	//////////////////////////////////////////////////////////////////////
	//数字区间判断
	numberValidate=function(value,minValue,maxValue){
		if(value.length>0){
			value=Number(value);
			if(value<minValue||value>maxValue){
				return ("必须在"+minValue+"~"+maxValue+"之间");
			}
		}
	},
	//20：只能是数字
	numberValidate20=function(value,minValue,maxValue,decimalDigits){
		if(!decimalDigits||decimalDigits<1){
			return false;
		}
		
		if(value.length>0){
			var regex=new RegExp("^(\\+|-)?\\d+($|\\.[0-9]{1,"+decimalDigits.toNumber()+"}$)+");    
			if(value.match(eval(regex))==null){
				return ("必须为数字，小数位数最多"+decimalDigits.toNumber()+"位，格式\"XX.XX\"");     
			}else{      
			
				return numberValidate(value,minValue,maxValue); 
			}      
		}
	},
	//21：只能是整型数字
	numberValidate21=function(value,minValue,maxValue,decimalDigits){
		if(value.length>0){
			var regex=new RegExp("^(\\+|-)?[0-9]+$");    
			if(value.match(eval(regex))==null){
				return ("必须为整型数字，格式\"XX\"");     
			}else{      
				return numberValidate(value,minValue,maxValue); 
			}      
		}
	},
	
	///////////////////////////////////////////////////
	//日期区间判断
	dateValidate=function(value,minValue,maxValue){
		if(value.length>0){
			var patrn = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;
			if(!patrn.test(minValue)){
				return ("最小日期错误，格式\"yyyy-MM-dd\"");   
			}
			if(!patrn.test(maxValue)){
				return ("最大日期错误，格式\"yyyy-MM-dd\""); 
			}
			minValueD = minValue.replace(/-/g, "/"); 
			maxValueD = maxValue.replace(/-/g, "/"); 
			curValue = value.replace(/-/g, "/"); 
			
			minDate = new Date(minValueD);
			maxDate = new Date(maxValueD);
			curDate = new Date(curValue);

			var minTime= curDate.getTime() - minDate.getTime(); 
			var maxTime= maxDate.getTime() - curDate.getTime(); 
			
			var minDay=parseInt(minTime / (1000 * 60 * 60 * 24));
			var maxDay=parseInt(maxTime / (1000 * 60 * 60 * 24));
			
			if(minDay<0||maxTime<0){
				return ("必须在"+minValue+"~"+maxValue+"之间");
			}
		}
	},
	//30：日期，格式yyyy-MM-dd
	dateValidate30=function(value,minValue,maxValue){
		if(value.length>0){
			var patrn = /^(?:(?!0000)[0-9]{4}-(?:(?:0[1-9]|1[0-2])-(?:0[1-9]|1[0-9]|2[0-8])|(?:0[13-9]|1[0-2])-(?:29|30)|(?:0[13578]|1[02])-31)|(?:[0-9]{2}(?:0[48]|[2468][048]|[13579][26])|(?:0[48]|[2468][048]|[13579][26])00)-02-29)$/;
			if(!patrn.test(value)){
				return ("日期错误,正确格式\"YYYY-MM-DD\"");     
			}else{      
				return dateValidate(value,minValue,maxValue); 
			}      
		}
	},
	//301：日期，格式yyyy-MM
	dateValidate301=function(value,minValue,maxValue){
		if(value.length>0){
			var patrn = /^[0-9]{4}-(?:0[1-9]|1[0-2])$/;
			if(!patrn.test(value)){
				return ("年月格式错误,正确格式\"yyyy-MM\"");
			}else if(!patrn.test(minValue)){
				return ("最小年月格式错误，格式\"yyyy-MM\""); 
			}else if(!patrn.test(maxValue)){
				return ("最大年月格式错误，格式\"yyyy-MM\""); 
			}else{
				var min=value.localeCompare(minValue);
				var max=value.localeCompare(maxValue);
				if(min==-1||max==1){
					return ("必须在"+minValue+"~"+maxValue+"之间");
				}
			}
		}
	},
	//302：日期，格式yyyy
	dateValidate302=function(value,minValue,maxValue){
		if(value.length>0){
			var patrn = /^[0-9]{4}$/;
			if(!patrn.test(value)){
				return ("年月格式错误,正确格式\"yyyy\"");
			}else if(!patrn.test(minValue)){
				return ("最小年月格式错误，格式\"yyyy\""); 
			}else if(!patrn.test(maxValue)){
				return ("最大年月格式错误，格式\"yyyy\""); 
			}else{
				var min=value.localeCompare(minValue);
				var max=value.localeCompare(maxValue);
				if(min==-1||max==1){
					return ("必须在"+minValue+"~"+maxValue+"之间");
				}
			}
		}
	},
	
	///////////////////////////////////////////////////
	//31：手机
	mobileValidate=function(value,minValue, maxValue){
		if(value.length>0){
			var patrn = /^0?1([0-9]{2}){1}[0-9]{8}(,{1}0?1([0-9]{2}){1}[0-9]{8})*$/;
			if(!patrn.test(value)){
				return ("格式错误，正确格式\"13800138000,13612345678\"");     
			}else{      
			   return stringValidate10(value,minValue,maxValue);
			}      
		}
	},
	//32：电话
	telValidate=function(value,minValue, maxValue){
		if(value.length>0){
			var patrn = /^(0[\d]{2,3}-)?\d{6,8}(-\d{3,4})?(,?(0[\d]{2,3}-)?\d{6,8}(-\d{3,4})?)*$/;
			if(!patrn.test(value)){
				return ("格式错误，正确格式\"010-63608888,010-63608888-1581\"");     
			}else{      
			   return stringValidate10(value,minValue,maxValue);
			}      
		}
	},
	//33：email
	emailValidate=function(value,minValue, maxValue){
		if(value.length>0){
			var patrn = /^[\w-]+@[\w-]+(\.[\w-]+)+(,?[\w-]+@[\w-]+(\.[\w-]+)+)*$/;
			if(!patrn.test(value)){
				return ("格式错误，正确格式\"mymail@163.com,youmail@163.com\"");     
			}else{      
			   return stringValidate10(value,minValue,maxValue);
			}      
		}
	},
	//34：邮政编码
	postValidate=function(value,minValue, maxValue){
		if(value.length>0){
			var patrn = /^\d{6}$/;
			if(!patrn.test(value)){
				return ("错误");     
			}else{      
			   return stringValidate10(value,minValue,maxValue);
			}      
		}
	},
	//35：URL地址
	urlValidate=function(value,minValue, maxValue){
		if(value.length>0){
			var patrn= /^http[s]?:\/\/[\w-]+(\.[\w-]+)+([\w-\.\/?%&=]*)?$/;
			if(!patrn.test(value)){
				return ("错误,格式\"http://www.tobaccoinfo.com.cn\"");     
			}else{      
			   return stringValidate10(value,minValue,maxValue);
			}      
		}
	},
	
	//36：密码
	passwordValidate=function(value,minValue, maxValue){
		if(value.length>0){
			var patrn= /^((?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).{8,}$/;
			if(!patrn.test(value)){
				return ("必须同时包含数字，英文字母，特殊符号，长度在8位以上");     
			}else{      
			   return stringValidate10(value,minValue,maxValue);
			}  
			
			/*"长度必须在8位以上，且首字母必须是英文字母，密码中必须同时包含大小写字母、数字以及非字母字符"
			 /^(?:(?=.*[A-Za-z])(?=.*[a-z])(?=.*[0-9])(?=.*[^A-Za-z0-9])).{8,}$/;*/
		}
	},
	
	//37：身份证号验证
	sfzhValidate=function(value,minValue, maxValue){
		if(value.length>0){
			var patrn= /^[1-9]\d{5}(18|19|([23]\d))\d{2}((0[1-9])|(10|11|12))(([0-2][1-9])|10|20|30|31)\d{3}[0-9Xx]$/;
			if(!patrn.test(value)){
				return ("格式错误");     
			}else{      
			   return stringValidate10(value,minValue,maxValue);
			}      
		}
	},
	/* 
	 * 根据字段名称和匹配规则取得一组字段对象
	 * 
	 * 分析：
	 *		（1）按照字段名称进行匹配时，可能会匹配出多个结果；
			（2）但对radio、checkbox匹配多个结果时，就不正确了，一组radio或checkbox只能算一个对象；
			（3）结论：因此需要对匹配的结果对象按照名称进行去重，目的就行去掉重复的radio/checkbox

		要求：
			（1）只接受input|select|textarea标签；
			（2）字段类型只接受text|password|hidden|select|textarea|radio|checkbox
	 *
	 * 参数：
	 *	name:字段名称
	 *	返回：数组
	 *		 数组格式：
				[{
					name:_name  //字段实际名称
					type:_type,  //字段类型 text|password|hidden|radio|checkbox|select|textarea
					value:1     //字段值
				}]
	 *********/
	getFieldByName=function(name){
		var elements=new Array();//找到的字段对象

		var field=$("[name='"+name+"']").each(function(){
			var _label=$(this).get(0).tagName.toLowerCase();
			var _type;

			/********1、判断字段类型*********/
			switch(_label){
				case "input":
					switch($(this).attr("type")){
						case "text":
						case "password":
						case "hidden":
						case "radio":
						case "checkbox":
						case "file":
							_type=$(this).attr("type");
							break;
					}
					break;
				case "select":
					_type="select";
					break;
				case "textarea":
					_type="textarea";
					break;
			}//end switch
			
			//正确解析出了类型
			if(!_type){
				alert("错误！字段："+name+" \n无法确定类型");
			}else{
				
				/********2、取得字段值*********/
				/**在集合中已经存在则抛弃改字段***/
				
				//2.1 去重处理
				var isExist=false;//在集合中是否已经存在
				//只有radio或checkbox才进行去重
				if(_type=="radio"||_type=="checkbox"){
					for(var i=0;i<elements.length;i++){
						if(name==elements[i].name){
							isExist=true;
							break;
						}
					}
				}
				
				//2.2 集合中已经存在抛弃，不存在时取得值
				if(!isExist){
					var _value;
					switch(_type){
						case "radio":
						case "checkbox":
							_value=$("input[name='"+name+"']:checked").val();
							break;
//						case "select":
//							_value=$("select[name='"+name+"'] option:selected").val();
//							break;
						default:
							_value=$(this).val();
							break;
					}//end switch
					
					//成功解析出一个字段
					elements.push({
						name:name,
						type:_type,
						value:_value
					});
				}//end if
			}//end if

		});//end each
		
		return elements;
	}
	
	///////////////////////////////////////////////////
	//数据校验
	dataValidate=function(__nameCn,validateType,value,minValue,maxValue,decimalDigits) {
		var message;
		switch(validateType){
		  case "10":
			message = stringValidate10(value, minValue.toNumber(), maxValue.toNumber());
			break;
		  case "11":
			message = stringValidate11(value, minValue.toNumber(), maxValue.toNumber());
			break;
		  case "12":
			message = stringValidate12(value, minValue.toNumber(), maxValue.toNumber());
			break;
		  case "13":
			message = stringValidate13(value, minValue.toNumber(), maxValue.toNumber());
			break;
		  case "14":
			message = stringValidate14(value, minValue.toNumber(), maxValue.toNumber());
			break;
		  case "15":
			message = stringValidate15(value, minValue.toNumber(), maxValue.toNumber());
			break;
		  case "16":
			message = stringValidate16(value, minValue.toNumber(), maxValue.toNumber());
			break;		
		  case "17":
			message = stringValidate17(value, minValue.toNumber(), maxValue.toNumber());
			break;		
			
		  case "20":
			message = numberValidate20(value, minValue.toNumber(), maxValue.toNumber(),decimalDigits);
			break;
		  case "21":
			message = numberValidate21(value, minValue.toNumber(), maxValue.toNumber(),decimalDigits);
			break;
		  case "30":
			message = dateValidate30(value, minValue, maxValue);
			break;
		  case "301":
			message = dateValidate301(value, minValue.toNumber(), maxValue.toNumber());
			break;
		  case "302":
			message = dateValidate302(value, minValue.toNumber(), maxValue.toNumber());
			break;
		  case "31":
			message = mobileValidate(value, minValue.toNumber(), maxValue.toNumber());
			break;
		  case "32":
			message = telValidate(value, minValue.toNumber(), maxValue.toNumber());
			break;
		  case "33":
			message = emailValidate(value, minValue.toNumber(), maxValue.toNumber());
			break;
		  case "34":
			message = postValidate(value, minValue.toNumber(), maxValue.toNumber());
			break;
		  case "35":
			message = urlValidate(value, minValue.toNumber(), maxValue.toNumber());
			break;
		  case "36":
			message = passwordValidate(value, minValue.toNumber(), maxValue.toNumber());
			break;
		  case "37":
				message = sfzhValidate(value, minValue.toNumber(), maxValue.toNumber());
				break;
		  default:
			message="数据校验配置错误，请为'"+__nameCn+"'指定验证类型";
			break;
			
		}

		var response={
			result:function(){
				if(message==undefined)
					return true;
				else
					return false;
			}()
			,message:message
		}

		return response;
	};



	///////////////////////////////////////////////////
	//加载校验json文件，返回json数据
	tools.loadValidate = function(validateFileUrl){
		var validataFields={};
		$.ajax({
			url:validateFileUrl,//json文件路径
			cache: false, // 默认true,设置为 false 将不会从浏览器缓存中加载请求信息
			type: 'POST',//请求方式
			async:false,//设置同步
			dataType: 'json',//数据类型
			timeout: 300000,//请求相应退出时间
			error: function(){
				alert('加载数据校验配置文件错误');//读取错误消息
			},
			success: function(data){//读取成功后解析数据
				validataFields=data;
			}
		})
		return validataFields;
	}
	
	//表单数据校验
	//validataFields:校验json数据
	//mode:single单个字段校验, multiple字段名称重复校验默认为single 
	ws.tools.formValidate = function(validataFields,mode){
		
		if(!mode)mode="single";
		
		var errorMessages=new Array();
		//循环验证字段
		$.each(validataFields,function(i,e){
			var __name=e.name;
			
			//1.1取得字段对象（实际需要验证的字段对象）
			var _elements=getFieldByName(__name);
			for(var j=0;_elements&&j<_elements.length;j++){
				
				var __name=e.name;
				
				var __nameCn;
				if(mode=="multiple")
					__nameCn=e.nameCn+"["+(j+1)+"]";
				else
					__nameCn=e.nameCn;
				
				var __tips=e.tips;
				
				var __result=true;
				var __message;
				var __value=_elements[j].value;
				var __type=_elements[j].type;
				
				//1.1.1 必填验证,空值有2种情况，a.值不存在;b.值的长度为0
				if(e.required){
					//a.值不存在
					//b.长度为0
					if(!__value||__value.lengthByte()==0){
						__result=false;
					}
					//生成错误消息，如果存在自定义的错误消息就使用自定义的
					if(!__result){
						switch(__type){
						case "radio":
						case "checkbox":
						case "select":
							//优先使用自定义错误提示
							if(__tips)
								__message=__tips;
							else
								__message="请选择"+__nameCn;
							break;
						default:
							//优先使用自定义错误提示
							if(__tips)
								__message=__tips;
							else
								__message=__nameCn+"不能为空";
							break;
						}//end switch
					}
				}
				
				
				//1.1.2 必填验证通过后，进行值验证
				if(__result){
					switch(__type){
						case "text":
						case "password":
						case "hidden":
						case "textarea":
							var response=dataValidate(__nameCn,e.validateType,__value,e.minValue,e.maxValue,e.decimalDigits);
							if(!response.result){
								__result=false;
								
								//优先使用自定义错误提示
								if(__tips)
									__message=__tips;
								else
									__message=__nameCn+response.message;
							}
							break;
					}//end switch
				}//end if
				
				//1.2 组装错误
				if(!__result){
					errorMessages.push(__message);
				}
				
			}
		});
		
		
		var response={
			result:function(){
				if(errorMessages&&errorMessages.length>0)
					return false;
				else
					return true;
			}(),
			errorMessages:errorMessages
		}

		return response;
		
	};

})(ws.tools);