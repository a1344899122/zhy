<%@ page language="java" contentType="text/html; charset=UTF-8" pageEncoding="UTF-8"%>
<!DOCTYPE html>
<html>
<head>
</head>
  	<!-- 引入 ECharts 文件 -->
    <script src="echarts.min.js"></script>
    <!-- 引入 infographic 主题 -->
	<script src="theme/infographic.js"></script>
	<!-- 引入 dark 主题 -->
	<script src="theme/dark.js"></script>
	<!-- 引入 roma 主题 -->
	<script src="theme/roma.js"></script>
	
	
<body>
	<div class="MyContainer">	
		
		<!-- 面包屑导航栏 -->
		<div class="crumbs">
			<ul id="breadcrumbs" class="breadcrumb">
				<li>
					<i class="icon-home"></i> 
					<a href="home.jsp">首页</a>
				</li>
				<li class="current">
					<a href="#" title="">Echars</a>
				</li>
			</ul>
		</div>
		
		<!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
	    <div id="main" style="width: 600px;height:400px;"></div>
	    
	    <h3>绘制南丁格尔图</h3>
	    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
	    <div id="main2" style="width: 600px;height:400px;"></div>
	    
	    <h3>在图表中加入交互组件</h3>
	    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
	    <div id="main3" style="width: 600px;height:400px;"></div>
	    
	    <h3>中国地图,加入roma主题样式</h3>
	    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
	    <div id="main5" style="width: 600px;height:400px;"></div>
	    
	     <h3>世界地图</h3>
	    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
	    <div id="main6" style="width: 600px;height:400px;"></div>
	    
	    
	     <h3>山西地图,加入infographic主题样式</h3>
	    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
	    <div id="main7" style="width: 600px;height:400px;"></div>
	    
	     <h3>湖北地图,加入dark主题样式</h3>
	    <!-- 为 ECharts 准备一个具备大小（宽高）的 DOM -->
	    <div id="main8" style="width: 600px;height:400px;"></div>
	    
	</div>
    
	<script type="text/javascript">
        // 基于准备好的dom，初始化echarts实例
        var myChart = echarts.init(document.getElementById('main'));
        
        // 基于准备好的dom，初始化echarts实例
        var myChart2 = echarts.init(document.getElementById('main2'));
        
        // 基于准备好的dom，初始化echarts实例
        var myChart3 = echarts.init(document.getElementById('main3'));

        // 指定图表的配置项和数据
        var option = {
            title: {
                text: 'ECharts 入门示例'
            },
            tooltip: {},
            legend: {
                data:['销量']
            },
            xAxis: {
                data: ["衬衫","羊毛衫","雪纺衫","裤子","高跟鞋","袜子"]
            },
            yAxis: {},
            series: [{
                name: '销量',
                type: 'bar',
                data: [5, 20, 36, 10, 10, 20]
            }]
        };
        
        // 指定图表的配置项和数据
        var option2 = {
       	    backgroundColor: '#2c343c',
       	    visualMap: {
       	        show: false,
       	        min: 80,
       	        max: 600,
       	        inRange: {
       	            colorLightness: [0, 1]
       	        }
       	    },
       	    series : [
       	        {
       	            name: '访问来源',
       	            type: 'pie',
       	            radius: '55%',
       	            data:[
       	                {value:235, name:'视频广告'},
       	                {value:274, name:'联盟广告'},
       	                {value:310, name:'邮件营销'},
       	                {value:335, name:'直接访问'},
       	                {value:400, name:'搜索引擎'}
       	            ],
       	            roseType: 'angle',
       	            label: {
       	                normal: {
       	                    textStyle: {
       	                        color: 'rgba(255, 255, 255, 0.3)'
       	                    }
       	                }
       	            },
       	            labelLine: {
       	                normal: {
       	                    lineStyle: {
       	                        color: 'rgba(255, 255, 255, 0.3)'
       	                    }
       	                }
       	            },
       	            itemStyle: {
       	                normal: {
       	                    color: '#c23531',
       	                    shadowBlur: 200,
       	                    shadowColor: 'rgba(0, 0, 0, 0.5)'
       	                }
       	            }
       	        }
       	    ]
       	};
        
        var option3 = {
       	    xAxis: {
       	        type: 'value'
       	    },
       	    yAxis: {
       	        type: 'value'
       	    },
       	    dataZoom: [
       	        {   // 这个dataZoom组件，默认控制x轴。
       	            type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
       	            start: 10,      // 左边在 10% 的位置。
       	            end: 60         // 右边在 60% 的位置。
       	        }
       	    ],
       	    series: [
       	        {
       	            type: 'scatter', // 这是个『散点图』
       	            itemStyle: {
       	                normal: {
       	                    opacity: 0.8
       	                }
       	            },
       	            symbolSize: function (val) {
       	                return val[2] * 40;
       	            },
       	            data: [["14.616","7.241","0.896"],["3.958","5.701","0.955"],["2.768","8.971","0.669"],["9.051","9.710","0.171"],["14.046","4.182","0.536"],["12.295","1.429","0.962"],["4.417","8.167","0.113"],["0.492","4.771","0.785"],["7.632","2.605","0.645"],["14.242","5.042","0.368"]]
       	        }
       	    ],
       	  dataZoom: [
       	          {   // 这个dataZoom组件，默认控制x轴。
       	              type: 'slider', // 这个 dataZoom 组件是 slider 型 dataZoom 组件
       	              start: 10,      // 左边在 10% 的位置。
       	              end: 60         // 右边在 60% 的位置。
       	          },
       	          {   // 这个dataZoom组件，也控制x轴。
       	              type: 'inside', // 这个 dataZoom 组件是 inside 型 dataZoom 组件
       	              start: 10,      // 左边在 10% 的位置。
       	              end: 60         // 右边在 60% 的位置。
       	          }
       	      ],
       	      
       	   dataZoom: [
       	           {
       	               type: 'slider',
       	               xAxisIndex: 0,
       	               start: 10,
       	               end: 60
       	           },
       	           {
       	               type: 'inside',
       	               xAxisIndex: 0,
       	               start: 10,
       	               end: 60
       	           },
       	           {
       	               type: 'slider',
       	               yAxisIndex: 0,
       	               start: 30,
       	               end: 80
       	           },
       	           {
       	               type: 'inside',
       	               yAxisIndex: 0,
       	               start: 30,
       	               end: 80
       	           }
       	       ],
       	}
        
        
        $.get('map/json/china.json', function (chinaJson) {
            echarts.registerMap('china', chinaJson);
            var chart = echarts.init(document.getElementById('main5'),'roma');
            chart.setOption({
                series: [{
                    type: 'map',
                    map: 'china'
                }]
            });
        });
        
        $.get('map/json/world.json', function (chinaJson) {
            echarts.registerMap('world', chinaJson);
            var chart = echarts.init(document.getElementById('main6'));
            chart.setOption({
                series: [{
                    type: 'map',
                    map: 'world'
                }]
            });
        });
        
        $.get('map/json/shanxi.json', function (chinaJson) {
            echarts.registerMap('shanxi', chinaJson);
            var chart = echarts.init(document.getElementById('main7'),'infographic');
            chart.setOption({
                series: [{
                    type: 'map',
                    map: 'shanxi'
                }]
            });
        });
        
        $.get('map/json/hubei.json', function (chinaJson) {
            echarts.registerMap('hubei', chinaJson);
            var chart = echarts.init(document.getElementById('main8'),'dark');
            chart.setOption({
                series: [{
                    type: 'map',
                    map: 'hubei'
                }]
            });
        });

        // 使用刚指定的配置项和数据显示图表。
        myChart.setOption(option);
        
        myChart2.setOption(option2);
        
        myChart3.setOption(option3);
    </script>
</body>
</html>