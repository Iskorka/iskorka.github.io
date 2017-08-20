$(document).ready(function(){
	
	
	$('#menu-icon').click(function(){
		$('.mob-menu').toggleClass('hidden');
	});
	
	
	$('.bg-img2').hide();
	$('.bg-img3').hide();
	var n = 1;
	
	$('.forward').click(function(){
		if (n === 1) {
			$('.bg-img1').hide();
			$('.bg-img2').show();
			$('.banner li:first').removeClass('selected');
			$('.banner li:nth-child(2)').addClass('selected');
			n++;
		}
		else if (n === 2) {
			$('.bg-img2').hide();
			$('.bg-img3').show();
			$('.banner li:nth-child(2)').removeClass('selected');
			$('.banner li:last').addClass('selected');
			n++;
		}
		else {
			$('.bg-img3').hide();
			$('.bg-img1').show();
			$('.banner li:last').removeClass('selected');
			$('.banner li:first').addClass('selected');
			n = 1;
		}
	});
	
	$('.backward').click(function(){
		if (n === 1) {
			$('.bg-img1').hide();
			$('.bg-img3').show();
			$('.banner li:first').removeClass('selected');
			$('.banner li:last').addClass('selected');
			n = 3;
		}
		else if (n === 2) {
			$('.bg-img2').hide();
			$('.bg-img1').show();
			$('.banner li:nth-child(2)').removeClass('selected');
			$('.banner li:first').addClass('selected');
			n--;
		}
		else {
			$('.bg-img3').hide();
			$('.bg-img2').show();
			$('.banner li:last').removeClass('selected');
			$('.banner li:nth-child(2)').addClass('selected');
			n--;
		}
	});
	
	$('.banner li:first').click(function(){
		$('.bg-img1').show();
		$('.bg-img2').hide();
		$('.bg-img3').hide();
		$('.banner li:first').addClass('selected');
		$('.banner li:nth-child(2)').removeClass('selected');
		$('.banner li:last').removeClass('selected');
	});
	
	$('.banner li:nth-child(2)').click(function(){
		$('.bg-img1').hide();
		$('.bg-img2').show();
		$('.bg-img3').hide();
		$('.banner li:first').removeClass('selected');
		$('.banner li:nth-child(2)').addClass('selected');
		$('.banner li:last').removeClass('selected');
	});
	
	$('.banner li:last').click(function(){
		$('.bg-img1').hide();
		$('.bg-img2').hide();
		$('.bg-img3').show();
		$('.banner li:first').removeClass('selected');
		$('.banner li:nth-child(2)').removeClass('selected');
		$('.banner li:last').addClass('selected');
	});
});