<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>欢迎页</title>
<%@include file="/js/ws-ui/V5.0/ws-load-list-ui.jsp"%>
</head>
<style type="text/css">
body {
	background-color: #f5f5f5;
	overflow: auto;
}

.box {
	width: 100%;
	padding: 18px 20px 0px 20px;
}

.box_title {
	width: 100%;
	height: 40px;
	line-height: 40px;
	background-color: #f5f5f5;
	color: #888;
}

.box_title ul {
	float: left;
	width: 100%;
	height: 40px;
	margin: 0 auto;
}

.box_title>ul>li {
	float: left;
}

.box_title>ul>li a.active {
	color: #2c63ff;
	background-color: #fff;
}

.box_title>ul>li a {
	display: block;
	width: 130px;
	height: 40px;
	line-height: 40px;
	border-radius: 4px 4px 0 0;
	color: #000;
	font-size: 16px !important;
	text-align: center;
}

.box_title>ul>li a:hover {
	color: #2c63ff;
}

.box_title>ul {
	list-style: none;
	padding-left: 0px;
}

.box_title>ul>li>a, a:active, a:hover, a:link, a:visited {
	text-decoration: none;
	outline: none;
}

.box_container {
	float: left;
	width: 100%;
	margin: 0 auto;
	background-color: #fff;
	padding-left: 10px;
	padding: 10px;
}

.content_box {
	float: left;
	width: 50%;
	padding: 5px;
}

.info_box {
	position: relative;
	float: left;
	width: 100%;
	margin: 0 auto;
	padding: 15px;
	min-height: 40px;
	line-height: 40px;
	text-align: left;
	-o-transition: all 0.15s, 0.15s;
	-moz-transition: all 0.15s, 0.15s;
	-webkit-transition: all 0.15s, 0.15s;
	padding-left: 15px;
	background: #fff;
	border: 1px solid #ccc;
}

.info_box>ul {
	float: left;
	margin: 0px;
	margin-right: 5px;
	padding-left: 5px;
	padding-right: 5px;
	list-style: none;
}

.info_box>ul>li {
	padding-left: 5px;
	padding-right: 5px;
	font-size: 14px !important;
	height: 26px;
	line-height: 26px;
}

.info_box>ul>li:FIRST-CHILD {
	font-size: 16px !important;
	font-weight: bolder !important;
}

/* .btn{
	margin-bottom: 10px !important;
} */
.btn_box {
	width: 100%;
	float: right;
	text-align: right;
}

.img_box {
	display: block;
	float: left;
	width: 100px;
	height: 100px;
	width: 100px;
}

.bookmark {
	font-size: 53px !important;
	position: absolute;
	top: -1px;
	right: 0px;
	color: #999;
}

.bookmark-font {
	color: white;
	font-size: 12px !important;
	position: absolute;
	top: 0px;
	right: 6px;
}

.bookmark.orange {
	color: #f0ad4e;
}

.bookmark.green {
	color: #5cb85c;
}
.table_box{
	padding: 5px;
}

.third-level{
	width:100%;
	height:30px;
	text-align: center;
	border-bottom: 1px solid #ccc;
	margin-bottom: 5px;
}
.third-level a{
	color:#333;
	width:150px;
	height:30px;
	display: inline-block;
	
}

.third-level a.active{
	border-bottom: 3px solid #ff0000;
	color:#ff0000;
	cursor:pointer;
}


.third-level a:hover{
cursor:pointer;
}
</style>

