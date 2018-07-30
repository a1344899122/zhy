/**
 * bootstrp的模态框的二次封装，用于系统弹出层
 * 使用：
 * 1.顶层弹出 ws.tools.modalDialog.show(options)
 * 2.关闭模态窗口： ws.tools.modalDialog.close("#modelDialogId");
 * 3.alert弹出框:ws.tools.modalDialog.alert("北冥有理");
 * alert-model弹出框:ws.tools.modalDialog.alert("北冥有理",model,callFun,options);  
 * 		model: 1 成功提示  2 失败提醒  3 警告 默认为1,
 * 		callFun:确定按钮调用的方法,
 *		options:弹出框其他属性设置，参照弹出框属性
 * 4.confirm弹出框:ws.tools.modalDialog.confirm("北冥有理",model,callFun,options); 
 *		model: 1 成功提示  2 失败提醒  3 警告 默认为1,
 *		callFun:确定按钮调用的方法,
 *		options:弹出框其他属性设置，参照弹出框属性
 *		confirm弹出框关闭  var aaa=ws.tools.modalDialog.confirm("北冥有理",model,callFun,options); 
 *						  ws.tools.confirm.close("#aaa");
 */


if(typeof ws =="undefined"){
	var ws=new Object();
}
if(typeof ws.tools =="undefined"){
	ws.tools=new Object();
}
if(typeof ws.tools.modalDialog =="undefined"){
	ws.tools.modalDialog=new Object();
}

//定义模态框的默认设置
var defaults ={
	id:null,//模态窗口的ID
	title: '标题',
	content: '<p>内容</p>',
	url : '',//iFrame请求地址 
	data:{},//请求参数
	width:70,//dialog宽度，百分比,超过100为实际宽度值
	height:90,//dialog高度，百分比,超过100为实际高度值
	buttonAlign:"center",
	isDraggable:true,//是否能够拖动
	showCloseButton:true,//显示关闭按钮
	closeEvent:null,//关闭按钮事件，点击右上角和默认关闭按钮的事件
	backdrop:'static',//指定一个静态的背景，当用户点击模态框外部时不会关闭模态框。 backdrop:boolean 或 string 'static' 默认值：true。
	keyboard:false,//当按下 escape 键时关闭模态框，设置为 false 时则按键无效。 默认的bootstrap模态对话框参数。keyboard: boolean默认值：true。
	dialogShow:null,//对话框即将显示事件
	dialogShown:null,//对话框已经显示事件
	dialogHide:null,//对话框即将关闭
	dialogHidden:null,//对话框已经关闭事件
	buttons:null,//json数组，[{id:"closeButton",name:"关闭",className:"btn btn-default",click:function(){}}]
	maximize:true//是否加入模块窗口进行最大化设置，true或false。默认true进行最大化设置。
};

