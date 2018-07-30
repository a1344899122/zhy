
if(typeof ws =="undefined"){
		var ws=new Object();
}//end if
if(typeof ws.tools =="undefined"){
	ws.tools=new Object();
}

;(function(tools){
	

	/**
	 * 根据字典表数据生成radio的HTML  ws.tools.getRadioHtml(options);
	 * 参数：所有参数必须写全
	 * options={
	 * 	data:字典表中的数据,
	 *  radioId:radio所在的div的ID,
	 *  radioName:radio的name,
	 *  defaultValue：默认选中的值,
	 *  disabled:是否不可用 true/false
	 *  custom_width:100,自定义的宽度100
	 *  numberOfrows:3,一行放置3个radio
	 *  returnHtml:false, 是否返回生成的Html  true/false 默认false
	 *  escapeValue:"1,2" 逃逸值不显示，多个用逗号分隔
	 * }
	 */
	tools.getRadioHtml = function(options){
		if(options.data){
			var data = options.data;
			var dv = [];
			var width = "";
			var number ="";
			if (options.defaultValue != undefined && options.defaultValue != null) {
				dv = options.defaultValue;
			}
			
			var ckDisabled="";
			if(options.disabled)ckDisabled="disabled";
			
			var html='';
			
			//判断是否有传宽度
			if (options.custom_width != undefined && options.custom_width != null) {
				width = "style=width:"+options.custom_width+'px;';
			}
			
			//一行要盛放几个
			if (options.numberOfrows != undefined && options.numberOfrows != null) {
				number = options.numberOfrows;
			}
			//分隔逃逸值
			var escapeValues=[];
			if(options.escapeValue){
				escapeValues = options.escapeValue.split(",");
			}
			var count=0;
			for (var j=0;j<data.length;j++) {
				var checked = "";
				
					if (data[j].key_value_ == dv) {
						checked = "checked";
					
				}
				var isShow = true;
				for(var i=0;i<escapeValues.length;i++){
					if(escapeValues[i]==data[j].key_value_){
						isShow = false;
					}
				}
				var tempHtml='';
				if(isShow){
					tempHtml='<div class="input-radio" '+width+'><input type="radio" name="'+options.radioName+'"  value="'+data[j].key_value_+'" '+checked+' '+ckDisabled+' \>'+
					'<span class="lbl">'+data[j].key_name_+'</span></div>';
					
					count++;
				}
				
				
				//判断是否换行
				if(number){
					if((count)%number==0){
						tempHtml+='<div style="float:left;width:100%"></div>';
					}
				}
				
				html+=tempHtml;
				
			}
			if(options.returnHtml){
				return html;
			}else{
				$("#" + options.radioId).append(html);
			}
				
		}	
	}


	/**
	 * 根据字典表数据生成checkbox的HTML  ws.tools.getCheckboxHtml(options);
	 * 参数：所有参数必须写全
	 * options={
	 *  data:字典表中的数据,
	 *  checkId:checkbox所在的div的ID,
	 *  checkName:checkbox的name,
	 *  defaultValue：默认选中的值，多个可以使用英文逗号分隔,
	 *  disabled:是否不可用 true/false
	 *  custom_width:100,自定义的宽度100
	 *  numberOfrows:3,一行放置3个checkbox 
	 *  returnHtml:false, 是否返回生成的Html  true/false 默认false
	 *  escapeValue:"1,2" 逃逸值不显示，多个用逗号分隔
	 * }
	 */
	tools.getCheckboxHtml = function(options){
		if(options.data){
			var data = options.data;
			var dv = [];
			var width = "";
			var number ="";
			
			//判断是否有默认选中的
			if(options.defaultValue!=null&&options.defaultValue!='undefined'){
				if (typeof(options.defaultValue)=='string') {
					dv = options.defaultValue.split(",");
				}
				if(typeof(options.defaultValue)=='number'){
					var defaultValue=options.defaultValue;
					dv=defaultValue.toString();
				}
			}
			
			var ckDisabled="";
			if(options.disabled){ckDisabled="disabled";}
			
			var html='';
			
			//判断是否有传宽度
			if (options.custom_width != undefined && options.custom_width != null) {
				width = "style=width:"+options.custom_width+'px;';
			}
			
			//一行要盛放几个
			if (options.numberOfrows != undefined && options.numberOfrows != null) {
				number = options.numberOfrows;
			}
			//分隔逃逸值
			var escapeValues=[];
			if(options.escapeValue){
				escapeValues = options.escapeValue.split(",");
			}
			var count=0;
			for (var j=0;j<data.length;j++) {
				var checked = "";
				for ( var i in dv) {
					if (data[j].key_value_ == dv[i]) {
						checked = "checked";
					}
				}
				var isShow = true;
				for(var i=0;i<escapeValues.length;i++){
					if(escapeValues[i]==data[j].key_value_){
						isShow = false;
					}
				}
				var tempHtml='';
				if(isShow){
					tempHtml='<div class="input-checkbox" '+width+'>'+
					'<input type="checkbox" name="'+options.checkName+'" value="'+data[j].key_value_+'" '+checked+' '+ckDisabled+' />'+
					'<span class="lbl">'+data[j].key_name_+'</span>'+		
					'</div>';
					
					count++;
				}
				//判断是否换行
				if(number){
					if((count)%number==0){
						tempHtml+='<div style="width:100%"></div>';
					}
				}
				html+=tempHtml;
			}
			
			if(options.returnHtml){
				return html;
			}else{
				$("#" + options.checkId).append(html);
			}
			
			
		}
	}



	/**
	 * 根据字典表数据生成select的HTML   ws.tools.getSelectHtml(options);
	 * 参数：所有参数必须写全
	 * options={
	 * 	data:字典表中的数据,
	 *  selectId:select所在的div的ID,
	 *  selectName:select的name,
	 *  defaultValue：默认选中的值,
	 *  disabled:是否不可用 true/false
	 *  custom_width:100,自定义的宽度100
	 *  returnHtml:false, 是否返回生成的Html  true/false 默认false
	 *  escapeValue:"1,2" 逃逸值不显示，多个用逗号分隔
	 * }
	 */
	tools.getSelectHtml = function(options){
		if(options.data){
			var data = options.data;
			
			var dv = [];
			var width = "";
			var ckDisabled="";
			
			//判断selcet是否可以选中
			if(options.disabled){ckDisabled="disabled";}
			
			//判断是否有默认选中的select
			if(options.defaultValue!=null&&options.defaultValue!='undefined'){
				if (typeof(options.defaultValue)=='string') {
					dv = options.defaultValue.split(",");
				}
				if(typeof(options.defaultValue)=='number'){
					var defaultValue=options.defaultValue;
					dv=defaultValue.toString();
				}
			}
				
			//判断是否有传宽度
			if (options.custom_width != undefined && options.custom_width != null) {
				width = "style=width:"+options.custom_width+'px;';
			}
			//分隔逃逸值
			var escapeValues=[];
			if(options.escapeValue){
				escapeValues = options.escapeValue.split(",");
			}
			var html='';
			var tempHtml='<option value="">请选择</option>';
			for (var j=0;j<data.length;j++) {
				var selected = "";
				for ( var i in dv) {
					if (data[j].key_value_ == dv[i]) {
						selected = "selected";
					}
				}
				var isShow = true;
				for(var i=0;i<escapeValues.length;i++){
					if(escapeValues[i]==data[j].key_value_){
						isShow = false;
					}
				}
				if(isShow){
					tempHtml += '<option value="'+data[j].key_value_+'" '+selected+'>'+data[j].key_name_+'</option>';
				}
			
			}
			html = '<select '+ckDisabled+' '+width+' name="'+options.selectName+'">'+tempHtml+'</select>';
			
			if(options.returnHtml){
				return html;
			}else{
				$("#" + options.selectId).append(html);
			}
		}
	}

})(ws.tools);

