/**
 * 	获取分页列表
 *  参数：json格式 
 * ws.tools.getList({
			BTable//tableID
			url//请求url
			toolbar//按钮
	      striped   //表格显示条纹
	      pagination //启动分页
	      pageSize //每页显示的记录数
	      pageNumber //当前第几页
	      pageList //记录数可选列表
	      clickToSelect //是否启用点击选中行
	      search //是否启用查询
	      showColumns //显示下拉框勾选要显示的列
	      showRefresh  //显示刷新按钮
	      paginationLoop//关闭分页条无限循环的功能。
	      pagination//在表格底部显示分页条
	      sidePagination //表示服务端请求
	      onEditableSave//行内编辑 需要引入js才可用
	      uniqueId//每一行的唯一标识，一般为主键列
	      columns//行参数
	      onLoadSuccess//远程数据成功加载时的触发。
	      onCheck//单击行事件
	      onUncheck//取消行选中事件
	      
	      
	})
 * }
 */
if(typeof ws =="undefined"){
		var ws=new Object();
}//end if
if(typeof ws.tools =="undefined"){
	ws.tools=new Object();
}

;(function(tools){
	
	tools.getList = function(options){
		$(options.BTable).bootstrapTable('destroy');
		var defaults={
		      striped: true,  //表格显示条纹
		      pagination: true, //启动分页
		      pageSize: 10,  //每页显示的记录数
		      pageNumber:1, //当前第几页
		      pageList: [10, 20, 30,50,100],  //记录数可选列表
		      clickToSelect: true, //是否启用点击选中行
		      search: false,  //是否启用查询
		      showColumns: true,  //显示下拉框勾选要显示的列
		      showRefresh: false,  //显示刷新按钮
		      sidePagination: "server", //表示服务端请求
		      paginationLoop:false,//关闭分页条无限循环的功能。
		      pagination:true,//在表格底部显示分页条
		      isRadio:false,//实现列表选择框多选样式，单选功能，true为单选，false为多选 
		      onlyInfoPagination:false//不分页显示数据
		}
		
		var options = $.extend(defaults, options);
		$(options.BTable).bootstrapTable({
			  method: "post",  //使用post请求到服务器获取数据  
			  url:options.url,
			  toolbar:options.toolbar,
		      striped: options.striped,  //表格显示条纹
		      pagination: options.pagination, //启动分页
		      pageSize: options.pageSize,  //每页显示的记录数
		      pageNumber:options.pageNumber, //当前第几页
		      pageList: options.pageList,  //记录数可选列表
		      clickToSelect: options.clickToSelect, //是否启用点击选中行
		      search: options.search,  //是否启用查询
		      showColumns: options.showColumns,  //显示下拉框勾选要显示的列
		      showRefresh: options.showRefresh,  //显示刷新按钮
		      paginationLoop:options.paginationLoop,//关闭分页条无限循环的功能。
		      pagination:options.pagination,//在表格底部显示分页条
		      sidePagination: options.sidePagination, //表示服务端请求
		      onEditableSave:options.onEditableSave,//行内编辑 需要引入js才可用
		      uniqueId: options.uniqueId, //每一行的唯一标识，一般为主键列
		      onlyInfoPagination:options.onlyInfoPagination,//不分页显示数据，默认为false
		      dataField:'list',
		      responseHandler:function(res){
		        //远程数据加载之前,处理程序响应数据格式,对象包含的参数: 我们可以对返回的数据格式进行处理
		        //在ajax后我们可以在这里进行一些事件的处理
		    	if(res!=null&&res.data!=null){
		    		if(res.data.count){
		    			res.data.total=res.data.count;
		    		}
		    		if(res.data.length){
		    			res.data.total=res.data.length;
		    		}
		    	}else{
		    		res.data={total:0}
		    	}
		    	return res.data;
		      },
		      //回调函数
		      onLoadSuccess : function(field,row,oldValue){
		    	  if(options.onLoadSuccess &&(typeof options.onLoadSuccess) == "function"){
		    		  options.onLoadSuccess(row);
		    	  }
				  $(".page-list").show();
			  	  $(".pull-right.pagination").show();
				  $(".fixed-table-body").css("overflow","hidden");
				  
				  
				/*  //获取页面所有的iframe
				  var iframes=$('iframe', window.parent.document);
					
				  //首页的内容高度
				  if(iframes.length==1){
					  //发现数据加载完高度不对，重新设置高
					  if( $("#mainContentIframe",window.parent.document).height != $("body").height()){
						  $("#mainContentIframe",window.parent.document).height($("body").height());
					  }  
				  }*/
				 
		      },
		      queryParamsType : "undefined",
		      contentType: 'application/x-www-form-urlencoded',
		      queryParams:queryParams,
		      columns: options.columns,
		      onCheck:function(row){
		    	  if(options.onCheck &&(typeof options.onCheck) == "function"){
		    		  options.onCheck(row);
		    	  }
		    	  
		    	  if(options.isRadio){
		    		  var rowData = $(options.BTable).bootstrapTable('getSelections');
		    		  for(var i in rowData){
		    			  if(rowData[i].rownum_ != row.rownum_){
		    				  var num = rowData[i].rownum_ - 1;
		    				  $($('input[name="btSelectItem"]')[num]).click() 
		    			  }
		    		  }
		    	  }
		      },
		      onUncheck:options.onUncheck,
		      onPostBody:options.onPostBody,
		      onPageChange:options.onPageChange
		    })
		    function queryParams(params) {   //设置查询参数
	        var param = {
	        		//这里是在ajax发送请求的时候设置一些参数 params有什么东西，自己看看源码就知道了
	        		page: params.pageNumber,
	        		rows: params.pageSize,
	                sidx:params.sortName,
	                sord:params.sortOrder,
	        		token:options.token,
	        		sqlId:options.sqlId,
	        };
	        
	        return $.extend(param,options.data);
	      }
		
		
		//隐藏列方法
		var columns = options.columns;
		for(var i in columns){
			if(columns[i].hideColumn == true){
				$(options.BTable).bootstrapTable('hideColumn', columns[i].field);
			}
		}
		
		$(options.BTable).on('load-success.bs.table',function(data){
			//setRadioAndCheckbox();
		});
		
		//当列表选择框为单选时  把全选功能替换为选择提示
		if(options.isRadio){
			$('input[name="btSelectAll"]').parent().append("选择")
		    $('input[name="btSelectAll"]').remove()
		}
		
		/*$(options.BTable).bootstrapTable('destroy');*/

	};
	
	tools.formData=function(data){
		var formId=$(data).attr("id");
		var obj = {};
		var item = $("#"+formId+" input"+",#"+formId+" select"+",#"+formId+" textarea");
		var type = '';
		var group = [];
		item.each(function(i){
			type = $(data).attr("type");
			if(type=='radio'){
				obj[$(data).attr("name")] = $("input[name="+$(data).attr("name")+"]:checked").val();
			}else if(type=='checkbox'){
				if($.inArray($(this).attr("name"), group)>= 0){
					$(data).is(":checked") ? obj[$(data).attr("name")] += $(data).val()+',' : ''; 
				}else{
					group.push($(data).attr("name"));
					$(data).is(":checked") ? obj[$(data).attr("name")] = ($(data).val()+',') :  obj[$(data).attr("name")] = ''; 
				}
			}else{
				if(obj[$(data).attr("name")] == undefined)
					obj[$(data).attr("name")] = $(data).val();
				else
					obj[$(data).attr("name")] += ',' + $(data).val();
	        }
		})

	    if(group.length > 0){
	        $.each(group,function(i,e){            
	            obj[e] = obj[e].substr(0,obj[e].length-1);
	        })
	    }

		return obj;
	}
 
})(ws.tools);
