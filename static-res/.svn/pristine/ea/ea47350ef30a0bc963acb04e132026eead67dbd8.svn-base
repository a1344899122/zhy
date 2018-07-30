/**
 * 组件使用说明：
 * ！在需要生成字典数据的标签上，加入规定特殊标识便可生成
 * ！eg:<span data-label="radio" data-signCode="sys_user.sex_"  data-name="sex" data-disabled="true" data-escapevalue="2"></span>
 * !标识说明
 * data-label : 生成字典数据样式的标识（选值：radio,checkbox,select）
 * data-id  : 生成 radio或checkbox或select的id
 * data-name  : 生成 radio或checkbox或select的name
 * data-defaultvalue  :  生成 radio或checkbox或select的默认选中值，（注：checkbox 可以默认选中多个，用","隔开）
 * data-disabled      :  生成 radio或checkbox或select是否禁用的状态 （选值  true:禁用 ，false:可用）
 * data-width         :	 生成 radio或checkbox或select的默认宽度
 * data-numberofrows  :  生成 radio或checkbox或select的时候最大允许一行放置几个
 * data-escapevalue	  :  生成 radio或checkbox或select的的逃逸值，逃逸的不会显示
 */

$(function(){
	
	//1.获取页面中所有的字典表的sign_code_
	var sign_codes_="";
	$("body").find("*").each(function(){
		if($(this).data("signcode")){
			sign_codes_+=$(this).data("signcode")+",";
		}
	}),
	sign_codes_= sign_codes_.substring(0,sign_codes_.lastIndexOf(","));
	
	//2.去请求字典数据数据
	var data=ws.getEditWorkbook(sign_codes_);
	
	//3.去回显字典数据
	$("body").find("*").each(function(){
		
		
		if($(this).data("label")){
			var options={};
			var tempdata=[];
			var temp=eval('data.'+$(this).data("signcode"));
			
			for(var i in temp){
				tempdata[i]=temp[i]
			}
			options.data=tempdata;
			options.id=$(this).data("id");
			options.name=$(this).data("name");
			options.defaultValue=$(this).data("defaultvalue");
			options.disabled=$(this).data("disabled");
			options.custom_width=$(this).data("width");
			options.numberOfrows=$(this).data("numberofrows");
			options.escapeValue=$(this).data("escapevalue");
			
			if($(this).data("label")=="radio"){
				$(this).append(ws.getRadioHtml(options));
			}
			else if($(this).data("label")=="checkbox"){
				$(this).append(ws.getCheckboxHtml(options));
			}
			else if($(this).data("label")=="select"){
				$(this).append(ws.getSelectHtml(options));
			}
			
		}
	})
	
});

var ws={

	//获取字典表数据
	 getEditWorkbook:function (sign_codes){	
		var workbookData={};
		$.ajax({
			url: SystemGlobal.baseCommonServiceUrl + '/sys_workbook/findBySign_codesAndLock_status.action',
			//url: 'http://127.0.0.1:8080/base-server/common/sys_workbook/findBySign_codesAndLock_status.action',
			async: false,
			dataType:'json',
			type:'post',
			data:{
				"sign_code_":sign_codes,
				"lock_status_":0,
				"token" : $.cookie("token")
			},
			success : function(response){
				
				if (response.status == 0) {
					workbookData=response.data;
					
					
				}else{
					ws.tools.modalDialog.alert(response.msg);
				}
			  },
			  error : function() {
					ws.tools.modalDialog.alert("请求失败");
			  }
		});
		return workbookData;
	},
	
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
	getRadioHtml : function(options){
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
				escapeValues = (options.escapeValue+"").split(",");
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
					tempHtml='<div class="input-radio" '+width+'><input type="radio" name="'+options.name+'"  value="'+data[j].key_value_+'" '+checked+' '+ckDisabled+' \>'+
					'<span class="lbl">'+data[j].key_name_+'</span></div>';
					
					count++;
				}
				
				
				//判断是否换行
				if(number){
					if((count)%number==0){
						tempHtml+='<br>';
					}
				}
				
				html+=tempHtml;
				
			}
			
			return html;
				
		}	
	},


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
	getCheckboxHtml : function(options){
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
				escapeValues = (options.escapeValue+"").split(",");
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
					'<input type="checkbox" name="'+options.name+'" value="'+data[j].key_value_+'" '+checked+' '+ckDisabled+' />'+
					'<span class="lbl">'+data[j].key_name_+'</span>'+		
					'</div>';
					
					count++;
				}
				//判断是否换行
				if(number){
					if((count)%number==0){
						tempHtml+='<br>';
					}
				}
				html+=tempHtml;
			}
			
			return html;
		}
	},



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
	getSelectHtml : function(options){
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
				escapeValues = (options.escapeValue+"").split(",");
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
			html = '<select '+ckDisabled+' '+width+' name="'+options.selectName+'" id="'+options.id+'">'+tempHtml+'</select>';
			
			return html;
		}
	}
}

