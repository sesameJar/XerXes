$(function(){
	var clickTmp=false;

	$('div.clickme').click(function(){

		momAnimate();
		
	});
	function momAnimate (){
		$('div.mom').animate({
			bottom:-600
		},4000,null,function(){
			var giveIt = $('.child').eq(19);
			console.log(giveIt.position().left);
		})
	}
	
});