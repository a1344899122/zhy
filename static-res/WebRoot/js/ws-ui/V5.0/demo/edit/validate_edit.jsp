<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>编辑页面</title>
	
	<%@include file='/js/ws-ui/V5.0/ws-load-edit-ui.jsp'%>
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
						<form id="expertEditForm">
							<table class="table table-dashed-line">
							    <tr>
							      <td align="right" width="12%">姓名：</td>
							      <td colspan="3">
							      	<input type="text" size="20" name="name">
							      </td>
							    </tr>
							    <tr>
							      <td align="right">账号：</td>
							      <td width="40%">
									<input type="text" size="20" name="accounts">
							      </td>
							      <td align="right" width="12%">密码：</td>
							      <td width="40%">
							      	<input type="password" size="20" name="password">
							      </td>
							    </tr>
							    <tr>
							      <td align="right">性别：</td>
							      <td width="40%">
							      <div class="input-radio" style="width:60px">
							      		<input type="radio" name="sex" value="1">
							      		<span>男</span>
							      	</div>
							      	
							      	<div class="input-radio" style="width:60px">
										<input type="radio" name="sex"  value="0">
										<span>女</span>
									</div>
									
									<div class="input-radio" style="width:60px">
										<input type="radio"  name="sex" value="3" disabled="disabled">
										<span>禁用</span>
									</div>
							      </td>
							      <td align="right" width="10%">出生日期：</td>
							      <td width="40%">
							      	<input type="text" size="20" name="birthday">
							      </td>
							    </tr>
							    <tr>
							      <td align="right">爱好：</td>
							      <td width="40%">
							      	<div class="input-checkbox" style="width:60px">
							      		<input type="checkbox" name="like" value="1">
							      		<span>篮球</span>
							      	 </div>
							      	 <div class="input-checkbox" style="width:60px">
										<input type="checkbox" name="like" value="0">
										<span>足球</span>
									 </div>
									  <div class="input-checkbox" style="width:60px">
									     <input type="checkbox" name="like" value="2">
										 <span>旅行</span>
									  </div>
									   <div class="input-checkbox" style="width:60px">
									     <input type="checkbox" name="like" value="4">
										 <span>看书</span>
									  </div>
									   <div class="input-checkbox" style="width:60px">
									     <input type="checkbox" name="like" value="8" disabled>
										 <span>旅行</span>
									  </div>
							      </td>
							      <td align="right" width="10%">民族：</td>
							      <td width="40%">
							      	<select style="width: 151px;" name="mingzu">
							      	    <option></option>
							      		<option>汉族</option>
							      		<option>土家族</option>
							      		<option>苗族</option>
							      		<option>瑶族</option>
							      		<option>侗族</option>
							      		<option>不简单族</option>
							      	</select>
							      </td>
							    </tr>
							    <tr>
							      <td align="right">工作单位：</td>
							      <td colspan="3">
							      	<input type="text" size="51" name="work">
							      	<button class="btn btn-default ">选择</button>
							      </td>
							    </tr>
							    <tr>
							      <td align="right">联系地址：</td>
							      <td colspan="3">
							      	<input type="text" size="59" name="lianxi">
							      </td>
							    </tr>
							     <tr>
							      <td align="right">简历：</td>
							      <td colspan="3">
							      	<input type="file" size="59" name="jianli">
							      </td>
							    </tr>
							    <tr>
							      <td align="right">备注：</td>
							      <td colspan="3">
							      	<textarea rows="10" cols="60" name="note"></textarea>
							      </td>
							    </tr>
							</table>
						
						</form>
						
					</div>
				</div><!-- /panelContent -->
			</div><!-- /panelBox -->
		</div><!-- /mainContent -->
		
		
		
		<div class="footerButtonBox">
			<div class="buttonConent">
				<button id="submitBtn" type="button" class="btn btn-main">查看提交的数据</button>
				<button id="submitBtn1" type="button" class="btn btn-main">数据校验</button>
			</div>
		</div>
		
		
		
	</div><!-- /pageContainer -->

		
	
	<script type="text/javascript">
	
		$(function(){
			
			//加载校验数据
			var validate=ws.tools.loadValidate('http://127.0.0.1:8080/static-res/js/ws-ui/V5.0/demo/json/validate.json');
			console.log(validate);
			
			
			$("#submitBtn1").click(function(){
				
				var response=ws.tools.formValidate(validate);
				if(!response.result){
					var errMsg="";
					if(response.errorMessages&&response.errorMessages.length>0){
						$.each(response.errorMessages,function(i){
							errMsg+=response.errorMessages[i]+"</br>";
						});
					}
					ws.tools.modalDialog.alert(errMsg,3);
				}else{
					ws.tools.modalDialog.alert("亲，你终于通过了");
				}
				
			})
			
			$("#submitBtn").click(function(){
				var errMsg="";
				window.data=$.extend({},ws.tools.formData($("#expertEditForm")));
				console.log(data)
				for(var i in  data){
					console.log(data[i])
					errMsg+=i+":"+data[i]+"</br>";
				}
				ws.tools.modalDialog.alert(errMsg,3);
				
			})
			
			
			
		});
	</script>
	
</body>
</html>