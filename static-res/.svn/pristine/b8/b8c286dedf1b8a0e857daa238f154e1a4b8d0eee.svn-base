<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>欢迎页</title>
	<%@include file="/js/ws-ui/V5.0/ws-load-edit-ui.jsp" %>
</head>
<body>

<div class="box">

			<div class="box_container">
	<div class="pageContainer">
		<!-- 导航 -->
		<div class="crumbs">
			<ol class="breadcrumb">
				<li><i class="fa fa-home"></i> <a href="welcome.jsp">首页</a></li>
			</ol>
		</div>
		<!-- 内容 -->
		<div class="mainContent">
			<div class="panelBox">
				<div class="panelTitle">
				 弹出框
				</div>
				<div class="panelContent">
					<button id="button01" type="button" class="btn btn-main">弹出框</button>
					<button id="button02" type="button" class="btn btn-success">成功提示框</button>
					<button id="button03" type="button" class="btn btn-danger">失败提示框</button>
					<button id="button04" type="button" class="btn btn-warning">警告提示框</button>
					<button id="button05" type="button" class="btn btn-info">询问提示框</button>
				</div>
			</div>
		</div>
	</div>
	</div>
	</div>
	<script type="text/javascript">
	$(function(){   
		
		//弹出框
		$("#button01").click(function(){
			ws.tools.modalDialog.show({
				id:"editModelDialog",
				url:'http://www.baidu.com',
				title: "编辑页面",
				showCloseButton:true
			});	
		});
		
		//成功提示框
		$('#button02').click(function() {
			ws.tools.modalDialog.alert("保存成功");
		});
		
		//失败提示框
		$('#button03').click(function() {
			ws.tools.modalDialog.alert("保存失败",2);
		});
		
		//警告提示框
		$('#button04').click(function() {
			ws.tools.modalDialog.alert("请选择需要删除的记录",3);
		});
		
		//询问提示框
		$('#button05').click(function() {
			ws.tools.modalDialog.confirm("确定删除该记录?",function(result){
				alert("选择了确定删除!");
			});
		});
		
	})
	</script>
</body>
</html>