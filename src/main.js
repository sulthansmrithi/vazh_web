//Global variables 
let id = '';
//checking is empty ip
function isEmpty(ele){
	if(ele.innerText == ""){
		return true;
	}
	else{
		return false;
	}
}

//cursor of mine_id
//hover
document.getElementById("mine_id_cont").onmouseover = () => {
	// increase size
	document.getElementById("minecraft_cont").style.transform = "scale(1.06) translate(-2.5%, 0px)";
	document.getElementById("mine_id_cont").style.transform = "scale(1.06) translate(2.5%, 0px)";
	//clipboard message 
	document.getElementById("clipboard").style.visibility = "visible";
	document.getElementById("clipboard").style.opacity = "1";
	// border animation
	const elem = document.getElementById("mine_id_cont");
	const elem1 = document.getElementById("minecraft_cont");
	clearInterval(id);
	id = setInterval(frame,120);
	let y = 0;
	function frame(){
		if (y % 4 == 0){
			elem.style.borderBottomColor = "#f75353";
			elem.style.borderTopColor = "#5aff5a";
			elem.style.borderRightColor = "#7272ff";
			//elem.style.borderLeftColor = "#ffff6b";
			elem1.style.borderBottomColor = "#f75353";
			elem1.style.borderTopColor = "#5aff5a";
			//elem1.style.borderRightColor = "#7272ff";
			elem1.style.borderLeftColor = "#ffff6b";
			y = y+1;
		}
		else if(y % 4 == 1){
			elem.style.borderBottomColor = "#f7e453";
			elem.style.borderTopColor = "#92ff5a";
			elem.style.borderRightColor = "#72d3ff";
			//elem.style.borderLeftColor = "#ff7f6b";
			elem1.style.borderBottomColor = "#f7e453";
			elem1.style.borderTopColor = "#92ff5a";
			//elem1.style.borderRightColor = "#72d3ff";
			elem1.style.borderLeftColor = "#ff7f6b";
			y = y+1;
		}
		else if(y % 4 == 2){
			elem.style.borderBottomColor = "#ffb84b";
			elem.style.borderTopColor = "#fffa5a";
			elem.style.borderRightColor = "#72ff7b";
			//elem.style.borderLeftColor = "#ff6ba2";
			elem1.style.borderBottomColor = "#ffb84b";
			elem1.style.borderTopColor = "#fffa5a";
			//elem1.style.borderRightColor = "#72ff7b";
			elem1.style.borderLeftColor = "#ff6ba2";
			y = y+1;
		}
		else if(y % 4 == 3){
			elem.style.borderBottomColor = "#ff4b4b";
			elem.style.borderTopColor = "#ffea5a";
			elem.style.borderRightColor = "#b7ff72";
			//elem.style.borderLeftColor = "#cd6bff";
			elem1.style.borderBottomColor = "#ff4b4b";
			elem1.style.borderTopColor = "#ffea5a";
			//elem1.style.borderRightColor = "#b7ff72";
			elem1.style.borderLeftColor = "#cd6bff";
			y = y+1;
		}
	}
	if(isEmpty(document.getElementById("mine_id"))){
		document.getElementById("mine_id_cont").style.cursor = "no-drop";
		//document.getElementById("mine_id_cont").style.pointerEvents = "none";
	}
	else{
		document.getElementById("mine_id_cont").style.cursor = "pointer";
	}
};

document.getElementById("mine_id_cont").onmouseleave = () => {
	document.getElementById("minecraft_cont").style.transform = "scale(1) translate(0%, 0px)";
	document.getElementById("mine_id_cont").style.transform = "scale(1) translate(0%, 0px)";
	document.getElementById("clipboard").style.visibility = "hidden";
	document.getElementById("clipboard").style.opacity = "0";
	document.getElementById("clipboard").innerHTML = "click to copy";
	document.getElementById("mine_id").style.removeProperty('color');
	document.getElementById("mine_id_cont").style.removeProperty('border-color');
	document.getElementById("minecraft_cont").style.removeProperty('border-color');
	clearInterval(id);
}

//clicking mine_ip 
document.getElementById("mine_id_cont").onclick = ()=>{
	if(isEmpty(document.getElementById("mine_id"))){
		//pass
	}
	else{
		navigator.clipboard.writeText(document.getElementById("mine_id").innerText);
		document.getElementById("clipboard").innerHTML = "copied!";
		document.getElementById("mine_id").style.color = "#cd4157";
	}
}

//request data of i.txt 
window.onload = () =>{
	var xhttp = new XMLHttpRequest();
	xhttp.onreadystatechange = ()=>{
		if(xhttp.readyState == 4 && xhttp.status == 200){
			document.getElementById("mine_id").innerHTML = xhttp.responseText.substring(7,xhttp.responseText.length - 2) ;
		}
	};
	xhttp.open("GET","/i.txt",true);
	xhttp.send();
};