$(function(){
	
	//设置radio和checkbox的样式
	setRadioAndCheckbox();

	//页面高度自适应
	setPageScrollHeight();
	
	//高级查询
	if($("#moreSerach").length>0){
		$("#moreSerach").click(function(){
			if($("#moreSerach > i").hasClass("fa-angle-double-down")){
				$(".moreSeachField").show();
				$("#moreSerach > i").removeClass("fa-angle-double-down")
				$("#moreSerach > i").addClass("fa-angle-double-up")
			}else{
				$(".moreSeachField").hide();
				$("#moreSerach > i").removeClass("fa-angle-double-up")
				$("#moreSerach > i").addClass("fa-angle-double-down")
			}
		});
	}
	
	//文件选择框change事件
	if($(".a-upload").length>0){
		$(".a-upload").on("change","input[type='file']",function(){
			var filePath=$(this).val();
			$(".a-upload >span").text(filePath)
			
			if(!filePath){
				$(".a-upload >span").text("点击上传文件");
			}
		});
	}
	
	
	//select2选择框样式控制
	if($(".select2-select-00").length>0){
		$(".select2-select-00").select2({
			allowClear : true
		});
	}
	
}); 

//设置radio和checkbox的样式
function setRadioAndCheckbox(){
	
	if($('input[type="radio"]').length!=0){
		var inputs=$('input[type="radio"]');
		for(var i=0; i<inputs.length;i++){
			var thisInput=inputs[i];
			if($($(thisInput).next().get(0)).length!=0){
				if($(thisInput).next().get(0).nodeName=="SPAN"){
					if(!$(thisInput).next().hasClass('lbl')){
						var span='<span class="lbl"></span>';
						$(thisInput).after(span);
					}
				}
			}else{
				var span='<span class="lbl"></span>';
				$(thisInput).after(span);
			}
			
		}
		
	}
	
	if($('input[type="checkbox"]').length!=0){
		var inputs=$('input[type="checkbox"]');
		for(var j=0; j<inputs.length;j++){
			var thisInput=inputs[j];
			if($($(thisInput).next().get(0)).length!=0){
				if($(thisInput).next().get(0).nodeName=="SPAN"){
					if(!$(thisInput).next().hasClass('lbl')){
						var span='<span class="lbl"></span>';
						$(thisInput).after(span);
					}
				}
			}else{
				var span='<span class="lbl"></span>';
				$(thisInput).after(span);
			}
			
		}
		
	}
	
}


//根据页面高度，设置页面滚动条的高度
function setPageScrollHeight(){
	
	//获取页面所有的iframe
	var iframes=$('iframe', window.parent.document);
	
	//首页的内容高度
	if(iframes.length==1){
		
	}else{
		//模态框弹出页面自适应
		for(var i=1;i<iframes.length;i++){
			var _that = $(iframes[i]);//获取当前的iframe
			var _thatIframeBody=$(_that.contents()).find('body');//获取当前的iframe的body
			$(_that.contents()).find('html').css('height','100%');
			$(_that.contents()).find('body').css('height','100%');
			$(_that.contents()).find('.pageContainer').css('height','100%');
			$(_that.contents()).find('.mainContent').css('height','100%');
			var footeHeight=$(".footerButtonBox").height();//模态框底部的高度
			var narbarHeight=$(".crumbs").height(); //导航条高度
			var SecondHeight=$(".second_menu").height(); //导航条高度
			
			var secondMenuHeight=$(".second_menu").height(); //2级导航的高度
			var modalBody=$('.modal-body', window.parent.document); //最外层模态框的body
			var modalBodyHeight=$(modalBody).height(); //最外层模态框body的高度
			
			
			
			
			/*//去除2级导航的高度
			if(_thatIframeBody.find('.second_menu').length!=0){
				$(_thatIframeBody.find('.mainContent')).css("height",_thatIframeBody.height()-secondMenuHeight);
			}
			*/
			
			//去除导航条高度
			if(_thatIframeBody.find('.crumbs').length!=0){
				$(_thatIframeBody.find('.mainContent')).css("height",_thatIframeBody.height()-narbarHeight);
			}
			
			//去除导航条高度
			if(_thatIframeBody.find('.second_menu').length!=0){
				$(_thatIframeBody.find('.mainContent')).css("height",_thatIframeBody.height()-SecondHeight);
			}
			
			//模态框弹出自适应
			if(_thatIframeBody.find('.footerButtonBox').length!=0){
				//设置当前iframe下的body下的mainContent容器的高度
				$(_thatIframeBody.find('.mainContent')).css("height",_thatIframeBody.height()-footeHeight);
			}
			
			//tab标签页高度自适应
			if(_thatIframeBody.find('.tabbable-custom').length!=0){
				
			  //设置tab-pane的高度
			  $(_thatIframeBody.find('.tab-pane')).css("height",modalBodyHeight-52);
			  $(_thatIframeBody.find('iframe')).css("height",modalBodyHeight-52);
			}
		}
	}
}

var timer;

timer = setInterval(function(){
	
	if($($('#mainContentIframe',window.parent.document).contents()).find('body').height() <460){
		$($('#mainContentIframe',window.parent.document).contents()).find('body').height(460)
	 }else if($('#mainContentIframe',window.parent.document).height() != $($('#mainContentIframe',window.parent.document).contents()).find('.pageContainer').height()){
		 
		 if($($('#mainContentIframe',window.parent.document).contents()).find('.box_container').height()>$($('#mainContentIframe',window.parent.document).contents()).find('body').height()){
			 $('#mainContentIframe',window.parent.document).height( $($('#mainContentIframe',window.parent.document).contents()).find('.box_container').height());
		 }else{
			 $('#mainContentIframe',window.parent.document).height( $($('#mainContentIframe',window.parent.document).contents()).find('body').height());
		 }
		 $('#mainContentIframe',window.parent.document).height( $($('#mainContentIframe',window.parent.document).contents()).find('.pageContainer').height());
	 }
 
	 
	/*if(window.screen.width < 1367  ){
		var logoWidth=$(".logo-header",window.parent.document).width();
		var oneLevelMenuWidth=$("#oneLevelMenu",window.parent.document).width();
		var rightWidth=$(".right",window.parent.document).width();
		
		if(logoWidth+oneLevelMenuWidth+rightWidth > 1200){
			$("#date",window.parent.document).parent().css('display','none');
		}
		
	 }else{
		 $("#date",window.parent.document).parent().css('display','block');
	 }*/
	 
},500);//每0.5秒检查一次


window.onresize = function(){
	setPageScrollHeight();
}