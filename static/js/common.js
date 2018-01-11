$(".askButton").on('click',function(){
	window.location.href="quiz.html";
});

$(".user-center").on('mouseenter',function(){
	$(this).children().next().show();
});

$(".user-center").on('mouseleave',function(){
	$(this).children().next("ul").hide();
})