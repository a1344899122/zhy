<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>欢迎页</title>
	<%@include file="/js/ws-ui/V6.0/ws-load-edit-ui.jsp" %>
	<style type="text/css">
		.third-menu {
			width: 100%;
			height: 50px;
			text-align: center;
			border-bottom: 1px solid #ccc;
			background-color: #fff;
			line-height: 50px;
		}
		
		.third-menu a {
			color: #333;
			width: 150px;
			height: 50px;
			text-decoration: none;
			display: inline-block;
		}
		
		.third-menu a.active {
			border-bottom: 3px solid #ff0000;
			color: #ff0000;
			cursor: pointer;
			font-weight: 600;
		}
		
		.third-menu a:hover {
			color: #ff0000;
			cursor: pointer;
			text-decoration: none;
			border-bottom: 3px solid #ff0000;
		}
				
	</style>
</head>
<body>
	<div class="pageContainer">
		<!-- 导航 -->
		<div class="crumbs">
			<ol class="breadcrumb">
				<li><i class="fa fa-home"></i> <a href="welcome.jsp">首页</a></li>
			</ol>
		</div>
		
		<div class="third-menu">
			<a  class="active" href="<%=request.getContextPath()%>/js/ws-ui/V6.0/demo/third_menu.jsp">主办的会议</a>
			<a href="<%=request.getContextPath()%>/js/ws-ui/V6.0/demo/third_menu2.jsp">参与的会议</a>
			<a href="<%=request.getContextPath()%>/js/ws-ui/V6.0/demo/third_menu2.jsp">所有会议</a>
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