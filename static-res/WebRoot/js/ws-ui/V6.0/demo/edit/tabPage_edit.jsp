<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>编辑页面</title>
	
	<%@include file='/js/ws-ui/V6.0/ws-load-edit-ui.jsp'%>
	
	<script type="text/javascript">
	
		$(function(){
		});
		
		
	
	</script>
	
</head>
<body>

	<div class="pageContainer">
		<!-- 内容 -->
		<div class="mainContent">
			<!-- 页面标题 -->
			<div class="pageTitle">
				<span>用户信息(一级标题)</span>
			</div>
			<!-- 面板盒子 -->
			<div class="panelBox">
				<!-- 基本输入框  -->
				<div class="panelTitle">
				用户基本信息（二级标题）
				</div>
				<div class="panelContent">
					<div class="secondTitle">账号信息（三级标题）</div>
					<div class="saveTable">
						<table class="table table-dashed-line">
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
						      <div class="input-radio" style="width:60px">
						      		<input type="radio" name="sex" value="">
						      		<span>男</span>
						      	</div>
						      	
						      	<div class="input-radio" style="width:60px">
									<input type="radio" name="sex" value="">
									<span>女</span>
								</div>
								
								<div class="input-radio" style="width:60px">
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
						      	<div class="input-checkbox" style="width:60px">
						      		<input type="checkbox" name="" value="">
						      		<span>篮球</span>
						      	 </div>
						      	 <div class="input-checkbox" style="width:60px">
									<input type="checkbox" name="" value="">
									<span>足球</span>
								 </div>
								  <div class="input-checkbox" style="width:60px">
								     <input type="checkbox" name="" value="">
									 <span>旅行</span>
								  </div>
								   <div class="input-checkbox" style="width:60px">
								     <input type="checkbox" name="" value="">
									 <span>看书</span>
								  </div>
								   <div class="input-checkbox" style="width:60px">
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
						      	<button class="btn btn-default ">选择</button>
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
					</div>
				</div><!-- /panelContent -->
			</div><!-- /panelBox -->
		</div><!-- /mainContent -->
		
		<div class="footerButtonBox">
			<div class="buttonConent">
				<button id="submitBtn" type="button" class="btn btn-main"><i class="fa fa-check bigger-110"></i>保存</button>
				<button id="submitBtn1" type="button" class="btn btn-main">打开百度</button>
				<button id="resetBtn" type="button" class="btn btn-default"><i class="fa fa-undo bigger-110"></i>重置</button>
				<button id="closeBtn"  type="button" class="btn btn-default"><i class="fa fa-times bigger-110 ico-danger"></i>关闭</button>
			</div>
		</div>
	</div><!-- /pageContainer -->
</body>
</html>