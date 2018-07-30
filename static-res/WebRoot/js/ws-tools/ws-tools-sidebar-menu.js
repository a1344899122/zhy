/*****************************************************************
                  左侧菜单封装通用类      
*****************************************************************/
/**调用示例：
   $('#id').sidebarMenu({options})
*/
/**
 * options 生成菜单所需json数组
 * 		json所需参数：
 * 		id 子菜单的id
 * 		name 菜单名称
 * 		icon 菜单名称前的图标样式
 * 		url 菜单跳转页面相对当前jsp路径
 * 		pId 父菜单的id
 * 
 * 
 * 3个参数传一个就行了
 * isOnlyTopMenu:false,  //是否仅有顶部菜单栏
 * isOnlyLeftMenu:false, //是否仅有左侧菜单栏
 * isLeftAndTopMenu:true, //是否左侧菜单和顶部菜单都有
 */



if(typeof ws =="undefined"){
	var ws=new Object();
}//end if
if(typeof ws.tools =="undefined"){
	ws.tools=new Object();
}

;(function(tools){
	
    tools.sidebarMenu = function (options) {
    	window.options=null;
    	window.options=options;
    	
    	//左侧菜单和顶部菜单都有
    	if(options.isLeftAndTopMenu){
    		menuFun.GetAccordionMenu(options);
    		
    	//仅有左侧菜单栏
    	}else if(options.isOnlyLeftMenu){
    		menuFun.GetLeftOneLeavelMenu(options)
    	}
    	
    	//仅有仅有顶部菜单栏
		else if(options.isOnlyTopMenu){
			menuFun.GetTopOneLeavelMenu(options)
		}
    	
    }
    
})(ws.tools);


