<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>欢迎页</title>
	<%@include file="/js/ws-ui/V4.0/ws-load-edit-ui.jsp" %>
	<style type="text/css">
	
		.aaaaa{
			display: block;
		    color: red;
		    font-weight: 600 !important;
		    font-style: italic;
		    font-size: 16px !important;
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
		<!-- 内容 -->
		<div class="mainContent">
			<div class="panelBox">
				<div class="panelTitle">
				radio
				</div>
				<div class="panelContent">
					<span class="aaaaa">设置了默认值</span>
					<div data-label="radio" data-signCode="m50_evaluation_index.status_"  data-name="sex" data-defaultValue="1"></div>
					
					<span class="aaaaa">设置了逃逸值和不可选中</span>
					<span data-label="radio" data-signCode="sys_user.sex_"  data-name="sex" data-disabled="true" data-escapevalue="2"></span>
					<table>
						<tbody>
							<tr>
								<td>
									<span class="aaaaa">设置了300px的宽度，一行显示2个:</span>
								</td>	
							</tr>
							<tr>
								<td data-label="radio" data-signCode="m50_evaluation_index.status_"  data-name="sex" data-width="300" data-numberofrows="2"></td>
							</tr>
							
							<tr>
								<td class="aaaaa">设置了一行显示1个:</td>	
							</tr>
							<tr>
								<td data-label="radio" data-signCode="m50_evaluation_index.status_"  data-name="sex" data-numberofrows="1"></td>
							</tr>
						</tbody>
					</table>
				</div>
				
				<div class="panelTitle">
				checkbox
				</div>
				<div class="panelContent">
				
					<span class="aaaaa">设置了默认值</span>
					<div data-label="checkbox" data-signCode="m50_evaluation_index.status_"  data-name="sex" data-defaultValue="1"></div>
					
					<span class="aaaaa">设置了逃逸值和不可选中</span>
					<span data-label="checkbox" data-signCode="sys_user.sex_"  data-name="sex" data-disabled="true" data-escapevalue="2"></span>
					<table>
						<tbody>
							<tr>
								<td>
									<span class="aaaaa">设置了300px的宽度，一行显示2个:</span>
								</td>	
							</tr>
							<tr>
								<td data-label="checkbox" data-signCode="m50_evaluation_index.status_"  data-name="sex" data-width="300" data-numberofrows="2"></td>
							</tr>
							<tr>
								<td class="aaaaa">设置了一行显示1个:</td>	
							</tr>
							<tr>
								<td data-label="checkbox" data-signCode="m50_evaluation_index.status_"  data-name="sex" data-numberofrows="1"></td>
							</tr>
						</tbody>
					</table>
				</div>
				
				
				<div class="panelTitle">
				select
				</div>
				<div class="panelContent">
				
					<span class="aaaaa">设置了默认值</span>
					<div data-label="select" data-signCode="m50_evaluation_index.status_"  data-name="sex" data-defaultValue="1"></div>
					
					<span class="aaaaa">设置了逃逸值</span>
					<span data-label="select" data-signCode="sys_user.sex_"  data-name="sex"  data-escapevalue="2"></span>
					
					<span class="aaaaa">设置了不可选中</span>
					<span data-label="select" data-signCode="sys_user.sex_"  data-name="sex" data-disabled="true"></span>
					<table>
						<tbody>
							<tr>
								<td>
									<span class="aaaaa">设置了300px的宽度</span>
								</td>	
							</tr>
							<tr>
								<td data-label="select" data-signCode="m50_evaluation_index.status_"  data-name="sex" data-width="300"></td>
							</tr>
						</tbody>
					</table>
				</div>
			</div>
		</div>
	</div>
</body>
</html>