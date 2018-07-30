/**
 * 编辑页面数据填充，data为json格式数据
 * form中的页面元素的name属性必须与json的key保持一致
 * formId为当前调用方法的选择器，即form表单的ID
 * 使用：ws.tools.formEdit(formId,data);
 */

if(typeof ws =="undefined"){
		var ws=new Object();
}//end if
if(typeof ws.tools =="undefined"){
	ws.tools=new Object();
}

;(function(tools){
	tools.formEdit = function(formId,data){
	     $(formId).each(function(){
	        var input, name;
	        if(data == null){this.reset(); return; }
	        for(var i = 0; i < this.length; i++){  
	            input = this.elements[i];
	            //checkbox的name可能是name[]数组形式
	            name = (input.type == "checkbox")? input.name.replace(/(.+)\[\]$/, "$1") : input.name;
	            if(data[name] == undefined) continue;
	            switch(input.type){
	           
	            case "checkbox":
                    if(data[name] == ""){
                        input.checked = false;
                    }else{
                    	var values=data[name].toString().split(",");
        				for(var j in values){
        					if(input.value==values[j]){
        						input.checked = true;
        					}
        				}
                    }
                break;
	                case "radio":
	                    if(input.value == data[name]){
	                        input.checked = true;
	                    }else{
	                    	input.checked = false;
	                    }
	                break;
	                case "button": break;
	                case "file": break;
	                default: input.value = data[name];
	            }
	        }
	    });
	};

	/**
	 * 查看页面数据填充，data为json格式数据
	 * form中显示字段的位置所在div的id属性必须与json中的key保持一致
	 * 使用：ws.tools.formView(data);
	 */
	tools.formView = function(fromId,data){
		var from=fromId;
		if(data == null){return; }
		$.each(data, function(k, v) {
			td=$(fromId).find("td[id='"+k+"']");
			flag=true;
			if($(td).find("input[type='radio'][name='"+k+"']").length>0){
				$($(td).find("input[type='radio'][name='"+k+"']")).each(function(){
					$(this).attr("disabled",true);
					if($(this).val()==v){
						$(this).attr("checked",true);
					}
				});
				flag=false;
			}
			if($(td).find("input[type='checkbox'][name='"+k+"']").length>0){
				$($(td).find("input[type='checkbox'][name='"+k+"']")).each(function(){
					$(this).attr("disabled",true);
					
					var values=v.split(",");
					for(i in values){
						if($(this).val()==i){
							$(this).attr("checked",true);
						}
					}
				});
				flag=false;
			}
			if($(td).find("select[name='"+k+"']").length>0){
				$($(td).find("select[name='"+k+"']")).attr("disabled",true);
				$("select[name="+k+"] option[value="+v+"]").attr("selected",true)
				flag=false;
			}
			
			if($(td).find("textarea[name='"+k+"']").length>0){
				$($(td).find("textarea[name='"+k+"']")).each(function(){
					$(this).attr("disabled",true);
					$(this).append(v);
				});
				
				flag=false;
			}
			
			if(flag){
				$(td).append(v);
			}
		});
	};

	/**
	 * 表单数据获取，obj为json格式数据
	 * 对form中input select textarea 的value封装
	 * 使用：ws.tools.formData(FormId);
	 */
	tools.formData=function(FormId){
		var serializeObj={};
		
		var array=$(FormId).serializeArray();
		
		$(array).each(function(){
			if(serializeObj[this.name]&&this.value){
				if($.isArray(serializeObj[this.name])){
					serializeObj[this.name].push(this.value);
				}else{
					serializeObj[this.name]=[serializeObj[this.name],this.value];
				}
			}else{
				serializeObj[this.name]=this.value;
			}
		});
		return serializeObj;
		
		/*
		var formId=$(FormId).attr("id");
		var obj = {};
		var item = $("#"+formId+" input"+",#"+formId+" select"+",#"+formId+" textarea");
		var type = '';
		var group = [];
		item.each(function(i){
			type = $(this).attr("type");
			if(type=='radio'){
				if($("input[name="+$(this).attr("name")+"]:checked").length==0){
					obj[$(this).attr("name")] = "";
				}else{
					obj[$(this).attr("name")] = $("input[name="+$(this).attr("name")+"]:checked").val();
				}
				
			}else if(type=='checkbox'){
				if($.inArray($(this).attr("name"), group)>= 0){
					$(this).is(":checked") ? obj[$(this).attr("name")] += $(this).val()+',' : ''; 
				}else{
					group.push($(this).attr("name"));
					$(this).is(":checked") ? obj[$(this).attr("name")] = ($(this).val()+',') :  obj[$(this).attr("name")] = ''; 
				}
			}else{
				if($(this).attr("name") != undefined){
					obj[$(this).attr("name")] = $(this).val();
				}
				else{
					obj[$(this).attr("name")] += ',' + $(this).val();
				}
					
	        }
		})

	    if(group.length > 0){
	        $.each(group,function(i,e){            
	            obj[e] = obj[e].substr(0,obj[e].length-1);
	        })
	    }

		return obj;*/
	}
	
})(ws.tools);