//模态框自身用到的方法
var modalFunction={

	//随机数生成整数值
	  _random:function(a,b){
		return Math.random() > 0.5 ? -1 : 1;
	},

	//生成一个惟一的ID
	 _getModalID:function(){
		return "beamDialog-" + ['1', '2', '3', '4', '5', '6', '7', '8', '9', '0', 'Q', 'q', 'W', 'w', 'E', 'e', 'R', 'r', 'T', 't', 'Y', 'y', 'U', 'u', 'I', 'i', 'O', 'o', 'P', 'p', 'A', 'a', 'S', 's', 'D', 'd', 'F', 'f', 'G', 'g', 'H', 'h', 'J', 'j', 'K', 'k', 'L', 'l', 'Z', 'z', 'X', 'x', 'C', 'c', 'V', 'v', 'B', 'b', 'N', 'n', 'M', 'm'].sort(modalFunction._random).join('').substring(5, 20);
	},

	 //设置显示层次z-index
	 _setZIndex:function(modelDialog){
		
 		var zIndex1000=1000;
		
		//判断当前模态框的上一个兄弟是不是‘模态框’
		if($(modelDialog).prev().prev().hasClass("modal") || $(modelDialog).prev().prev().prev().hasClass("modal")){
			//获取上一个兄弟的z-index
			var botherZindex=$(modelDialog).prev().prev().css("z-index");
			$(modelDialog).css("z-index",parseInt(botherZindex)+20);
			//给下一个兄弟的设置z-index
			$(modelDialog).next().css("z-index",parseInt(botherZindex)+10);
		}else{
			$(modelDialog).css("z-index",parseInt(zIndex1000)+20);
			//给下一个兄弟的设置z-index
			$(modelDialog).next().css("z-index",parseInt(zIndex1000)+10);
		}
	},

	//设置模态框的高度、宽度、以及在页面垂直居中
	 _setModelDialogPosition:function(modelDialog,width,height,contentBody) {   
		
		
		//获取原来模态框中.modal-body的高度
		if(!contentBody){
			 var $clone = $(modelDialog).clone().appendTo('body.primary-bgcolor');
			 var contentBody=$clone.find('.modal-body').height();
			 $clone.remove();
		}
		
		var Topbody=$('body', window.parent.document);//获取最外层的body
		var winWidth=$(Topbody).width(); //获取最外层的body的宽度
		var winHeight=$(Topbody).height(); //获取最外层的body的高度
		
		
		var dialogWidth=0;   //可视的模态框的宽度
		var dialogHeight=0;  //可视的模态框的高度
		var contentHeight=0; //可视的模态框的高度
		var contentWidth=0;  //可视的模态框的宽度
		
		if(width<=100){
			dialogWidth=winWidth*width/100;     //设置模态框的宽度
			contentWidth=dialogWidth;			//存储设置好的态框的宽度
		}else{
			dialogWidth=width;
			contentWidth=dialogWidth;
		}
		
		if(height<=100){
			dialogHeight=winHeight*height/100;  //设置模态框的高度
			contentHeight=dialogHeight;    	    //存储设置好的态框的高度
		}else{
			dialogHeight=height;
			contentHeight=dialogHeight;
		}
		
		//设置.modal-header的高度
		if($(modelDialog).find(".modal-header").length>0){
			$(modelDialog).find(".modal-header").css("height",45);
			dialogHeight=dialogHeight-45;
		}
		
		//设置.modal-footer的高度
		if($(modelDialog).find(".modal-footer").length>0){
			$(modelDialog).find(".modal-footer").css("height",55);
			dialogHeight=dialogHeight-55;
		}
		
		
		//设置.modal-content的宽度
		$(modelDialog).find(".modal-content").css("width",dialogWidth);
			
		//设置.modal-body的高度，当原来内容的高度大于计算后的高度，使用原来的内容的高度，否则为计算后的高度
		if(dialogHeight<contentBody){
			dialogHeight=contentBody;
			$(modelDialog).find(".modal-body").css("height",contentBody);
		}else{
			$(modelDialog).find(".modal-body").css("height",dialogHeight);
			$(modelDialog).find(".modal-content").css("height",contentHeight); //设置.modal-content的高度
		}

	    
	    //解决弹出框滚动条的问题
		$(modelDialog).find("iframe").css("height",dialogHeight);
		
		//.设置modal-content position居中
		if($(modelDialog).find(".modal-content").length>0){
			var centerTop=winHeight/2-contentHeight/2;
			if(centerTop<=0){
				centerTop=0;
			}
			$(modelDialog).find(".modal-content").css("top",centerTop);
			
			var centerleft=winWidth/2-dialogWidth/2;
			$(modelDialog).find(".modal-content").css("left",centerleft);
		}
	    
	   //返回最后dialog设置的width、height、top值
	   window.dialogSetting={
			    contentBody:contentBody,
	    	    modelDialog:modelDialog,
	    		width:width,
	    		height:height
	    };
	    return window.dialogSetting;
	},

	//最大化
	 _setMaxDialog:function(modelDialog){
		
		$(modelDialog).find(".modal-header .fa-window-maximize").bind("click",function(){
			
			var Topbody=$('body', window.parent.document);
			var winWidth=$(Topbody).width();
			var winHeight=$(Topbody).height();
			
			var dialogHeight=winHeight;
			
			if($(modelDialog).find(".modal-header").length>0){
				$(modelDialog).find(".modal-header").css("height",45);
				dialogHeight=dialogHeight-45;
			}
			
			if($(modelDialog).find(".modal-footer").length>0){
				$(modelDialog).find(".modal-footer").css("height",55);
				dialogHeight=dialogHeight-55;
			}
			
			$(modelDialog).find(".modal-content").css("width",winWidth);
				
			$(modelDialog).find(".modal-body").css("height",dialogHeight);


	        //修改窗口图标
	        $(modelDialog).find(".modal-header .fa-window-maximize").parent().css("display","none");
	        $(modelDialog).find(".modal-header .fa-window-restore").parent().css("display","");
	        
	        //禁用拖动事件
	        $(modelDialog).find(".modal-content").draggable( 'disable');
	        $(modelDialog).find(".modal-content").css("left",0);
	        $(modelDialog).find(".modal-content").css("top",0);
	        
	        //解决弹出框滚动条的问题
			$(modelDialog).find("iframe").css("height",dialogHeight);
		});
	},

	//模态框大小还原
	 _restoreDialogSize:function(modelDialog,dialogSetting){
		 $(modelDialog).find(".modal-header .fa-window-restore").bind("click",function(){
			 modalFunction._setModelDialogPosition(dialogSetting.modelDialog,dialogSetting.width,dialogSetting.height,dialogSetting.contentBody);
			 
			 //修改窗口图标
			 $(modelDialog).find(".modal-header .fa-window-restore").parent().css("display","none");
		     $(modelDialog).find(".modal-header .fa-window-maximize").parent().css("display","");
		     
		     //激活拖动事件
		     $(modelDialog).find(".modal-content").draggable('enable');
		 })
	},

	 //拖动事件
	 _dialogDrag:function(modelDialog){
		var event_counter=$(modelDialog).find(".modal-content");
		event_counter.draggable({  
			cancel:".modal-body",  
			containment:"parent",
		    //cursor: 'move',   
		    refreshPositions: false,
		    scroll: false
		}); 
		
	},

	//按钮绑定点击事件
	//自定义按钮点击事件
	 _buttonClickEvent:function(modelDialog,options){
		
		if(options.buttons!=null) {
			
			for (var i = 0; i < options.buttons.length; i++) {
				if ((typeof options.buttons[i].click) == "function") {
					$(modelDialog,window.parent.document).find("#"+options.buttons[i].id).bind("click",options.buttons[i].click);
				}
			}
		}
		//关闭按钮事件
		if (options.showCloseButton) {
			$(modelDialog,window.parent.document).find("#closeButton").bind("click",options.closeEvent);
		}
		//右上角关闭按钮的点击事件
		if(options.closeEvent&&(typeof options.closeEvent) == "function"){
			$(modelDialog,window.parent.document).find("#rightTopBtn").bind("click",options.closeEvent);
		}
	},

	//绑定模态窗口本身的事件
	 _modelDialogEvent:function(modelDialog,options){
		 
		if(options.dialogShow&&(typeof options.dialogShow) == "function"){
			top.$(modelDialog).on('show.bs.modal', function() {
				options.dialogShow();
			});
		}
	 
		top.$(modelDialog).on('shown.bs.modal', function() {
			if(options.dialogShown&&(typeof options.dialogShown) == "function"){
				options.dialogShown();
			}
			//$("#loadinD",window.parent.document).remove(); 
		});
		
		
		if(options.dialogHide&&(typeof options.dialogHide) == "function"){
			top.$(modelDialog).on('hide.bs.modal', function() {
				options.dialogHide();
			});
		}
		top.$(modelDialog).on('hidden.bs.modal', function() {
			if(options.dialogHidden&&(typeof options.dialogHidden) == "function"){
				options.dialogHidden();
			}
			top.$(modelDialog,window.parent.document).remove();
			//$(modelDialog).remove();//删除模态窗口
		});
	},
	
	//模态框初始化
	 _init:function(container,options){
		 
		 
		 
		//判断参数是否有传id,没有的话随机生成
		if(options.id){
			var modalID = options.id;
		}else{
			var modalID = modalFunction._getModalID();
		}
		
		//生成按钮
		var buttonHtml="";
		if(options.buttons!=null) {
			for (var i = 0; i < options.buttons.length; i++) {
				buttonHtml += '<button  id="' + options.buttons[i].id + '" type="button" class="' + options.buttons[i].className + '">' + options.buttons[i].name + '</button>';
			}
		}
		
		//是否显示关闭按钮
		if (options.showCloseButton) {
			buttonHtml += '<button id="closeButton" type="button" class="btn btn-default"  data-dismiss="modal"><i class="ace-icon fa fa-times bigger-110" style="color:#ad4d4d"></i>关闭</button>';
		}
		
		//模态框的主要结构start
		var dialogHtml= 
			'   <div class="modal fade"  id="'+modalID+'" role="dialog" tabindex="-1" aria-hidden="true" data-backdrop="'+options.backdrop+'" data-keyboard="'+options.keyboard+'" style="display:block !important">'+
			'	   <div class="modal-dialog">'+
			'	      <div class="modal-content">'+
			'	         <div class="modal-header">'+
			'	         	<div class="modal-headerD" style="float:right;padding-right:5px;">';
		
	    //顶部是否有最大化按钮	
		if(options.maximize){
			dialogHtml+='	    <a href="#"  style="color:#fff;"  title="最大化"><i class="fa fa-window-maximize bigger-100"></i></a>';
			dialogHtml+='	    <a href="#" style="color:#fff;display:none;"   title="还原"><i class="fa fa-window-restore bigger-100"></i></a>';
		}
		
		//关闭按钮
		dialogHtml+=	'	    <a href="#" id="rightTopBtn"  data-dismiss="modal" aria-hidden="true" title="关闭" style="color:#fff;padding-left:10px;"><i class="fa fa-times bigger-110"></i></a>';
		dialogHtml+=    '	</div>';
		
		//标题
		dialogHtml+=	'	<h3 class="modal-title" id="myModalLabel">'+options.title+'</h3>';
		dialogHtml+=	'</div>';
		
		//判断是否有url
		if(options.url!=''){
			dialogHtml+='<div class="modal-body"><iframe name="Iframe_modeDialog_'+modalID+'" id="Iframe_modeDialog_'+modalID+'" frameborder="0" width="100%" height="100%" ></iframe></div>';
		}else{
			dialogHtml+='<div class="modal-body modal-alert">'+options.content+'</div>';
		}
		
		//底部按钮
		if (buttonHtml) {
			dialogHtml+='<div class="modal-footer" style="text-align:'+options.buttonAlign+'">'+buttonHtml+'</div>';
		};
		
		//模态框的主要结构end
		dialogHtml+=
			'	      </div>'+
			'	   </div>'+
			'	</div>';
		
		//在页面最外层的body添加模态框页面
		container.append(dialogHtml);
		
		var modelDialog = $(container).find('#' + modalID);
		
		var contentBody=null;
		//设置模态框垂直居中显示
		modalFunction._setModelDialogPosition(modelDialog,options.width,options.height,contentBody);
		
		//按钮绑定事件
		modalFunction._buttonClickEvent(modelDialog,options);
		
		//绑定拖动事件
		if(options.isDraggable){
			modalFunction._dialogDrag(modelDialog);
		}
		
		//绑定本身的事件
		modalFunction._modelDialogEvent(modelDialog,options);
		
		if(options.url!=''){
			
			//远程获取数据
			/*modelDialog.find(".modal-body").load(options.url, options.data,function() {
				modelDialog.modal('show');
				//设置弹出层z-index
				_setZIndex(container);
			});*/
			
			//参数处理
			var requestParams="";
			var data=options.data;
			if(options.data){
				 for(var key in options.data){
					 var param="&"+key+"="+data[key];
					 requestParams+=param;
				 }
			}
			var requestUrl="";
			if(options.url.indexOf("?") != -1) { //当url带有参数时
				requestUrl=options.url+requestParams;
			}else{
				requestUrl=options.url+"?"+requestParams.substring(1);
			}
			
			//iframe跳转
			//ws.tools.location.href(requestUrl,"Iframe_modeDialog_"+modalID);
			top.$("#"+"Iframe_modeDialog_"+modalID).attr("src",requestUrl);
			
			top.$(modelDialog).modal('show');
			
			//设置弹出层z-index
			modalFunction._setZIndex(modelDialog);
			
			
		}else{
			top.$(modelDialog).modal('show');
			
			//设置弹出层z-index
			modalFunction._setZIndex(modelDialog);
		}
		
		if(options.maximize){
			//最大化事件
			modalFunction._setMaxDialog(modelDialog);
			
			//模块框还原事件
			modalFunction._restoreDialogSize(modelDialog,window.dialogSetting);
		}
	
		/*模态框加载iframe时增加等待效果*/
		/*if(top.$(modelDialog).find(".modal-content") && top.$(modelDialog).find(".modal-body").find('iframe').length!=0  && !top.$(modelDialog).find(".modal-body").hasClass("modal-alert")){
		    var loading=$('<div id="loadinD"><center><span style="font-size:25px !important"><i class=\"fa fa-spinner fa-spin\" style="font-size:25px !important"></i>内容加载中,请稍等...</span></center></div>');
			top.$(modelDialog).find(".modal-content").append(loading);
		}*/
		
		return modelDialog;
	}

}

