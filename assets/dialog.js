window.onload = function() {scrollFunction();toBottom();linkImages();};
window.onscroll = function() {scrollFunction()};
function scrollFunction() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        document.getElementById("tobottom").style.display = "none";
    } else {
        document.getElementById("tobottom").style.display = "block";
    }
}
function toBottom(){window.scrollTo(0,document.body.scrollHeight);}
function toTop(){window.scrollTo(0,0);}

function linkImages(){
	document.getElementsByTagName("head")[0].innerHTML += '\n		<link rel="stylesheet" href="file:///android_asset/modal.css" />';
	document.getElementsByTagName("head")[0].innerHTML += '\n		<link rel="stylesheet" href="modal.css" />'; //for Companion
	document.getElementsByTagName("body")[0].innerHTML += '		<div id="modal" class="modal"><span class="close">&times;</span><img class="modal-content" id="modal-img"></div>';
	document.getElementsByClassName("close")[0].onclick = function() {
		document.getElementById('modal').style.display = "none";
	};
	const l = document.getElementsByTagName("img");
	for (let i = 0; i < l.length; i++) {
		l[i].onclick = function(){
			document.getElementById('modal').style.display = "block";
			document.getElementById('modal-img').src = l[i].src;
			// document.location.href = l[i].src;
			// console.log("Image clicked");
		}
	};
}
		
