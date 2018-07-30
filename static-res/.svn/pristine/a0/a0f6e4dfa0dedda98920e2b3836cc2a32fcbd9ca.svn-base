$(function(){
/*	
	//获取当前系统的资源菜单数据
	function getResource(){
		
		//存储当前系统的资源
		var resoouceArr=[];
		
		ws.tools.ajaxRequest({
			url:"http://127.0.0.1:8080/base-server/sso/user/getUserResources.action",
			dataType : 'json',
			async:false,
	   		type : 'POST',
			data:{
				"token" : $.cookie("token"),
				"system_code" : 'award' //当前项目系统标识码
			},
			successfun : function(response) {
				
				if(response.status==0){
				    $.each(response.data,function(i,e){
				    	
				    	if(e.in_code.length > 3 && e.resource_type==1){
	   						var resoouceJson = {};
	   						resoouceJson.id=e.in_code;
	   						resoouceJson.name=e.resource_name;
	   						resoouceJson.icon=e.resource_icon;
	   						resoouceJson.url=e.resource_url;
							resoouceJson.pId=e.in_code.substring(0,e.in_code.length-3);
							if(e.in_code.length-3 == 3){
								resoouceJson.pId = e.in_code.substring(0,3);
							}
	   						resoouceArr.push(resoouceJson);
				    	}
					})
				}else{
					ws.tools.modalDialog.alert(response.msg,null,{width:20,height:10});
	   			}
	   		},
	   		errorfun : function() {
	   			top.$("body").modalDialog().alert("请求失败");
	   		}
		})
		
		return resoouceArr;
	}
*/	
	 //初始化body高度
	 $("body").css("height",$(window).height());
	 //页面框架加载完毕，设置右侧内容宽度，高度
	 $("#left-content").css("height",$('body').height()-$("#top-content").height());
	 $("#right-content").css("width",$('body').width()- $("#left-content").width());
	 $("#right-content").css("height",$('body').height()-$("#top-content").height());
	 //设置拖动的高度
	 $(".resizeable").css("height",$('#left-content').height());
	 
	//设置左侧菜单
	/*ws.tools.sidebarMenu({
           data: getResource(),
           
           //3个参数传一个就行了
           isOnlyTopMenu:false,  //是否仅有顶部菜单栏
           isOnlyLeftMenu:false, //是否仅有左侧菜单栏
           isLeftAndTopMenu:true, //是否左侧菜单和顶部菜单都有
    });*/
	 
	 
	 //展开左侧菜单
	 $('.fold-right').click(function(){
		 $("#left-content").css("left",0);
		 $("#left-content").css("width","240px");
		 $("#divider").css("left","239px");
		 $("#right-content").css("width",$("#right-content").width()-$("#left-content").width());
		 $('.fold-right').attr("style","display:none");
	 })
	 
	 //合并左侧菜单
	  $('.fold-left').click(function(){
	     $("#left-content").css("left",-$("#left-content").width());
		 $("#right-content").css("width",$("#right-content").width()+$("#left-content").width());
		 $('.fold-right').attr("style","display:block");
	 })
	 
	  //左侧菜单iframe跳转和加入li激活状态
	 $("#left-content nav ul li a").click(function(){
		 if($(this).data("url")){
			  ws.tools.location.href($(this).data("url"),"mainContentIframe");
		 }
		 //工作平台的点击效果
		 if($(this).attr("id")!="workArea"){
			 $("#left-content").find(".actived").removeClass("actived");
			 $(this).addClass("actived");
			 $(this).siblings("i").addClass("actived");
		 }
	 });
	 
	 
	 //导航栏iframe跳转和加入li激活状态
	 $("#top-content .navbar-default ul li a").click(function(){
		 if($(this).data("url")){
			ws.tools.location.href($(this).data("url"),"mainContentIframe");
			$(".navbar-default").find(".active").removeClass('active');
			$(this).parent().addClass("active");
		 }
		 
	 });
	 

	 //导航栏iframe改变左侧菜单和加入li激活状态
	 $("#top-content .navbar-default ul li a").click(function(){
		 if($(this).data("targetnav")){
			 $('nav.sidebar').attr("style","display:none");
			 $("#"+$(this).data("targetnav")).attr("style","display:block");
			 $(".navbar-default").find(".active").removeClass('active');
			 $(this).parent().addClass("active");
		 }
		
	 });

	 //改变图标样式的方法
	 function changeIcon($_a){
	     var thisR=$($_a).parent().find("i:first").hasClass("fa-caret-right");
		 var thisD=$($_a).parent().find(".fa-caret-down");
		 var thisO=$($_a).parent().find(".open");
		 var thisI=$($_a).parent().find("i:first");
		if(thisR && thisO.length==0){
			thisI.removeClass("fa fa-caret-right");
			thisI.addClass("fa fa-caret-down open")
		}else if(thisO.length!=0){
			thisD.removeClass("fa fa-caret-down open");
			thisD.addClass("fa fa-caret-right");
		}
	 } 
	 
	  //菜单点击效果
	 $("#left-content  .nav > li > ul").siblings().click(function(){
		  changeIcon(this);
		  
		  //关闭其他展开的一级菜单，并改变样式图标
		  var OtherOpenUl= $(this).parent().siblings().children();
		  for(var i=0;i<OtherOpenUl.length;i++){
			  
			  if($(OtherOpenUl[i]).hasClass("collapse in")){
				  changeIcon($(OtherOpenUl[i]));
				 $( OtherOpenUl[i]).removeClass("in");
			  }
		  }
		  
		  
	}); 
	 
	 
	//判断左侧菜单是否存在
	/*if(document.getElementById("left-content").style.display == 'block'){*/
		//左侧菜单拖动
		$("#divider").draggable({
			  start: function(event, ui) {
				  $('.fold-right').click();
				  var widthx= ui.position.left;
				  
				  $(this).after('<div id="dividerDiv" style="position: absolute;top: 0; left: 0;width: 1000px;height: 100%; z-index: -10;"></div>');
				  
			  },
			  drag: function( event, ui ) {
				  
				 var widthx= ui.position.left;
				 $("#left-content").css("width",widthx);
				 $("#right-content").css("width",$('body').width()-widthx);
			  },
			  stop: function( event, ui ) {
				  var widthx= ui.position.left;
				 
				  if(widthx<170){
					  $('.fold-left').click();
				  }else if(widthx>600){
					  widthx=600;
					  $("#left-content").css("width",widthx);
					  $("#right-content").css("width",$('body').width()-widthx);
					  $("#divider").attr("style","display:block");
					  $("#divider").css("height",$('#left-content').height());
					  $("#divider").css("left",widthx-1);
				  }else{
				  	  $("#divider").attr("style","display:block");
					  $("#divider").css("height",$('#left-content').height());
					  $("#divider").css("left",widthx-1);
				  }
				  $("#dividerDiv").remove();
			  },
			 axis: "x" 
		 });
		
	/*} */
}); 

// 右侧内容自适应
window.onresize = function(){
	$("body").css("height",$(window).height());
	$("#left-content").css("height",$('body').height()-$("#top-content").height());
	if($("#left-content").css('display')!="none"){
		$("#right-content").css("width",$('body').width()-$("#left-content").width()-$("#left-content").offset().left);
	}else{
		$("#right-content").css("width",top.$('body').width());
	}
	$("#right-content").css("height",$('body').height()-$("#top-content").height());
	$(".resizeable").css("height",$('#left-content').height());
}