<body>

	<div class="box">
		<div class="box_title">
			<ul>
				<li><a class="" href="twolevelmenudemo.jsp">我发起的</a></li>
				<li><a class="" href="twolevelmenudemo2.jsp">我参与的</a></li>
				<li><a class="active" href="twolevelmenudemo3.jsp">会议设置</a></li>
			</ul>
		</div>

		<div class="box_container">
			
			<div class="third-level">
				<a class="" href="twolevelmenudemo.jsp">所有</a>
				<a href="twolevelmenudemo2.jsp">发起的</a>
				<a class="active" href="twolevelmenudemo3.jsp">参与的</a>
			</div>

			<div class="table_box">
				<form id="meeting_appointment">
				<%=request.getContextPath()%>	会议状态： <label class="label label-primary">不限</label>&nbsp;
						    <label>未开始</label>&nbsp;
					     	<label>进行中</label>&nbsp;
					   		<label>已结束</label>&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;
					会议名称： <input type="text" size="25" id="name_full_" name="name_full_" />

					<button type="button" class="btn btn-main btn-height"
						onClick="sys_organ.query()">
						<i class="fa fa-search"></i>查询
					</button>
					<button type="button" class="btn btn-height" onClick="table.resert()">
						<i class="fa fa-refresh"></i>重置
					</button>
				</form>

			</div>

			<div class="content_box">

				<div class="info_box">
					<span class="glyphicon  glyphicon-bookmark bookmark orange"></span>
					<span class=" bookmark-font orange">未开始</span>


					<div class="img_box">
						<img src="../img/touxiang.jpg">
					</div>

					<ul>
						<li>会议名称 项目推进会</li>
						<li>会议时间：2017-04-12 10:00 至 2017-04-12 12:00</li>
						<li>会议形式：区级会议</li>
					</ul>

					<div class="btn_box">
						<button class="btn btn-info" id="download">提交</button>
						<button class="btn btn-warning" id="add">撤销</button>
						<button class="btn btn-main" id="add">派工</button>
						<button class="btn btn-warning" id="add">通知</button>
						<button class="btn btn-main" id="add">考核</button>
						<button class="btn btn-warning" id="add">导出</button>
						<button class="btn btn-main" id="add">派工</button>
						<button class="btn btn-warning" id="add">通知</button>
					</div>
				</div>
			</div>

			<div class="content_box">
				<div class="info_box">
					<span class="glyphicon  glyphicon-bookmark bookmark orange"></span>
					<span class=" bookmark-font orange">未开始</span>

					<div class="img_box">
						<img src="../img/touxiang.jpg">
					</div>

					<ul>
						<li>会议名称 项目推进会</li>
						<li>会议时间：2017-04-12 10:00 至 2017-04-12 12:00</li>
						<li>会议形式：区级会议</li>
						<li>会议名称：项目推进会</li>
						<li>会议时间：2017-04-12 10:00 至 2017-04-12 12:00</li>
						<li>会议形式：区级会议</li>
					</ul>

					<div class="btn_box">
						<button class="btn btn-info" id="download">提交</button>
						<button class="btn btn-warning" id="add">撤销</button>
						<button class="btn btn-main" id="add">派工</button>
						<button class="btn btn-warning" id="add">通知</button>
						<button class="btn btn-main" id="add">考核</button>
						<button class="btn btn-warning" id="add">导出</button>
						<button class="btn btn-main" id="add">派工</button>
						<button class="btn btn-warning" id="add">通知</button>
					</div>
				</div>
			</div>

			<div class="content_box">
				<div class="info_box">

					<span class="glyphicon  glyphicon-bookmark bookmark"></span> <span
						class=" bookmark-font"> 已结束</span>

					<div class="img_box">
						<img src="../img/touxiang.jpg">
					</div>

					<ul>
						<li>会议名称 项目推进会</li>
						<li>会议时间：2017-04-12 10:00 至 2017-04-12 12:00</li>
						<li>会议形式：区级会议</li>
						<li>会议名称：项目推进会</li>
						<li>会议时间：2017-04-12 10:00 至 2017-04-12 12:00</li>
						<li>会议形式：区级会议</li>
					</ul>

					<div class="btn_box">
						<button class="btn btn-info" id="download">提交</button>
						<button class="btn btn-warning" id="add">撤销</button>
						<button class="btn btn-main" id="add">派工</button>
						<button class="btn btn-warning" id="add">通知</button>
						<button class="btn btn-main" id="add">考核</button>
						<button class="btn btn-warning" id="add">导出</button>
						<button class="btn btn-main" id="add">派工</button>
						<button class="btn btn-warning" id="add">通知</button>
					</div>
				</div>
			</div>

			<div class="content_box">
				<div class="info_box">

					<span class="glyphicon  glyphicon-bookmark bookmark"></span> <span
						class=" bookmark-font"> 已结束</span>
					<div class="img_box">
						<img src="../img/touxiang.jpg">
					</div>

					<ul>
						<li>会议名称：项目推进会</li>
						<li>会议时间：2017-04-12 10:00 至 2017-04-12 12:00</li>
						<li>会议形式：区级会议</li>
						<li>联系人：刘近海</li>
						<li>联系电话：1368512232</li>
						<li>会议状态：已结束</li>
					</ul>

					<div class="btn_box">
						<button class="btn btn-warning" id="add">派工设置</button>
						<button class="btn btn-main" id="add">派工设置</button>
						<button class="btn btn-info" id="download">导出派工名单</button>
						<button class="btn btn-main" id="add">派工设置</button>
						<button class="btn btn-info" id="download">导出派工名单</button>
					</div>
				</div>
			</div>

			<div class="content_box">
				<div class="info_box">

					<span class="glyphicon  glyphicon-bookmark bookmark"></span> <span
						class=" bookmark-font"> 已结束</span>
					<div class="img_box">
						<img src="../img/touxiang.jpg">
					</div>

					<ul>
						<li>会议名称：项目推进会</li>
						<li>会议时间：2017-04-12 10:00 至 2017-04-12 12:00</li>
						<li>会议形式：区级会议</li>
						<li>联系人：刘近海</li>
						<li>联系电话：1368512232</li>
						<li>会议状态：已结束</li>
					</ul>

					<div class="btn_box">
						<button class="btn btn-warning" id="add">派工设置</button>
						<button class="btn btn-main" id="add">派工设置</button>
						<button class="btn btn-info" id="download">导出派工名单</button>
					</div>
				</div>
			</div>

			<div class="content_box">
				<div class="info_box">
					<span class="glyphicon  glyphicon-bookmark bookmark green"></span>
					<span class=" bookmark-font green"> 进行中</span>
					<div class="img_box">
						<img src="../img/touxiang.jpg">
					</div>

					<ul>
						<li>会议名称：项目推进会</li>
						<li>会议时间：2017-04-12 10:00 至 2017-04-12 12:00</li>
						<li>会议形式：区级会议</li>
						<li>联系人：刘近海</li>
						<li>联系电话：1368512232</li>
						<li>会议状态：已结束</li>
					</ul>

					<div class="btn_box">
						<button class="btn btn-warning" id="add">派工设置</button>
						<button class="btn btn-main" id="add">派工设置</button>
						<button class="btn btn-info" id="download">导出派工名单</button>
					</div>
				</div>
			</div>

			<div style="text-align: center;">
				<ul class="pagination pagination-lg">
					<li><a href="#">上一页</a></li>
					<li><a href="#">1</a></li>
					<li><a href="#">2</a></li>
					<li><a href="#">3</a></li>
					<li><a href="#">4</a></li>
					<li><a href="#">5</a></li>
					<li><a href="#">下一页</a></li>
				</ul>
			</div>

		</div>



	</div>
	
	<script type="text/javascript">
		$(function(){
				var iframes=$('#mainContentIframe',window.parent.document);
				var IframeBody=$(iframes.contents()).find('body');//获取当前的iframe的body
				iframes.height(IframeBody.height());
		})
	</script>



</body>
</html>