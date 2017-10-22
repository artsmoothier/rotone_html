function changeText(text)
{
	aa = document.getElementsByClassName("showdiv");
	for(var i=0; i<aa.length; i++) {
    aa[i].style.display="none";
	}	
	//aa[0].style.display="";
	 elem = document.getElementById(text);
	 elem.style.display = "";
}

function showValue(newValue, text)
{
	document.getElementById("range"+text).innerHTML=newValue;
}