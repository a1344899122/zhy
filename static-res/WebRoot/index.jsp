<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
<meta charset="utf-8">
<meta name="viewport" content="width=device-width, initial-scale=1.0, minimum-scale=1.0, maximum-scale=1.0, user-scalable=0" />
<title>UI框架</title>
<link rel="shortcut icon" type="image/x-icon" href="/static-res/js/ws-ui/V4.0/img/logo_white.png" /> 
<!-- bootstrap -->
<link rel="stylesheet" href="<%=request.getContextPath()%>/js/net-js/bootstrap-v3.1.1/css/bootstrap.min.css">
<!-- 引入字体样式 -->
<link rel="stylesheet" href="<%=request.getContextPath()%>/js/net-js/font-awesome-v4.7.0/css/font-awesome.min.css">
<!-- 图标样式 -->
<link rel="stylesheet" href="<%=request.getContextPath()%>/js/ws-ui/V4.0/css/net/icon/font-awesome.css">
<link rel="stylesheet" href="<%=request.getContextPath()%>/js/ws-ui/V4.0/css/net/icon/simple-line-icons.css" >
<script type="text/javascript" src="<%=request.getContextPath()%>/js/net-js/jquery-v2.1.4/jquery-2.1.4.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/net-js/bootstrap-v3.1.1/js/bootstrap.min.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/net-js/jquery-ui-v1.12.1/jquery-ui.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/net-js/jquery-v2.1.4/jquery.cookie.js"></script>

<script type="text/javascript">
;(function ( $, window, document, undefined ) {
	 ssoLoginUrl="http://127.0.0.1:8080/static-res/pages/jsp/other/login.jsp"
})( jQuery, window, document );

	
</script>

<script type="text/javascript" src="<%=request.getContextPath()%>/js/ws-tools/ws-tools-sidebar-menu.js"></script>
<link rel="stylesheet" href="<%=request.getContextPath()%>/js/ws-ui/V4.0/css/index.css">
<script type="text/javascript" src="<%=request.getContextPath()%>/js/ws-ui/V4.0/js/index.js"></script>
<!-- 弹出框样式，基于common.css -->
<link rel="stylesheet" href="<%=request.getContextPath()%>/js/ws-ui/V4.0/css/public-dialog.css">
<!-- 自定义封装的ajax请求组件，基于jquery-2.1.4.js -->
<script type="text/javascript" src="<%=request.getContextPath()%>/js/ws-tools/ws-public-ajax.js"></script>
<!-- 弹出框封装，基于jquery-2.1.4.js、bootstrap.min.js、jquery-ui.min.js -->
<script type="text/javascript" src="<%=request.getContextPath()%>/js/ws-tools/ws-tools-window-location.js"></script>
<script type="text/javascript" src="<%=request.getContextPath()%>/js/ws-component/ws-public-dialog.js"></script>

