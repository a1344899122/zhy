<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>列表页面</title>
	
	<%@include file='/js/ws-ui/V4.0/ws-load-list-ui.jsp'%>
	<script type="text/javascript">
		var table={
			initTable:function() {
				ws.tools.getList({
					BTable:"#meetingApplyTable",
					url:"../json/table.json",
					sidePagination:"client",
					toolbar:"#toolbar",
					columns: [{
							checkbox: true,
				          	align: 'center',
				          	valign: 'middle'
				      	},{
			        	    field: 'field1',
			                title: '会议名称',
			                sortable: true
			            }, {
			                field: 'field2',
			                title: '主办单位',
			                sortable: true,
			                align: 'left'
			            }, {
			                field: 'field3',
			                title: '联系人',
			                sortable: true,
			                align: 'left',
			                width:50
			            }, {
			                field: 'field4',
			                title: '联系电话',
			                align: 'left',
			                width:50
			            }, {
			                field: 'field5',
			                title: '会议时间',
			                align: 'left'
			            }, 
			            {
			                field: 'field10',
			                title: '会议级别',
			                align: 'center',
			                width:50
			            }, {
			                field: 'field6',
			                title: '申请人',
			                align: 'center',
			                hideColumn:true
			            }, {
			                field: 'field7',
			                title: '申请时间',
			                align: 'center',
			                hideColumn:true
			            },{
			                field: 'field8',
			                title: '申请状态',
			                align: 'center',
			                width:60
			            }, {
			                field: 'field9',
			                title: '操作',
			                align: 'center',
			                events: table.operateEvents,
			                formatter: table.operateFormatter,
			                width:80
			        }]
				})
			},
			operateFormatter:function(value, row, index) {
			    return [
			            '<a class="update" href="javascript:void(0)" title="修改">',
			            '<i class="ace-icon fa fa-pencil bigger-130 ico-primary"></i>',
			            '</a>&nbsp;&nbsp;',
			             '<a class="remove" href="javascript:void(0)" title="删除">',
			            '<i class="ace-icon fa fa-trash-o bigger-130 ico-danger"></i>',
			            '</a>&nbsp;&nbsp;',
			            '<a class="like" href="javascript:void(0)" title="查看">',
			            '<i class="ace-icon fa fa-search-plus bigger-130 ico-info"></i>',
			            '</a>'
			    ].join('');
			}
		}
		
		
		$(function(){
			//初始化表格
			table.initTable(); 
			$("#meetingApplyTable").resizableColumns({});
			
		})
		</script>
</head>

<body>
	<div class="pageContainer">
		<!-- 导航 -->
		<div class="crumbs">
			<ol class="breadcrumb">
				<li><i class="fa fa-home"></i> <a href="welcome.jsp">首页</a></li>
				<li ><a href="#"  class="active" title="">列表页面</a></li>
			</ol>
		</div>
		<!-- 内容 -->
		<div class="mainContent">
			<div class="panelBox">
				<!-- <div class="panelTitle">
					 输入框
				</div> -->
				<div class="panelContent">
					<!-- 查询条件 -->
					<div class="searchTable">
						<table class="table">
							  <tr>
							    <td align="right"  nowrap="nowrap">年度：</td>
							    <td nowrap="nowrap"><input type="text" size="15"/></td>
							    <td align="right"  nowrap="nowrap">项目名称：</td>
							    <td nowrap="nowrap"><input type="text" size="35"/></td>
							    <td align="right"  nowrap="nowrap">申报等级：</td>
							    <td nowrap="nowrap">
							    	<select style="width:125px;">
							    		<option>最高</option>
							    		<option>较高</option>
							    		<option>一般</option>
							    	</select>
							    </td>
							    <td align="right" nowrap="nowrap">申报状态：</td>
							    <td nowrap="nowrap"><input type="text" size="15"/></td>
							  </tr>
							  <tr class="moreSeachField">
							    <td align="right"  nowrap="nowrap">年度：</td>
							    <td nowrap="nowrap"><input type="text" size="15"/></td>
							    <td align="right"  nowrap="nowrap">项目名称：</td>
							    <td nowrap="nowrap"><input type="text" size="35"/></td>
							    <td align="right"  nowrap="nowrap">申报等级：</td>
							    <td nowrap="nowrap">
							    	<select style="width:125px;">
							    		<option>最高</option>
							    		<option>较高</option>
							    		<option>一般</option>
							    	</select>
							    </td>
							    <td align="right" nowrap="nowrap">申报状态：</td>
							    <td nowrap="nowrap"><input type="text" size="15"/></td>
							  </tr>
							  <tr>
							    <td align="right"  nowrap="nowrap">申报人：</td>
							    <td nowrap="nowrap"><input type="text" size="15"/></td>
							    <td align="right"  nowrap="nowrap">申报时间：</td>
							    <td nowrap="nowrap">
							    	<input type="text" size="15"/>-<input type="text" size="15"/>
							    </td>
						  	    <td align="right" nowrap="nowrap" colspan="4">
									<button type="button" class="btn btn-main" onClick="project.query()">
										<i class="fa fa-search"></i>
											查询
									</button>
									<button type="reset" class="btn">
										<i class="fa fa-refresh"></i>重置
									</button>
									<button id="moreSerach" type="button" class="btn btn-link">
										<i class="fa fa-angle-double-down"></i>更多搜索
									</button>
								</td>
							  </tr>
						</table>
					</div>	
					
					<!-- 操作按钮 -->
					<div id="toolbar" >
			            <button class="btn btn-default" onClick="projectFun.add()"> 
							<i class="glyphicon glyphicon-plus ico-main" aria-hidden="true"></i>&nbsp;新&nbsp;增
						</button>
			            <button class="btn btn-default" onClick="projectFun.batchDel()">
			            	  <i class="glyphicon glyphicon-remove ico-danger" aria-hidden="true"></i>&nbsp;删&nbsp;除
			            </button>
			            
			             <button class="btn btn-default" onClick="projectFun.submitProject()">
			                <i class="glyphicon glyphicon-ok-sign ico-info"  aria-hidden="true"></i>提交申报
			            </button>
			            <button class="btn btn-default" onClick="projectFun.undoProject()">
			            	  <i class="glyphicon glyphicon-remove-sign ico-warning" aria-hidden="true"></i>&nbsp;撤&nbsp;销
			            </button>
			        </div>
			        
					<!-- 数据列表 -->
					<table id="meetingApplyTable"></table>
				</div>
			</div>
		</div>
	</div>
</body>
</html>