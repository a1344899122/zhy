<%@ page language="java" contentType="text/html; charset=UTF-8"
	pageEncoding="UTF-8"%>

<!DOCTYPE html PUBLIC "-//W3C//DTD HTML 4.01 Transitional//EN" "http://www.w3.org/TR/html4/loose.dtd">
<html>
<head>
<meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
<title>欢迎页</title>
<%@include file="/js/ws-ui/V5.0/ws-load-list-ui.jsp"%>
</head>

<body>

	<div class="pageContainer">

		<div class="mainContent">
			<div class="box_container">
			<div class="table_box">
				<form id="meeting_appointment">
					会议状态： <label class="label label-primary">不限</label>&nbsp; <label>未开始</label>&nbsp;
					<label>进行中</label>&nbsp; <label>已结束</label>&nbsp;
					&nbsp;&nbsp;&nbsp;&nbsp;&nbsp;&nbsp; 会议名称： <input type="text"
						size="25" id="name_full_" name="name_full_" />

					<button type="button" class="btn btn-main btn-height"
						onClick="sys_organ.query()">
						<i class="fa fa-search"></i>查询
					</button>
					<button type="button" class="btn btn-height"
						onClick="table.resert()">
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
						<li><a>会议名称 项目推进会</a></li>
						<li>会议时间：2017-04-12 10:00 至 2017-04-12 12:00</li>
						<li>会议形式：区级会议</li>
						<li>会议名称 项目推进会</li>
						<li>会议时间：2017-04-12 10:00 至 2017-04-12 12:00</li>
						<li>会议形式：区级会议</li>
					</ul>

					<div class="btn_box">
						<button class="btn btn-default" id="download">
							<i class="glyphicon glyphicon-plus ico-main" ></i>提交
						</button>
						<button class="btn btn-default" id="add">
							<i class="glyphicon glyphicon-pencil ico-info"></i>撤销
						</button>
						<button class="btn btn-default" id="add">派工</button>
						<button class="btn btn-default" id="add">通知</button>
						<button class="btn btn-default" id="add">考核</button>
						<button class="btn btn-default" id="add">导出</button>
						<button class="btn btn-default" id="add">派工</button>
						<button class="btn btn-default" id="add">通知</button>
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
						<li><a>会议名称 项目推进会</a></li>
						<li>会议时间：2017-04-12 10:00 至 2017-04-12 12:00</li>
						<li>会议形式：区级会议</li>
						<li>会议名称 项目推进会</li>
						<li>会议时间：2017-04-12 10:00 至 2017-04-12 12:00</li>
						<li>会议形式：区级会议</li>
					</ul>

					<div class="btn_box">
						<button id="button01" type="button" class="btn btn-main">弹出框</button>
						<button id="button02" type="button" class="btn btn-success">成功提示框</button>
						<button id="button03" type="button" class="btn btn-danger">失败提示框</button>
						<button id="button04" type="button" class="btn btn-warning">警告提示框</button>
						<button id="button05" type="button" class="btn btn-info">询问提示框</button>
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
						<li><a>会议名称 项目推进会</a></li>
						<li>会议时间：2017-04-12 10:00 至 2017-04-12 12:00</li>
						<li>会议形式：区级会议</li>
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

					<span class="glyphicon  glyphicon-bookmark bookmark"></span> <span
						class=" bookmark-font"> 已结束</span>
					<div class="img_box">
						<img src="../img/touxiang.jpg">
					</div>

					<ul>
						<li><a>会议名称 项目推进会</a></li>
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
						<li><a>会议名称 项目推进会</a></li>
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

					<span class="glyphicon  glyphicon-bookmark bookmark"></span> <span
						class=" bookmark-font"> 已结束</span>
					<div class="img_box">
						<img src="../img/touxiang.jpg">
					</div>

					<ul>
						<li><a>会议名称 项目推进会</a></li>
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

					<span class="glyphicon  glyphicon-bookmark bookmark"></span> <span
						class=" bookmark-font"> 已结束</span>
					<div class="img_box">
						<img src="../img/touxiang.jpg">
					</div>

					<ul>
						<li><a>会议名称 项目推进会</a></li>
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

					<span class="glyphicon  glyphicon-bookmark bookmark"></span> <span
						class=" bookmark-font"> 已结束</span>
					<div class="img_box">
						<img src="../img/touxiang.jpg">
					</div>

					<ul>
						<li><a>会议名称 项目推进会</a></li>
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

					<span class="glyphicon  glyphicon-bookmark bookmark"></span> <span
						class=" bookmark-font"> 已结束</span>
					<div class="img_box">
						<img src="../img/touxiang.jpg">
					</div>

					<ul>
						<li><a>会议名称 项目推进会</a></li>
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
						<li><a>会议名称 项目推进会</a></li>
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
	</div>
</body>
</html>