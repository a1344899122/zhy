<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>编辑页面</title>
	
	<%@include file='/js/ws-ui/V4.0/ws-load-edit-ui.jsp'%>
	
	<script type="text/javascript">
	
		$(function(){
			
			
		});
		
		
	
	</script>
	
</head>
<body>

	<div class="tabbable-custom">
		<ul class="nav nav-tabs">
			<li class="active"><a href="#tab_1_1" data-toggle="tab">Section1</a></li>
			<li><a href="#tab_1_2" data-toggle="tab">Section 2</a></li>
			<li><a href="#tab_1_3" data-toggle="tab">Section 3</a></li>
		</ul>
		<div class="tab-line"></div>
		<div class="tab-content">
			<div class="tab-pane active" id="tab_1_1">
				<iframe src=tabPage_edit.jsp width="100%" height="100%" frameborder="no" border="0" scrolling="yes" allowtransparency="yes"></iframe>
			</div>
			<div class="tab-pane" id="tab_1_2">
				<iframe src="tabPage_edit.jsp" width="100%" height="100%" frameborder="no" border="0" scrolling="yes" allowtransparency="yes"></iframe>
			</div>
			<div class="tab-pane" id="tab_1_3">
				<iframe src="tabPage_edit.jsp" width="100%" height="100%" frameborder="no" border="0" scrolling="yes" allowtransparency="yes"></iframe>
			</div>
		</div>
	</div>	
		
</body>
</html>