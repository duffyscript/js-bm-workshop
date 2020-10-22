// jQuery
$(".box").addClass("focus");
$(".box").removeClass("focus");
$(".box").toggleClass("focus");

if ($(".box").hasClass("focus")) {
    //...
}

// Vanilla JS
var box = document.querySelector(".box");
box.classList.add("focus");
box.classList.remove("focus");
box.classList.toggle("focus");

if (document.querySelector(".box").classList.contains("focus")) {
    //...
}