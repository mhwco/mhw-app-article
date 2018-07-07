$(document).ready(function(){
	var xhr=new XMLHttpRequest();
	xhr.onreadystatechange=function(){
		if (xhr.readyState==4 && xhr.status==200){
	document.write(marked(xhr.responseText));
		}
	}
	xhr.open("GET","article.md",true);
	xhr.send();
});