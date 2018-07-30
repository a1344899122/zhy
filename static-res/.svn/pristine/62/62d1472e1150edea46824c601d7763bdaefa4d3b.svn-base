<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>编辑页面</title>
	
	<%@include file='/js/ws-ui/V5.0/ws-load-edit-ui.jsp'%>
	
	<script type="text/javascript">
	
		$(function(){
			
			//弹出框
			$("#button01").click(function(){
				top.$('body').modalDialog().show({
					id:"editModelDialog",
					url:'http://www.baidu.com',
					title: "编辑页面",
					showCloseButton:true
				});	
			});
			
			//成功提示框
			$('#button02').click(function() {
				top.$('body').modalDialog().alert("保存成功");
			});
			
			//失败提示框
			$('#button03').click(function() {
				top.$('body').modalDialog().alert("保存失败",2);
			});
			
			//警告提示框
			$('#button04').click(function() {
				top.$('body').modalDialog().alert("请选择需要删除的记录",3);
			});
			
			//询问提示框
			$('#button05').click(function() {
				top.$("body").modalDialog().confirm("确定删除该记录?",function(result){
					alert("选择了确定删除!");
				});
			});
		});
		
		
	
	</script>
</head>
<body>

	<div class="pageContainer">
		<!-- 导航 -->
		<div class="crumbs">
			<ol class="breadcrumb">
				<li><i class="fa fa-home"></i> <a href="welcome.jsp">首页</a></li>
				<li ><a href="#"  class="active" title="">编辑页面</a></li>
			</ol>
		</div>
		<!-- 内容 -->
		<div class="mainContent">
			<!-- 页面标题 -->
			<div class="pageTitle">
				<span>编辑页面标题</span>
			</div>
			<!-- 面板盒子 -->
			<div class="panelBox">
				<!-- 基本输入框  -->
				<div class="panelTitle">
				基本输入框
				</div>
				<div class="panelContent">
					<div class="saveTable">
						<table class="table table-no-bordered">
						    <tr>
						      <td align="right" width="12%">姓名：</td>
						      <td colspan="3">
						      	<input type="text" size="20">
						      </td>
						    </tr>
						    <tr>
						      <td align="right">账号：</td>
						      <td width="40%">
								<input type="text" size="20">
						      </td>
						      <td align="right" width="12%">密码：</td>
						      <td width="40%">
						      	<input type="password" size="20">
						      </td>
						    </tr>
						    <tr>
						      <td align="right">账号(只读)：</td>
						      <td width="40%">
								<input type="text" size="20" readonly="readonly">
						      </td>
						      <td align="right" width="10%">密码（只读）：</td>
						      <td width="40%">
						      	<input type="password" size="20" readonly="readonly">
						      </td>
						    </tr>
						    <tr>
						      <td align="right">账号(禁用)：</td>
						      <td width="40%">
								<input type="text" size="20" disabled="disabled">
						      </td>
						      <td align="right" width="10%">密码（禁用）：</td>
						      <td width="40%">
						      	<input type="password" size="20" disabled="disabled">
						      </td>
						    </tr>
						    <tr>
						      <td align="right">性别：</td>
						      <td width="40%">
						      	<div class="input-radio" style="width:100px">
						      		<input type="radio" name="sex" value="">
						      		<span>男</span>
						      	</div>
						      	
						      	<div class="input-radio" style="width:100px">
									<input type="radio" name="sex" value="">
									<span>女</span>
								</div>
								
								<div class="input-radio" style="width:100px">
									<input type="radio" name="sex" value="" disabled="disabled">
									<span>禁用</span>
								</div>
						      </td>
						      <td align="right" width="10%">出生日期：</td>
						      <td width="40%">
						      	<input type="text" size="20">
						      </td>
						    </tr>
						    <tr>
						      <td align="right">爱好：</td>
						      <td width="40%">
						      	<div class="input-checkbox" style="width:100px">
						      		<input type="checkbox" name="" value="">
						      		<span>篮球</span>
						      	 </div>
						      	 <div class="input-checkbox" style="width:100px">
									<input type="checkbox" name="" value="">
									<span>足球</span>
								 </div>
								  <div class="input-checkbox" style="width:100px">
								     <input type="checkbox" name="" value="">
									 <span>旅行</span>
								  </div>
								   <div class="input-checkbox" style="width:100px">
								     <input type="checkbox" name="" value="">
									 <span>看书</span>
								  </div>
								   <div class="input-checkbox" style="width:100px">
								     <input type="checkbox" name="" value="" disabled>
									 <span>旅行</span>
								  </div>
						      </td>
						      <td align="right" width="10%">民族：</td>
						      <td width="40%">
						      	<select style="width: 151px;">
						      		<option>汉族</option>
						      		<option>土家族</option>
						      		<option>苗族</option>
						      		<option>瑶族</option>
						      		<option>侗族</option>
						      		<option>是的发送到发送到发送到发送到</option>
						      	</select>
						      </td>
						    </tr>
						    <tr>
						      <td align="right">学历（禁用）：</td>
						      <td colspan="3">
						      	<select style="width: 151px;" disabled="disabled">
						      		<option>本科</option>
						      		<option>大专</option>
						      		<option>高中</option>
						      		<option>初中</option>
						      		<option>小学</option>
						      		<option>无</option>
						      	</select>
						      </td>
						    </tr>
						    <tr>
						      <td align="right">工作单位：</td>
						      <td colspan="3">
						      	<input type="text" size="51">
						      	<button class="btn btn-default btn-height">选择</button>
						      </td>
						    </tr>
						    <tr>
						      <td align="right">联系地址：</td>
						      <td colspan="3">
						      	<input type="text" size="59">
						      </td>
						    </tr>
						     <tr>
						      <td align="right">简历：</td>
						      <td colspan="3">
						      	<input type="file" size="59">
						      </td>
						    </tr>
						    <tr>
						      <td align="right">备注：</td>
						      <td colspan="3">
						      	<textarea rows="10" cols="60"></textarea>
						      </td>
						    </tr>
						    <tr>
						      <td align="right">备注（只读）：</td>
						      <td colspan="3">
						      	<textarea rows="10" cols="60" readonly="readonly"></textarea>
						      </td>
						    </tr>
						    <tr>
						      <td align="right">备注（禁用）：</td>
						      <td colspan="3">
						      	<textarea rows="10" cols="60" disabled="disabled" ></textarea>
						      </td>
						    </tr>
						</table>
					</div><!-- /saveTable -->
				</div><!-- /panelContent -->
				<!-- /基本输入框  -->
				
				<!--  其他扩展输入框 -->
				<div class="panelTitle">
				 其他扩展输入框
				</div>
				<div class="panelContent">
					<div class="saveTable">
						<form action="">
							<table class="table table-dashed-line">
								<tr>
							      <td align="right" width="20%">按钮下拉菜单：</td>
							      <td>
							      	<a href="javascript:;" class="a-upload" style="width:250px;">
									    <input type="file" name="">
									    <span>点击上传文件</span>
									</a>
							      </td>
							    </tr>
							    <tr>
							      <td align="right" width="20%">select2选择框：</td>
							      <td>
							      	 <select style="width: 250px;" class="select2-select-00">
							      		<option>汉族</option>
							      		<option>土家族</option>
							      		<option>苗族</option>
							      		<option>瑶族</option>
							      		<option>侗族</option>
							      		<option>是的发送到发送到发送到发送到</option>
							      	</select>
							      </td>
							    </tr>
								<tr>
							      <td align="right" width="20%">按钮下拉菜单：</td>
							      <td>
							      	<div class="input-group" style="width:250px;">
										<input id="appendedDropdownButton" type="text">
										<div class="input-group-btn">
											<button class="btn btn-default input-right—btn dropdown-toggle" data-toggle="dropdown">
											Action
											<span class="caret"></span>
											</button>
											<ul class="dropdown-menu pull-right">
												<li><a href="#">功能</a></li>
												<li><a href="#">另一个功能</a></li>
												<li><a href="#">其他</a></li>
												<li class="divider"></li>
												<li><a href="#">分离的链接</a></li>
											</ul>
										</div>
									</div>
							      </td>
							    </tr>
							    
							    <tr>
							      <td align="right" width="20%">前缀和附加输入框：</td>
							      <td>
							      	<div class="input-group" style="width:250px;">
										<span class="input-group-addon">@</span>
										<input id="prependedInput" type="text" placeholder="Username">
									</div>
							      </td>
							    </tr>
							    <tr>
							      <td align="right" width="20%">后缀和附加输入框：</td>
							      <td>
							      	<div class="input-group" style="width:250px;">
										<input id="prependedInput" type="text" placeholder="Username">
										<span class="input-group-addon">@</span>
									</div>
							      </td>
							    </tr>
							    <tr>
							      <td align="right" width="20%">按钮的情况：</td>
							      <td>
							      	<div class="input-group" style="width:250px;">
										<input id="appendedInputButton" type="text">
										<span class="input-group-btn">
											<button type="button" class="btn btn-default input-right—btn"> 
												选择
											</button>
										</span>
									</div>
							      </td>
							    </tr>
							    
							    <tr>
							      <td align="right" width="20%">按钮下拉菜单：</td>
							      <td>
							      	<div class="input-group" style="width:250px;">
										<input id="appendedDropdownButton" type="text">
										<div class="input-group-btn">
											<button class="btn btn-default input-right—btn dropdown-toggle" data-toggle="dropdown">
											Action
											<span class="caret"></span>
											</button>
											<ul class="dropdown-menu pull-right">
												<li><a href="#">功能</a></li>
												<li><a href="#">另一个功能</a></li>
												<li><a href="#">其他</a></li>
												<li class="divider"></li>
												<li><a href="#">分离的链接</a></li>
											</ul>
										</div>
									</div>
							      </td>
							    </tr>
							    
							    <tr>
							      <td align="right" width="20%">富文本编辑器：</td>
							      <td>
							      	<IFRAME ID="eWebEditor1" SRC="http://127.0.0.1:8080/static-res/js/net-js/ueditor-v1.4.3.3/base.html" FRAMEBORDER="0" SCROLLING="no" WIDTH="100%" HEIGHT="450"></IFRAME>										
							      </td>
							    </tr>
							</table>
						</form>
					</div><!-- /saveTable -->
				</div><!-- /panelContent -->
				<!--  /其他扩展输入框 -->
				
				<!-- 按钮元素 -->
				<div class="panelTitle">
				 按钮
				</div>
				<div class="panelContent">
					<button type="button" class="btn btn-main">系统主题按钮</button>
					<button type="button" class="btn btn-default">默认按钮</button>
					<button type="button" class="btn btn-primary">原始按钮</button>
					<button type="button" class="btn btn-success">成功按钮</button>
					<button type="button" class="btn btn-info">信息按钮</button>
					<button type="button" class="btn btn-warning">警告按钮</button>
					<button type="button" class="btn btn-danger">危险按钮</button>
					<button type="button" class="btn btn-link">链接按钮</button>
					<button type="button">无样式按钮</button>
					<button type="button" class="btn">灰色按钮</button>
				</div><!-- /panelContent -->
				
				<div class="panelContent">
					<button type="button" class="btn btn-main" disabled="disabled">系统主题按钮</button>
					<button type="button" class="btn btn-default" disabled="disabled">默认按钮</button>
					<button type="button" class="btn btn-primary" disabled="disabled">原始按钮</button>
					<button type="button" class="btn btn-success" disabled="disabled">成功按钮</button>
					<button type="button" class="btn btn-info" disabled="disabled">信息按钮</button>
					<button type="button" class="btn btn-warning" disabled="disabled">警告按钮</button>
					<button type="button" class="btn btn-danger" disabled="disabled">危险按钮</button>
					<button type="button" class="btn btn-link" disabled="disabled">链接按钮</button>
				</div><!-- /panelContent -->
				
				<div class="panelContent">
					<button type="button" class="btn btn-main"><i class="fa fa-cog"></i>默认颜色图标按钮</button>
					<button type="button" class="btn btn-default"><i class="fa fa-cog ico-main"></i>主题色图标按钮</button>
					<button type="button" class="btn btn-default"><i class="fa fa-cog ico-primary"></i>蓝色图标按钮</button>
					<button type="button" class="btn btn-default"><i class="fa fa-cog ico-info"></i>浅蓝色图标按钮按钮</button>
					<button type="button" class="btn btn-default"><i class="fa fa-cog ico-success"></i>绿色图标按钮</button>
					<button type="button" class="btn btn-default"><i class="fa fa-cog ico-warning"></i>黄色图标按钮</button>
					<button type="button" class="btn btn-default"><i class="fa fa-cog ico-danger"></i>红色图标按钮</button>
					<button type="button" class="btn btn-default"><i class="fa fa-cog ico-gray"></i>灰色图标按钮</button>
				</div><!-- /panelContent -->
				
				<div class="panelContent">
					<button type="button" class="btn btn-default"><i class="fa fa-cog ico-main"></i>默认大小</button>
					<button type="button" class="btn btn-default btn-lg"><i class="fa fa-cog ico-main"></i>大按钮</button>
					<button type="button" class="btn btn-default btn-sm"><i class="fa fa-cog ico-main"></i>小按钮</button>
					<button type="button" class="btn btn-default btn-xs"><i class="fa fa-cog ico-main"></i>超小按钮</button>
				</div><!-- /panelContent -->
				<!-- /按钮元素 -->
				
				<!-- 模态框-->
				<div class="panelTitle">
				 模态框
				</div>
				<div class="panelContent">
					<button id="button01" type="button" class="btn btn-main">弹出框</button>
					<button id="button02" type="button" class="btn btn-success">成功提示框</button>
					<button id="button03" type="button" class="btn btn-danger">失败提示框</button>
					<button id="button04" type="button" class="btn btn-warning">警告提示框</button>
					<button id="button05" type="button" class="btn btn-info">询问提示框</button>
				</div><!-- /panelContent -->
				<!-- 模态框-->
				
				
				<!-- tab标签页  -->
				<div class="panelTitle">
				 tab标签页
				</div>
				<div class="panelContent">
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
				</div><!-- /panelContent -->
				<!--/ tab标签页  -->
			</div><!-- /panelBox -->
			
			
			
			<div class="panelBox">
				<div class="panelTitle">
				 垂直table布局
				</div>
				<div class="panelContent">
				
					<!-- 没有表头的table -->
					<div class="secondTitle">1、没有表头的table（table table-bordered）</div>
					<div class="saveTable">
						<table class="table table-bordered">
						  <tbody>
						    <tr>
						      <td align="right" width="10%">姓名：</td>
						      <td colspan="3">
						      	<input type="text" size="20">
						      </td>
						    </tr>
						    <tr>
						      <td align="right">性别：</td>
						      <td width="40%">
						      		<div class="input-radio" style="width:60px">
						      		<input type="radio" name="sex" value="">
						      		<span>男</span>
						      	</div>
						      	
						      	<div class="input-radio" style="width:60px">
									<input type="radio" name="sex" value="">
									<span>女</span>
								</div>
						      </td>
						      <td align="right" width="10%">出生日期：</td>
						      <td width="40%">
						      	<input type="text" size="20">
						      </td>
						    </tr>
						    <tr>
						      <td align="right">工作单位：</td>
						      <td colspan="3">
						      	<input type="text" size="50">
						      </td>
						    </tr>
						  </tbody>
						</table>
					</div><!-- /saveTable -->
					
					<!-- 有表头的table，且每单元格有线条 -->
					<div class="secondTitle">2、有表头且每单元格有线条的table（table table-bordered）</div>
					<div class="saveTable">
						<table class="table table-bordered">
						  <thead>
						    <tr>
						      <th colspan="6">用户基本信息</th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <td align="right" width="10%">姓名：</td>
						      <td colspan="5">
						      	<input type="text" size="20">
						      </td>
						    </tr>
						    <tr>
						      <td align="right">性别：</td>
						      <td width="20%">
						      		<div class="input-radio" style="width:60px">
						      		<input type="radio" name="sex" value="">
						      		<span>男</span>
						      	</div>
						      	
						      	<div class="input-radio" style="width:60px">
									<input type="radio" name="sex" value="">
									<span>女</span>
								</div>
						      </td>
						      <td align="right" width="10%">出生日期：</td>
						      <td width="20%">
						      	<input type="text" size="20">
						      </td>
						      <td align="right" width="10%">民族：</td>
						      <td width="20%">
						      	<input type="text" size="20">
						      </td>
						    </tr>
						    <tr>
						      <td align="right">工作单位：</td>
						      <td colspan="5">
						      	<input type="text" size="50">
						      </td>
						    </tr>
						  </tbody>
						</table>
					</div><!-- /saveTable -->
					
					<!-- 有表头的table，且每行有线条 -->
					<div class="secondTitle">3、有表头且每行有线条的table（table table-solid-line）</div>
					<div class="saveTable">
						<table class="table table-solid-line">
						  <thead>
						    <tr>
						      <th colspan="6">用户基本信息</th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <td align="right" width="10%">姓名：</td>
						      <td colspan="5">
						      	<input type="text" size="20">
						      </td>
						    </tr>
						    <tr>
						      <td align="right">性别：</td>
						      <td width="20%">
						      		<div class="input-radio" style="width:60px">
						      		<input type="radio" name="sex" value="">
						      		<span>男</span>
						      	</div>
						      	
						      	<div class="input-radio" style="width:60px">
									<input type="radio" name="sex" value="">
									<span>女</span>
								</div>
						      </td>
						      <td align="right" width="10%">出生日期：</td>
						      <td width="20%">
						      	<input type="text" size="20">
						      </td>
						      <td align="right" width="10%">民族：</td>
						      <td width="20%">
						      	<input type="text" size="20">
						      </td>
						    </tr>
						    <tr>
						      <td align="right">工作单位：</td>
						      <td colspan="5">
						      	<input type="text" size="50">
						      </td>
						    </tr>
						  </tbody>
						</table>
					</div><!-- /saveTable -->
					
					<!-- 有表头的table，且每行有线条 -->
					<div class="secondTitle">4、有表头且每行有虚线条的table（table table-dashed-line）</div>
					<div class="saveTable">
						<table class="table table-dashed-line">
						  <thead>
						    <tr>
						      <th colspan="6">用户基本信息</th>
						    </tr>
						  </thead>
						  <tbody>
						    <tr>
						      <td align="right" width="10%">姓名：</td>
						      <td colspan="5">
						      	<input type="text" size="20">
						      </td>
						    </tr>
						    <tr>
						      <td align="right">性别：</td>
						      <td width="20%">
						      		<div class="input-radio" style="width:60px">
						      		<input type="radio" name="sex" value="">
						      		<span>男</span>
						      	</div>
						      	
						      	<div class="input-radio" style="width:60px">
									<input type="radio" name="sex" value="">
									<span>女</span>
								</div>
						      </td>
						      <td align="right" width="10%">出生日期：</td>
						      <td width="20%">
						      	<input type="text" size="20">
						      </td>
						      <td align="right" width="10%">民族：</td>
						      <td width="20%">
						      	<input type="text" size="20">
						      </td>
						    </tr>
						    <tr>
						      <td align="right">工作单位：</td>
						      <td colspan="5">
						      	<input type="text" size="50">
						      </td>
						    </tr>
						  </tbody>
						</table>
					</div><!-- /saveTable -->
					
					<!-- 有表头的table，且每行有线条 -->
					<div class="secondTitle">5、没有线条的table（table table-no-bordered）</div>
					<div class="saveTable">
						<table class="table table-no-bordered">
						  <tbody>
						    <tr>
						      <td align="right" width="10%">姓名：</td>
						      <td colspan="5">
						      	<input type="text" size="20">
						      </td>
						    </tr>
						    <tr>
						      <td align="right">性别：</td>
						      <td width="20%">
						      		<div class="input-radio" style="width:60px">
						      		<input type="radio" name="sex" value="">
						      		<span>男</span>
						      	</div>
						      	
						      	<div class="input-radio" style="width:60px">
									<input type="radio" name="sex" value="">
									<span>女</span>
								</div>
						      </td>
						      <td align="right" width="10%">出生日期：</td>
						      <td width="20%">
						      	<input type="text" size="20">
						      </td>
						      <td align="right" width="10%">民族：</td>
						      <td width="20%">
						      	<div class="input-checkbox" style="width:70px">
						      		<input type="checkbox" name="" value="">
						      		<span>土家族</span>
						      	 </div>
						      	 
						      	 <div class="input-checkbox" style="width:60px">
						      		<input type="checkbox" name="" value="">
						      		<span>苗族</span>
						      	 </div>
						      	 
						      	 <div class="input-checkbox" style="width:60px">
						      		<input type="checkbox" name="" value="">
						      		<span>人族</span>
						      	 </div>
						      </td>
						    </tr>
						    <tr>
						      <td align="right">工作单位：</td>
						      <td colspan="5">
						      	<input type="text" size="50">
						      </td>
						    </tr>
						  </tbody>
						</table>
					</div><!-- /saveTable -->
					
					
					<div class="panelTitle">
					 水平table布局（table table-bordered table-hover）
					</div>
					<div class="panelContent">
						<div class="saveTable">
							<table class="table table-bordered table-hover">
								  <thead>
								    <tr>
								      <th>名称</th>
								      <th>城市</th>
								      <th>邮编</th>
								    </tr>
								  </thead>
								  <tbody>
								    <tr>
								      <td>Tanmay</td>
								      <td>Bangalore</td>
								      <td>560001</td>
								    </tr>
								    <tr>
								      <td>Sachin</td>
								      <td>Mumbai</td>
								      <td>400003</td>
								    </tr>
								    <tr>
								      <td>Uma</td>
								      <td>Pune</td>
								      <td>411027</td>
								    </tr>
								  </tbody>
							</table>
						</div>
					</div><!-- /panelContent -->
					
				</div><!-- /panelContent -->
			</div><!-- /panelBox -->
		</div><!-- /mainContent -->
	</div><!-- /pageContainer -->
</body>
</html>