var menuFun={
		
	//显示或隐藏左侧菜单
	 isShow:function(ModuleId) {
		//判断是否存在子菜单，若不存在，隐藏左侧菜单，存在则显示
		if(menuFun.IsBelowMenu(ModuleId) == 0){
			$("#left-content").css('display','none');
			//设置右侧内容宽度
			$("#right-content").css("width",$('body').width());
		}else{
			$("#left-content").css('display','block'); 
			//设置右侧内容宽度
			
		    $("#right-content").css("width",$('body').width()- 239);
			
			//显示相应二级菜单
			var li = $("#left-content li");
			
			//限制默认打开模块
			for(var i=0;i<li.length;i++){
				var id = li[i].id;
				if(id != null || id != ""){
		        	if(id.substring(0,id.length-3) == ModuleId){
		        		$("#"+id+"").css('display','block');
		        	}else{
		        		$("#"+id+"").css('display','none'); 
		        	}
		        }
			}
			
		}
	},	
	
		
	//判断是否有子节点
	IsBelowMenu:function(ModuleId) {
	    var count = 0;
	    $.each(options.data, function (i) {
	        if (options.data[i].pId == ModuleId) {
	            count++;
	            //return false;
	        }
	    });
	    return count;
	},
	
	 //导航一级菜单
     GetAccordionMenu:function(options) {
    	$("#left-content").css("display",'none');
        var html = "";
        $.each(options.data, function (i) {
            if (options.data[i].pId ==options.data[i].id.substring(0,3)) {
            	if(options.data[i].url == undefined){
            		html+='<li><a onclick="menuFun.isShow('+options.data[i].id+')" data-url="welcome.jsp">'+options.data[i].name+'</a></li>';
                	menuFun.GetLeftAccordionMenu(options.data[i].id);
            	}else{
            		html+='<li><a onclick="menuFun.isShow('+options.data[i].id+')" data-url="'+options.data[i].url+'">'+options.data[i].name+'</a></li>';
            	}
            }
        });
        $("#top-content .nav.navbar-nav:first-child").append(html);
        $("#right-content").css("width",top.$('body').width());
    },
    
    //左侧一级菜单
    GetLeftAccordionMenu:function(ModuleId) {
        var submenu = "";
        $.each(options.data, function (i) {
            if (options.data[i].pId == ModuleId) {
                if (menuFun.IsBelowMenu(options.data[i].id) > 0) {
                	
            		 submenu += '<li id="'+options.data[i].id+'"><a data-toggle="collapse"  href="#'+options.data[i].id+'" ><i class="fa fa-caret-right"></i><i class="'+options.data[i].icon+'"></i>'+options.data[i].name+'</a><ul class="nav panel-collapse collapse" id="'+options.data[i].id+'">';
                     submenu += menuFun.GetSubmenu(options.data[i].id)
                     submenu += '</ul></li>';
                } else {
                    submenu += '<li id="'+options.data[i].id+'"><a data-url="'+options.data[i].url+'"><i class="'+options.data[i].icon+'"></i>'+options.data[i].name+'</a></li>';
                }
            }
        });
        $("#left-content .nav").append(submenu);
    },
    
    //顶部左侧子菜单
    GetSubmenu:function(ModuleId) {
        var submenu = "";
        $.each(options.data, function (i) {
            if (options.data[i].pId == ModuleId) {
                if (menuFun.IsBelowMenu(options.data[i].id) > 0) {
                	submenu += '<li><a data-toggle="collapse"  href="#'+options.data[i].id+'"><i class="fa fa-caret-right"></i><i class="'+options.data[i].icon+'"></i>'+options.data[i].name+'</a><ul class="nav panel-collapse collapse" id="'+options.data[i].id+'">';
                    submenu += menuFun.GetSubmenu(options.data[i].id)
                    submenu += '</ul></li>';
                } else {
                	if(options.isOnlyTopMenu){
                		submenu += '<li><a data-url="'+options.data[i].url+'"><i class="'+options.data[i].icon+'"></i>'+options.data[i].name+'</a></li><li class="divider"></li>';
                	}else{
                		submenu += '<li><a data-url="'+options.data[i].url+'"><i class="'+options.data[i].icon+'"></i>'+options.data[i].name+'</a></li>';	
                	}
                }
            }
        });
        return submenu;
    },
    
    
    //只有左侧菜单栏
    GetLeftOneLeavelMenu:function(options) {
       $("#left-content").css("display",'block !important');
       var submenu = "";
       for(var i=0;i<options.data.length;i++){
    	   if (menuFun.IsBelowMenu(options.data[i].id)>0 && options.data[i].pId.length<4) {
    		   
    		   submenu += '<li>'+
								'<a data-toggle="collapse"  href="#'+options.data[i].id+'">'+
									'<i class="fa fa-caret-right"></i>'+
									'<i class="'+options.data[i].icon+'"></i>'+
										options.data[i].name +
								'</a>'+
								'<ul class="nav panel-collapse collapse" id="'+options.data[i].id+'">'
				submenu += 			 menuFun.GetSubmenu(options.data[i].id)
				submenu += 		'</ul>'+
						   '</li>';
				i+=menuFun.IsBelowMenu(options.data[i].id);
			} 
    	    else if(options.data[i].pId.length<4){
				submenu += '<li id="'+options.data[i].id+'"><a data-url="'+options.data[i].url+'"><i class="'+options.data[i].icon+'"></i>'+options.data[i].name+'</a></li>';
			}
       }
       		$("#left-content .nav").append(submenu);  
    },
    
    //只有顶部菜单栏
    GetTopOneLeavelMenu:function(options) {
       $("#left-content").css("display",'none');
       var submenu = "";
       for(var i=0;i<options.data.length;i++){
    	   if (menuFun.IsBelowMenu(options.data[i].id)>0) {
    		   
    		   submenu += '<li class="dropdown">'+
								'<a class="dropdown-toggle" data-toggle="dropdown">'+
										options.data[i].name +
										'<b class="caret"></b>'+
								'</a>'+
								'<ul class="dropdown-menu">'
				submenu += 			menuFun.GetSubmenu(options.data[i].id)
				submenu += 		'</ul>'+
						   '</li>';
				i+=menuFun.IsBelowMenu(options.data[i].id);
			} 
    	    else {
    	    	submenu += '<li><a data-targetnav="'+options.data[i].url+'">'+options.data[i].name+'</a></li>';
			}
       }
		$("#top-content .nav.navbar-nav:first-child").append(submenu);  
		$("#right-content").css("width",top.$('body').width());
		if($("ul li:last-child").hasClass('divider')){$("ul li:last-child").remove()}
    },
    
}