;(function(modalDialog){
	
	 $.fn.modalDialog= function(){
		this.container=this;
		this.show=function(options){
			var options = $.extend({},defaults, options);
			return  modalFunction._init(this.container,options)
		};
		
		this.alert=function(msg,model,callFun,options){
			var	icon='<i class="icon-check" style="color: #5CB85C;font-size:40px !important"></i>';
			var	buttonClass='btn btn-success';
			
			if(model==2){
				icon='<i class="icon-close" style="color: #D9534F;font-size:40px !important"></i>';
				buttonClass='btn btn-danger';
			}
			if(model==3){
				icon='<i class="icon-info" style="color:#F0AD4E;font-size:40px !important"></i>';
				buttonClass='btn btn-warning';
			}
			
			var id=modalFunction._getModalID();
			var contentHtml='<table style="height:100%;width:100%;">'+
			  '<tbody>'+
				'<tr id="autoClose_'+id+'">'+
				  '<td colspan="2" align="center"><span>3秒后自动关闭</span></td>'+
			    '</tr>'+
			    '<tr>'+
			      '<td style="width:60px !important;font-size:40px !important;">'+icon+'</td>'+
			      '<td><span>'+msg+'</span></td>'+
			    '</tr>'+
			  '</tbody>'+
			'</table>';
			
			var settings={
				id:id,
				title:"系统提示",
				content:contentHtml,
				width:500,
				height:200,
				showCloseButton:false,
				maximize:false
			};
			
			settings.buttons=[{
				id:"okButton",
				name:"确定",
				className:buttonClass,
				click:function(){
					if(callFun&&(typeof callFun) == "function"){
						callFun();
					}else{
						$("#"+settings.id).modalDialog().close();
					}
				}
			}];
			
			var options=$.extend({},settings, options);
			
			options = $.extend({},defaults, options);
			
			var modelDialog = modalFunction._init(this.container,options);
			
			if(!model)model=1;
			if(model==1||model==2){
				var countSecond=3;
				setInterval(function(){
					countSecond--;
					$("#autoClose_"+id).find("span").html(countSecond+"秒后自动关闭");
					if(countSecond==0){
						$("#"+id).modalDialog().close();
					}
				},1000);
				
				setTimeout(function(){
				},3000);//延时
			}else{
				$("#autoClose_"+id).remove();
			}
			
			return modelDialog;
			
		};
		
		//confirm弹出框
		//msg :提示消息
		//callFun:确定按钮调用的方法
		//options:弹出框其他属性设置，参照弹出框属性
		this.confirm=function(msg,callFun,options){
			
			var	icon='<i class="icon-question" style="color:#D9534F;font-size:40px !important"></i>';
			
			var contentHtml='<table style="height:100%">'+
			  '<tbody>'+
			    '<tr>'+
			      '<td style="width:60px;font-size:40px !important;">'+icon+'</td>'+
			      '<td><span>'+msg+'</span></td>'+
			    '</tr>'+
			  '</tbody>'+
			'</table>';
			
			var settings={
				id:modalFunction._getModalID(),
				title:"系统警告",
				content:contentHtml,
				width:500,
				height:200,
				showCloseButton:false,
				maximize:false
			};
			
			if(callFun&&(typeof callFun) == "function"){
				settings.buttons=[{
					id:"okButton",
					name:"确定",
					className:"btn btn-danger",
					click:callFun
				},
				{
					id:"cancelButton",
					name:"取消",
					className:"btn btn-default",
					click:function(){
						modalDialog.close("#"+options.id)
					} 
				}];
			}
				
			var options=$.extend({},settings, options);
			
			options = $.extend({},defaults, options);
			
			
			var modelDialog = modalFunction._init(this.container,options);
			
			return modelDialog;
			
		};

		this.close=function(){
			/*var modelDialogId = this.attr("id");
			var iframe=top.$("#Iframe_modeDialog_"+modelDialogId);
			if(iframe){
				iframe[0].contentWindow.document.write('');
				iframe[0].contentWindow.close();
				iframe.attr('src', "about:blank");
				iframe.remove();
			}*/
			 //top.$("body").find(".loading").remove();
			 //document.body.style.overflow='auto';
			 
			 this.modal('hide');
		};
		
		return this;
	}
	
	
	//show方法
	modalDialog.show=function(options){
		top.$('body').modalDialog().show(options);
	};
		
	//alert弹出框
	//msg :提示消息
	//model: 1 成功提示    2 失败提醒  3 警告 默认为1
	//callFun:确定按钮调用的方法
	//options:弹出框其他属性设置，参照弹出框属性
	modalDialog.alert=function(msg,model,callFun,options){
		top.$('body').modalDialog().alert(msg,model,callFun,options);
	};
		
	//confirm弹出框
	//msg :提示消息
	//callFun:确定按钮调用的方法
	//options:弹出框其他属性设置，参照弹出框属性
	modalDialog.confirm=function(msg,callFun,options){
		return top.$('body').modalDialog().confirm(msg,callFun,options);
	};
		
	modalDialog.close=function(dialogId){
		top.$(dialogId).modalDialog().close();
	};
			 
})(ws.tools.modalDialog);


//解决ie9，ie8下模态框等待事件去除问题
/*window.onload = function(){ 
	
	var browser=navigator.appName 
	var b_version=navigator.appVersion 
	var version=b_version.split(";"); 
	
	if(version[1]){
		var trim_Version=version[1].replace(/[ ]/g,""); 
		if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE9.0") 
		{ 

			 if($(".modal.fade.in",window.parent.document).length != 0){
					$("#loadinD",window.parent.document).remove(); 
			 }
		} 
		else if(browser=="Microsoft Internet Explorer" && trim_Version=="MSIE8.0") 
		{ 

			 if($(".modal.fade.in",window.parent.document).length != 0){
					$("#loadinD",window.parent.document).remove(); 
			 }
		}
		
	}
	//去除火狐下模态框等待事件
	else{
		 if($(".modal.fade.in",window.parent.document).length != 0){
				$("#loadinD",window.parent.document).remove(); 
		 }
	}
	
	
}*/
