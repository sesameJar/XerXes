$(function(){
	var clickTmp=false;

	$('div.click-test').click(function(){

		clickTmp=true;
		
	})
	if(clickTmp){
		alert('clicked');
	}else{
		alert('oops');
	}
});