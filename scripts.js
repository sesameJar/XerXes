$(function(){
	var clickTmp=false;

	$('div.clickme').click(function(){

		momAnimate();
		
	});
	function momAnimate (){
		$('div.mom').animate({
			
			'-webkit-animation-play-state':'running'
		},2000,null,function(){
			var giveIt = $('.child').eq(19);
			
			console.log(giveIt.offset());
		})
	}
	
});