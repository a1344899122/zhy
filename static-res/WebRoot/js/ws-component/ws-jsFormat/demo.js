$(function(){
	//格式化html
	$('#beautifyHtml').click(function(){
		var html ='<%@ page language="java"contentType="text/html; charset=UTF-8"pageEncoding="UTF-8"%><!DOCTYPE html PUBLIC"-//W3C//DTD HTML 4.01 Transitional//EN""http://www.w3.org/TR/html4/loose.dtd"><html><head><meta http-equiv="Content-Type"content="text/html; charset=UTF-8"><title>JS/HTML/JSON格式化</title><script type="text/javascript"src="jquery.js"></script><script type="text/javascript"src="beautify.js"></script><script type="text/javascript"src="HTML-Beautify.js"></script><script type="text/javascript"src="demo.js"></script></head><body><button id="beautify">格式化</button></body></html>';
		alert(ws.component.getBeautifyJs(html,2));
	});
	//格式化json
	$('#beautifyJson').click(function(){
		var json ='[{"name":"name","nameCn":"设备名称","required":true,"minValue":"0","maxValue":"50","validateType":"10","tips":""},{"name":"brand","nameCn":"设备品牌","required":true,"minValue":"0","maxValue":"400","validateType":"10","tips":""},{"name":"phone","nameCn":"联系电话","required":true,"minValue":"0","maxValue":"50","validateType":"10","tips":""}]';
		alert(ws.component.getBeautifyJs(json,2));
	});
})