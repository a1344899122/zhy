$(function() {
	
	// 初始化body高度
	$("body").css("height", $(window).height());
	$("body").css("width", $(window).width());
	$("#top-content").css("width",$(window).width());
	// 页面框架加载完毕，设置右侧内容宽度，高度
	$("#left-content").css("height",$('body').height() - $("#top-content").height());
	$("#right-content").css("width",$('body').width() - $("#left-content").width());
	if(screen.width>0 && screen.width<1367){
		if($(".right").width()>1126){
			$("#right-content").css("height",$('body').height() - $("#top-content").height()-60);
		}
	}else{
		$("#right-content").css("height",$('body').height() - $("#top-content").height());
	}
	
	
	// 导航栏iframe跳转和加入li激活状态
	$("#top-content .navigation_bar ul li a").click(function(){
		if ($(this).data("url")) {
			
			//判断有没有二级菜单
			if ($(this).data("code")) {
				$("#right-content .second_menu").css('display', 'none');
				$("#right-content").find("#menu_" + $(this).data("code")).css('display', 'block');
				
				//跳转
				ws.tools.location.href($(this).data("url"),"mainContentIframe");
				$(".navigation_bar").find(".active").removeClass('active');
				$(this).parent().addClass("active");
				
				//激活自己下面的第一个子菜单
				$("#menu_" + $(this).data("code")).find("li:first-child > a").click();
			} 
		}

	});

	// 二级导航栏iframe跳转和加入li激活状态
	$("#right-content .second_menu >ul >li  a").click(function() {
		if ($(this).data("url")) {
			ws.tools.location.href($(this).data("url"), "mainContentIframe");
			$("#right-content .second_menu >ul >li a").removeClass('active');
			$(this).addClass("active");
			
			$("#right-content .third-menu").css('display', 'none');
			$("#right-content").find("#menu_" + $(this).data("code")).css('display', 'block');
			
			//激活自己下面的第一个子菜单
			$("#menu_" + $(this).data("code")).find("a:first-child").click();
		}
	});

	// 三级导航栏iframe跳转和加入li激活状态
	$("#right-content .third-menu > a").click(function() {
		if ($(this).data("url")) {
			ws.tools.location.href($(this).data("url"), "mainContentIframe");
			$("#right-content .third-menu >  a").removeClass('active');
			$(this).addClass("active");
		}
	});
	
	if(screen.width>0 && screen.width<1367){
		if($(".right").width()>1126){
			$('body').css('overflow-y','hidden');
			$(".right").css('width',screen.width);
		}
	}
	
	
	
});


//页面内容自适应，产生滚动条
window.onresize = function(){
	//笔记本大多数电脑的分辨率
	if(screen.width>0 && screen.width<1367){
		$("#top-content").css("width",screen.width);
		$("#main-content").css("width",screen.width);
		$("#right-content").css("width",screen.width);
		
		if($(".right").width()>1126){
			$('body').css('overflow-y','hidden');
			$(".right").css('width',screen.width);
		} 
	}
	//其他的一些大显示器
	if(screen.width>1367){
		$("#top-content").css("width",screen.width);
		$("#main-content").css("width",screen.width);
		$("#right-content").css("width",screen.width);
		
	}
	
	
	$("body").css("width", $(window).width());
	$("body").css("height", $(window).height());
	
	if(screen.width>0 && screen.width<1367){
		if($(".right").width()>1126){
			$("#right-content").css("height",$('#main-content').height() - $("#top-content").height()-60);
			
		}
	}else{
		$("#right-content").css("height", $("#main-content").height() - $("#top-content").height());
	}
	
	
}
