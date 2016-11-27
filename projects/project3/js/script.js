$(document).ready(function(){
	alert('hi');
	$("#background").on("mousedown", function (e) {
	    e.preventDefault();
	    $(this).addClass("mouseDown");
	}).on("mouseup", function () {
	    $(this).removeClass("mouseDown");
	});
});