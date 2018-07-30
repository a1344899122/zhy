<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>列表页面</title>
	
	<%@include file='/js/ws-ui/V5.0/ws-load-edit-ui.jsp'%>
	
	<script type="text/javascript">
	$(function(){   
		
		//编辑页面
		$("#button01").click(function(){
			ws.tools.modalDialog.show({
				id:"dialogEditDialog",
				url:'<%=request.getContextPath()%>/UI4.0/demo/edit/dialogPage_edit.jsp',
				title: "编辑页面",
				showCloseButton:false
			});	
		});
		
		
		//tab编辑页面
		$("#button02").click(function(){
			ws.tools.modalDialog.show({
				id:"tabDialog",
				url:'<%=request.getContextPath()%>/UI4.0/demo/edit/tabDialog.jsp',
				title: "tab编辑页面",
				showCloseButton:false
			});	
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
				<li ><a href="#"  class="active" title="">弹出编辑页面</a></li>
			</ol>
		</div>
		<!-- 内容 -->
		<div class="mainContent">
			<div class="panelBox">
				<div class="panelTitle">
				弹出编辑页面
				</div>
				<div class="panelContent">
					<button id="button01" type="button" class="btn btn-main">弹出编辑页面</button>
					<button id="button02" type="button" class="btn btn-main">弹出tab编辑页面</button>
				</div>
			</div>
		</div>
	</div>
</body>
</html>