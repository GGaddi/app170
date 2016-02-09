
$(document).ready(function(){

$('ul.tabs li').click(function(){
	var tab_id = $(this).attr('data-tab');

	$('ul.tabs li').removeClass('tab-curr');
	$('.grid').removeClass('grid-curr');

	$(this).addClass('tab-curr');
	$("#"+tab_id).addClass('grid-curr');
	})
});
