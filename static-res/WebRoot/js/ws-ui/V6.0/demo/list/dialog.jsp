<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>列表页面</title>
	
	<%@include file='/js/ws-ui/V6.0/ws-load-list-ui.jsp'%>
	
	<script type="text/javascript">
	$(function(){   
		
		//一个选择列表
		$("#button01").click(function(){
			ws.tools.modalDialog.show({
					
					id:"dialogOneList",
					url:'<%=request.getContextPath()%>/UI4.0/demo/list/dialogOne_list.jsp',
					title: "一个选择列表",
					showCloseButton:true
			})
				
		});
		
		//多个选择列表
		$("#button02").click(function(){
			ws.tools.modalDialog.show({
				id:"dialogTwoList",
				url:'<%=request.getContextPath()%>/UI4.0/demo/list/dialogTwo_list.jsp',
				title: "多个选择列表",
				showCloseButton:true
			});	
		});
		
		//内嵌按钮列表
		$("#button03").click(function(){
			ws.tools.modalDialog.show({
				id:"dialogThreeList",
				url:'<%=request.getContextPath()%>/UI4.0/demo/list/dialogThree_list.jsp',
				title: "内嵌按钮列表",
				showCloseButton:false
			});	
		});
		
		//带标题列表
		$("#button04").click(function(){
			ws.tools.modalDialog.show({
				id:"dialogThreeList",
				url:'<%=request.getContextPath()%>/UI4.0/demo/list/dialogFour_list.jsp',
				title: "带标题列表",
				showCloseButton:false
			});	
		});
		

		//带标题列表
		$("#button05").click(function(){
			ws.tools.modalDialog.alert();
				 
		});
		
		
	})
	</script>

</head>
<body>
	<div class="pageContainer">
		<!-- 导航 -->
		<div class="crumbs">
			<ol class="breadcrumb">
				<li><i class="fa fa-home"></i> <a href="welcome.jsp">首页</a></li>
				<li ><a href="#"  class="active" title="">弹出列表页面</a></li>
			</ol>
		</div>
		<!-- 内容 -->
		<div class="mainContent">
			<div class="panelBox">
				<div class="panelTitle">
				 弹出列表
				</div>
				<div class="panelContent">
					<button id="button01" type="button" class="btn btn-main">弹出一个选择列表</button>
					<button id="button02" type="button" class="btn btn-success">弹出多个选择列表</button>
					<button id="button03" type="button" class="btn btn-info">弹出内嵌按钮列表</button>
					<button id="button04" type="button" class="btn btn-info">弹出带标题列表</button>
					<button id="button05" type="button" class="btn btn-info">alert</button>
				</div>
			</div>
		</div>
	</div>
</body>
</html>