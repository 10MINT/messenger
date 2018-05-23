window.onscroll = function() {scrollFunction()};

function scrollFunction() {
    if ((window.innerHeight + window.scrollY) >= document.body.scrollHeight) {
        document.getElementById("tobottom").style.display = "none";
    } else {
        document.getElementById("tobottom").style.display = "block";
    }
}

function toBottom(){
    window.scrollTo(0,document.body.scrollHeight);
}

function toTop(){
    window.scrollTo(0,0);
}