function hiku(){
    var ans1;
	var v1 = document.getElementById("a").value;
	var v2 = document.getElementById("b").value;
	ans1 = Number(v1)-Number(v2);
	document.getElementById("kotae1").value = ans1;
}
function kakeru(){
    var ans2;
    var v3 =document.getElementById("c").value;
    var v4 =document.getElementById("d").value;
    ans2 = Number(v3)*Number(v4);
	document.getElementById("kotae2").value = ans2;
}

