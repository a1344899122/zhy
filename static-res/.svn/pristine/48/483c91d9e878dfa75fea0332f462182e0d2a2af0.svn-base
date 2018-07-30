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
	var options={
		secureuri:false       //是否启用安全提交,默认为false
		,multiple:false       //单文件或多文件上传，false:单文件；true：多文件上传
		,allowFileType:""     //允许上传的文件类型，多个使用竖线分隔，默认不限制文件类型
		,fileFieldName:'file' //文件选择框的名称，与后台相关。默认值：file
		,singleFileName:""    //指定文件名称，仅单文件上传支持
		,data:{category_code:"aaaa"}  //选填，文件上传时，其他参数。后台要进行相应的处理
	}

	/////////////////////////////////////////////////////////////////////
	//********上传文件*********//
	/* ie9与html5不同之处
	 * 1.file字段的建立方式不同
	 * 2.form表单的提交方式不同
	 **/
	component.uploadFile=function(s){
		options = $.extend(options, s);
		
        if (jQuery.browser.version == "9.0" || jQuery.browser.version == "10.0") {
        	ws.component.uploadFile_ie9(options);
        } else if (jQuery.browser.version == "6.0" || jQuery.browser.version == "7.0" || jQuery.browser.version == "8.0") {
        	alert("文件上传不支持IE6/7/8");
	    } else {
	    	ws.component.uploadFile_html5(options);
	    }
	};//end function
	

})(ws.component);
/*******************************************************************************************************/





	

	
	