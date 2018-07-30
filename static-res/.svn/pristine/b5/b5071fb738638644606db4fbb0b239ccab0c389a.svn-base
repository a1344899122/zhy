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
	var options={};
	/////////////////////////////////////////////////////////////////////
	var _createUploadIframe=function(frameId, uri) {
        //create frame
		var io = document.createElement('iframe');
        io.id = frameId;
        io.name = frameId;
        
        document.body.appendChild(io);
        $("#"+frameId).hide();

    }//end _function
	
	//_///////////////////////////////////////////////////////////////////
	//弹出窗口。默认隐藏，上传时间长时将显示
	var _createUploadDivView=function(divViewId) {
		//1.底层蒙版
		var divViewBg=$("<div id='"+divViewId+"_bg' style='width:100%;height:100%;top:0px;left:0px;position:absolute;filter: Alpha(opacity=50);opacity:0.5; background:#000;display:none;z-index: 99999999;' />");
		divViewBg.appendTo('body');
		
		var div_width=360;
		var div_height=240;
		
		var div_left=div_width/2;		
		var div_top=div_height/2;	
		
		//2.窗口
		var divView=$("<div id='"+divViewId+"' style='position: absolute;top:50%;left:50%;margin-left:-"+div_left+"px; margin-top:-150px; padding:5px 5px 5px 5px ; border:6px solid #ccc;background:#fff; display:none;z-index: 999999999;' />");
		divView.width(div_width);
		divView.height(div_height);
		divView.appendTo('body');
		
        //3.建立进度条
		var progressBarDiv=$("<div id='"+divViewId+"_bar' style='margin-left:80px; margin-top:30px;text-align:center;width:170px;height:66px;display:none;'><img src='"+SystemGlobal.staticResUrl+"/js/ws-component/ws-upload/progressBar.gif'><br>正在上传</div>");
		progressBarDiv.appendTo(divView);
		
        //4.建立按钮
		var buttonBarDiv=$("<div id='"+divViewId+"_button' style='margin-top:30px;text-align:center;'></div>");
		buttonBarDiv.appendTo(divView);

	}//end _function
	
	//_///////////////////////////////////////////////////////////////////
	//create form 
	var _createUploadForm=function(url,formId,target_frameId,fileFieldId,fileFieldName, data,divViewId,options) {
		if(!fileFieldName)
			fileFieldName='file';
		//1.建立form
        var form = $("<form  action='"+url+"' method='POST' name='" + formId + "' id='" + formId + "' target='"+target_frameId+"' enctype='multipart/form-data' ></form>");
        form.appendTo($("#"+divViewId+"_button"));//追加到div
        
    ////1.1重点内容：form提交后，监听iframe内容变化
        /*$("#"+formId).submit(function(){
        	//a.上传文件类型验证
        	var fileFieldValue = $("#"+fileFieldId).val();
        	if(options.allowFileType){
	        	var typeValidateResult = _checkFileType(fileFieldValue,options.allowFileType); //格式的验证
	        	if(typeValidateResult.statusCode!=100){
	        		options.error(typeValidateResult.statusCode,typeValidateResult.errorMessage);
	        		return false;//验证失败，阻止提交
	        	}
        	}
        	
        	//b.监听iframe内容变化，等待上传成功
        	$("#"+target_frameId).load(function(){
        		var responseText=_uploadCallback(target_frameId);
                if(responseText&&responseText.length>0){
					try {
						alert(responseText);
						var jsonData=eval('(' + responseText + ')');
						options.success(jsonData);
					}catch(e) {
					    alert("文件上传错误：返回格式非json数据！或未找到上传地址！");
					}
                }
                //结束，做善后处理
                _over(target_frameId,divViewId);
        	});
        	//c.显示进度条
        	_displayProgressBar(divViewId,divViewId+"_bar");
        });*/
        
        
        
        
        //2.建立上传字段
        var fileField;
        //2.1 ie9,建立文件上传字段
        {
        	fileField=$("<span style='font-size:12px;'>选择文件</span> <input id='"+fileFieldId+"' name='"+fileFieldName+"' type='file' size='25'><br><br>");
        	fileField.appendTo(form);
        	var submitField=$("<input id='"+fileFieldId+"_submit' type='button' onclick='ws.component._submit2_ie9()' value='上传'> <span>&nbsp;&nbsp;</span> ");
        	submitField.appendTo(form);
        	var submitField=$("<input id='"+fileFieldId+"_close' type='button'  value='关闭'> ");
        	submitField.appendTo(form);
        	
        	$("#"+fileFieldId+"_close").click(function(){
        		_over(target_frameId,divViewId);
        	})
        	
            
        	//显示上传窗口
            $("#"+divViewId+"_bg").show();
            $("#"+divViewId).show();
        }
        
        
        //2.1 指定文件名参数的处理
        if(!options.multiple){
        	$('<input type="hidden" name="singleFileName" value="' + options.singleFileName + '" />').appendTo(form);
        }
        
        
        //2.2 其他参数
        if (data) {
            for (var i in data) {
                $('<input type="hidden" name="' + i + '" value="' + data[i] + '" />').appendTo(form);
            }
        }
    }//end _function
	
	//验证文件上传的类型
	var _checkFileType=function(fileFieldValue,allowFileType){
		var result={
				statusCode:100//正确
		};
		
		if (fileFieldValue.length == 0) {
			result.statusCode=-100;
			result.errorMessage="错误提示:请选择需要上传的文件！";
		} else {
			var strs=fileFieldValue.split(","); //字符分割 
			for(var i=0;i<strs.length;i++){
				if (!eval("/\.("+allowFileType+")$/").test(strs[i])){
					result.statusCode=-101;
					result.errorMessage="错误提示:文件类型必须是"+allowFileType.replaceAll('\\|',',')+"中的一种！";
					break;
				}
			}
		}
		return result;
	}
	
	//上传成功，获取返回结果
	var _uploadCallback = function(frameId) {
		var responseText;
        // Wait for a response to come back 
        var io = document.getElementById(frameId);
        try {
            if (io.contentWindow) {
                responseText = io.contentWindow.document.body ? io.contentWindow.document.body.innerHTML: null;
            } else if (io.contentDocument) {
                responseText = io.contentDocument.document.body ? io.contentDocument.document.body.innerHTML: null;
            }
        } catch(e) {
            //jQuery.handleError(s, xml, null, e);
        }
        
        //处理返回结果
        responseText = responseText.replace("<pre>","");
        responseText = responseText.replace("</pre>","");
        
        return responseText;
    }
	
	//显示进度条，100毫秒内没有结束就显示
	var _displayProgressBar=function(divViewId){
		//延时1秒，没有结束就显示进度条
		setTimeout(function() {
			//显示上传窗口
			$('#'+divViewId+"_bar").show();
        },100);
	}
	
	///////////////////////////////////////////
	//上传结束
	var _over=function(frameId,divViewId){
		try{
			$("#"+divViewId).remove();	
			$("#"+divViewId+"_bg").remove();	
			$("#"+frameId).remove();
		} catch(e) {
			jQuery.handleError(s, xml, null, e);
		}
	}//end _function

	/////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////
	/////////////////////////////////////////////////////////////////////
	
    ////1.1重点内容：form提交后，监听iframe内容变化
	component._submit2_ie9=function(){
		//a.验证上传文件类型
    	var fileFieldValue = $("#"+options.fileFieldId).val();//在html5中，如果是选择了多个文件，此方法只能得到一个文件名称，因此需要使用下面的方法
    	if(options.allowFileType){
        	var typeValidateResult = _checkFileType(fileFieldValue,options.allowFileType); //格式的验证
        	if(typeValidateResult.statusCode!=100){
        		options.error(typeValidateResult.statusCode,typeValidateResult.errorMessage);
        		return false;//验证失败，阻止提交
        	}
    	}
    	
    	//b1.隐藏按钮条
		$("#"+options.divViewId+"_button").hide();
    	//b2.显示进度条
    	_displayProgressBar(options.divViewId);
    	
    	//c.监听iframe内容变化，等待上传成功
    	$("#"+options.frameId).load(function(){
    		var responseText=_uploadCallback(options.frameId);
            if(responseText&&responseText.length>0){
				try {
					var jsonData=eval('(' + responseText + ')');
					options.success(jsonData);
				}catch(e) {
				    alert("文件上传错误：返回格式非json数据！或未找到上传地址！");
				}
            }
            //结束，做善后处理
            _over(options.frameId,options.divViewId);
    	});
    	
    	//d.上传文件
    	$("#"+options.formId).submit();
    }
	
	//********上传文件*********//
	component.uploadFile_ie9=function(s){
		options = $.extend(options, s);
        var id = new Date().getTime() ;
        options.frameId = 'wsUploadFrame' + id;
        options.divViewId='wsDivView' + id;
        options.formId = 'wsUploadForm' + id;
        options.fileFieldId='wsfileFiled' + id;
        
        _createUploadIframe(options.frameId, options.secureuri);
        _createUploadDivView(options.divViewId);
        _createUploadForm(options.url,options.formId,options.frameId,options.fileFieldId, options.fileFieldName, options.data,options.divViewId,options);
	};//end function
	

})(ws.component);
/*******************************************************************************************************/





	

	
	