</head>
<body class="primary-bgcolor">
		
		<!-- 主容器 -->
		<div id="main-content" class="main-content">
			 <!-- 顶部容器-->
			 <div id="top-content" class="top-content">
			 	<!-- 顶部导航栏 -->
				<nav class="navbar navbar-default">
					<div class="container-fluid"> 
					
						<!-- 顶部左侧 -->
						<div class="navbar-header">
							<!-- 头部折叠按钮 -->
							<button type="button" class="navbar-toggle" data-toggle="collapse"
									data-target="#example-navbar-collapse">
								<span class="sr-only">切换导航</span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
								<span class="icon-bar"></span>
							</button>
							
							<!-- logo 标准管理平台 -->
							<a class="navbar-brand" href="#">
								<span class="logofont">
									<i class="fa fa-th-large"></i>
									标准管理平台
								</span>
							</a>
						</div>
						<!-- ../顶部左侧 -->
						
						<!-- 顶部右侧 -->
						<div class="collapse navbar-collapse" id="example-navbar-collapse">
							<!-- 顶部一级菜单 -->
							<ul class="nav navbar-nav">
								<!-- top二级菜单 -->
								<li><a data-targetnav="haha">点击切换左侧菜单</a></li>
								<li><a data-targetnav="aaa">点击切换左侧菜单</a></li>
								<li><a data-url="<%=request.getContextPath()%>/js/ws-ui/V4.0/demo/welcome.jsp">点击跳转页面</a></li>
								<li class="dropdown">
									<a class="dropdown-toggle" data-toggle="dropdown">委员管理 <b class="caret"></b></a>
									<ul class="dropdown-menu">
										<li><a href="#">开发不易</a></li>
										<li class="divider"></li>
										<li><a href="#">且行且珍惜</a></li>
									</ul>
								</li>
							</ul>
							<!-- /顶部一级菜单 -->
							  
						   	<!-- 个人资料，退出 -->
						    <ul class="nav navbar-nav navbar-right"> 
						   	    <li class="active"><a id="personal" href="#">郑州烟草院，张大佛爷</a></li>
					            <li><a href="#"><span class="glyphicon glyphicon-log-in"></span> 退出</a></li> 
					        </ul> 
					        <!-- /个人资料，退出 -->
					    </div><!-- /顶部右侧 -->
					    
				     </div>  
				</nav><!-- /顶部导航栏 -->
			</div><!-- /顶部容器-->
			
			<!-- 左侧容器 -->
			<div class="left-content" id="left-content">
				<!-- 左侧菜单 -->
				<nav class="sidebar" id="aaa">
					<ul class="nav">
						<!-- 工作区域-->
						<li>
							<a id="workArea">
								<img src="<%=request.getContextPath()%>/js/ws-ui/V4.0/img/b.png" class="img-circle" style="width: 150px; height: 150px">
							</a>
						</li>
						
						<li>
							<a data-url="<%=request.getContextPath()%>/js/ws-ui/V4.0/demo/welcome.jsp" class="actived">首页</a>
						</li>
						
						<li>
							<a data-url="<%=request.getContextPath()%>/js/ws-ui/V4.0/demo/newDict.jsp">新字典表生成</a>
						</li>
						
						<li>
							<a data-url="<%=request.getContextPath()%>/js/ws-ui/V4.0/demo/base.jsp">页面元素</a>
						</li>
						
						<!-- 二级菜单 -->
						<li>
							<a data-toggle="collapse"  href="#collapseOne1"><i class="fa fa-caret-right"></i><i class="fa fa-clone fa-fw"></i>列表页面</a>
							<ul class="nav panel-collapse collapse" id="collapseOne1">
								<li>
									<a data-url="<%=request.getContextPath()%>/js/ws-ui/V4.0/demo/list/mainPage_list.jsp">查询列表</a>
								</li>
								<li>
									<a data-url="<%=request.getContextPath()%>/js/ws-ui/V4.0/demo/list/dialog.jsp">弹出列表</a>
								</li>
 							</ul>
						</li>
						
						<li>
							<a data-toggle="collapse"  href="#collapseOne2"><i class="fa fa-caret-right"></i><i class="fa fa-clone fa-fw"></i>编辑页面</a>
							<ul class="nav panel-collapse collapse" id="collapseOne2">
								<li>
									<a data-url="<%=request.getContextPath()%>/js/ws-ui/V4.0/demo/edit/mainPage_edit.jsp">复杂编辑页面</a>
								</li>
								<li>
									<a data-url="<%=request.getContextPath()%>/js/ws-ui/V4.0/demo/edit/simplePage_edit.jsp">简单编辑页面</a>
								</li>
								<li>
									<a data-url="<%=request.getContextPath()%>/js/ws-ui/V4.0/demo/edit/dialog.jsp">弹出编辑页面</a>
								</li>
								<li>
									<a data-url="<%=request.getContextPath()%>/js/ws-ui/V4.0/demo/edit/validate_edit.jsp">校验页面</a>
								</li>
 							</ul>
						</li>
						
						
						<li>
							<a data-toggle="collapse"  href="#collapseOne3"><i class="fa fa-caret-right"></i><i class="fa fa-clone fa-fw"></i>查看页面</a>
							<ul class="nav panel-collapse collapse" id="collapseOne3">
								<li>
									<a data-url="">查看页面</a>
								</li>
								<li>
									<a data-url="">弹出查看页面</a>
								</li>
 							</ul>
						</li>
						
						<!-- 三级菜单 -->
						<li>
							<a data-toggle="collapse"  href="#collapseThree"><i class="fa fa-caret-right"></i><i class="fa fa-cubes fa-fw"></i>三级菜单示例</a>
							<ul class="nav panel-collapse collapse" id="collapseThree">
								
								<li>
									<a data-toggle="collapse"  href="#collapseFour1"><i class="fa fa-caret-right"></i>有展开项</a>
									<ul class="nav panel-collapse collapse" id="collapseFour1">
										
										<li><a data-url="<%=request.getContextPath()%>/js/ws-ui/V4.0/demo/other/icon.jsp"  ><i class="fa fa-snowflake-o fa-fw"></i>图标</a></li>
									</ul>
								</li>
								<li><a href="#support-ie8-ie9">无图标</a></li>
								<li><a href="#support-validators">无图标</a></li>
							</ul>
						</li>
					</ul>
				</nav>
				
				
				
				
				<nav class="sidebar" style="display:none" id="haha">
					<ul class="nav">
						<!-- 工作区域-->
						<li>
							<a id="workArea">
								<img src="<%=request.getContextPath()%>/js/ws-ui/V4.0/img/b.png" class="img-circle" style="width: 150px; height: 150px">
							</a>
						</li>
						<!-- /工作区域-->
						
						<!-- 二级菜单 -->
						<li>
							<a data-url="<%=request.getContextPath()%>/js/ws-ui/V4.0/demo/welcome.jsp" class="actived">首页</a>
						</li>
						<li>
							<a data-url="<%=request.getContextPath()%>/js/ws-ui/V4.0/demo/base.jsp">页面元素</a>
						</li>
						
					</ul>
				</nav>
				
				<!-- 向左的折叠按钮 -->
				<div class="fold-left"><img alt="" src="<%=request.getContextPath()%>/js/ws-ui/V4.0/img/left.png"></div>
				<!-- 向右的折叠按钮 -->
				<div class="fold-right"><img alt="" src="<%=request.getContextPath()%>/js/ws-ui/V4.0/img/right.png"></div>
				<!-- 拖动条 -->
				<div id="divider" class="resizeable"></div>
				
			</div>
			
			
			<!-- 右侧容器 -->
			<div id="right-content" class="right-content">
				<!-- 盛放iframe的div -->
				<iframe id="mainContentIframe"  name="mainContentIframe" src="<%=request.getContextPath()%>/js/ws-ui/V4.0/demo/welcome.jsp" width="100%" height="100%" frameborder="no" border="0" scrolling="yes" allowtransparency="yes">
				</iframe>
			</div>
 		</div>
	</body>
</html>