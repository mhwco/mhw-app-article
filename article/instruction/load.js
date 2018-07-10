$(document).ready(function(){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if (xhr.readyState==4 && xhr.status==200){
			$("#article").html((marked(xhr.responseText)));
		}
	}
	xhr.open("GET","article.md",true);
	xhr.send();
	var xhr2=new XMLHttpRequest();
	xhr2.onreadystatechange=function(){
		if (xhr2.readyState==4 && xhr2.status==200){
			var mf=JSON.parse(xhr2.responseText);
			$("#title").html(mf.title);
			$("#info").html(mf.author+":"+mf.date);
		}
	}
	xhr2.open("GET","manifest.json",true);
	xhr2.send();
});