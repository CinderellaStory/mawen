// 标签弹窗打开
function opendialog(){
	$(".dialog_bg").show();
	$(".tag-dialog").show();
}
// 标签弹窗关闭
function closedialog(){
	$(".dialog_bg").hide();
	$(".tag-dialog").hide();
	$(".modify-number").hide();
}

// 修改号码打开弹窗
$(".remind-tip .phone-num").on('click',function(){
	$(".modify-number").show();
	$(".dialog_bg").show();
});

// 删除标签
$(".icon-guanbi3").on('click',function(){
	$(this).parent().remove();
});


// 复选框选中
$("#anonymity2").on('click',function(){
	if($(this).hasClass('active')){
		$(this).removeClass('active');
	}else{
		$(this).addClass('active');
	}
});

// 选择金额
$(".simulate-select").on('click',function(){
	$(".reward-select-list").toggle();
});
$(".reward-select-list li").on('click',function(){
	var text = $(this).text();
	$(".simulate-select").children('span').text(text);
	$(this).parent().hide();
});

