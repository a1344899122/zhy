<%@ page language="java" contentType="text/html; charset=UTF-8"
    pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
	<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
	<title>列表页面</title>
	
	<%@include file='/js/ws-ui/V6.0/ws-load-list-ui.jsp'%>
	
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
			                align: 'center'
			            }, {
			                field: 'field3',
			                title: '联系人',
			                sortable: true,
			                align: 'center'
			            }, {
			                field: 'field4',
			                title: '联系电话',
			                align: 'center'
			            }, {
			                field: 'field5',
			                title: '会议时间',
			                align: 'center'
			            }, 
			            {
			                field: 'field10',
			                title: '会议级别',
			                align: 'center'
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
			                align: 'center'
			            }, {
			                field: 'field9',
			                title: '操作',
			                align: 'center',
			                events: table.operateEvents,
			                formatter: table.operateFormatter
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
		<!-- 内容 -->
		<div class="mainContent">
			<div class="panelBox">
				<div class="panelContent">
					
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
			        </div><!-- /toolbar -->
			        
					<!-- 数据列表 -->
					<table id="meetingApplyTable"></table>
				</div><!-- /panelContent -->
			</div><!-- /panelBox -->
		</div><!-- /mainContent -->
		
		<!--底部按钮  -->
		<div class="footerButtonBox">
			<div class="buttonConent">
				<button id="submitBtn" type="button" class="btn btn-main"><i class="fa fa-check bigger-110"></i>保存</button>
				<button id="submitBtn1" type="button" class="btn btn-success">打开下一个测试模态框</button>
				<button id="resetBtn" type="button" class="btn btn-default"><i class="fa fa-undo bigger-110"></i>重置</button>
				<button id="closeBtn"  type="button" class="btn btn-default"><i class="fa fa-times bigger-110 ico-danger"></i>关闭</button>
			</div>
		</div><!-- /footerButtonBox -->
		
	</div><!-- /pageContainer -->
</body>
</html>