$(document).ready(function(){
	
	$('#menu-icon').click(function(){
		$('.mob-menu').toggleClass('hidden');
	});
	
	$('.bg-img2').hide();
	$('.bg-img3').hide();
	var n = 1;
	
	function slidingForward() {
		if (n === 1) {
			$('.bg-img1').effect('slide', {direction: 'left', mode: 'hide'}, 500);
			$('.bg-img2').effect('slide', {direction: 'right', mode: 'show'}, 500);
			$('.banner li:first').removeClass('selected');
			$('.banner li:nth-child(2)').addClass('selected');
			n++;
		}
		else if (n === 2) {
			$('.bg-img2').effect('slide', {direction: 'left', mode: 'hide'}, 500);
			$('.bg-img3').effect('slide', {direction: 'right', mode: 'show'}, 500);
			$('.banner li:nth-child(2)').removeClass('selected');
			$('.banner li:last').addClass('selected');
			n++;
		}
		else {
			$('.bg-img3').effect('slide', {direction: 'left', mode: 'hide'}, 500);
			$('.bg-img1').effect('slide', {direction: 'right', mode: 'show'}, 500);
			$('.banner li:last').removeClass('selected');
			$('.banner li:first').addClass('selected');
			n = 1;
		}
	}
	
	function slidingBackward() {
		if (n === 1) {
			$('.bg-img1').effect('slide', {direction: 'right', mode: 'hide'}, 500);
			$('.bg-img3').effect('slide', {direction: 'left', mode: 'show'}, 500);
			$('.banner li:first').removeClass('selected');
			$('.banner li:last').addClass('selected');
			n = 3;
		}
		else if (n === 2) {
			$('.bg-img2').effect('slide', {direction: 'right', mode: 'hide'}, 500);
			$('.bg-img1').effect('slide', {direction: 'left', mode: 'show'}, 500);
			$('.banner li:nth-child(2)').removeClass('selected');
			$('.banner li:first').addClass('selected');
			n--;
		}
		else {
			$('.bg-img3').effect('slide', {direction: 'right', mode: 'hide'}, 500);
			$('.bg-img2').effect('slide', {direction: 'left', mode: 'show'}, 500);
			$('.banner li:last').removeClass('selected');
			$('.banner li:nth-child(2)').addClass('selected');
			n--;
		}
	}
	
	$('.forward').click(function(){
		slidingForward();
	});
	
	$('.backward').click(function(){
		slidingBackward();
	});
	
	$('.banner').on("swipeleft", function(){
		slidingForward();
	});
	
	$('.banner').on("swiperight", function(){
		slidingBackward();
	});
	
	
	$('.banner li:first').click(function(){
		$('.bg-img1').show();
		$('.bg-img2').hide();
		$('.bg-img3').hide();
		$('.banner li:first').addClass('selected');
		$('.banner li:nth-child(2)').removeClass('selected');
		$('.banner li:last').removeClass('selected');
		n = 1;
	});
	
	$('.banner li:nth-child(2)').click(function(){
		$('.bg-img1').hide();
		$('.bg-img2').show();
		$('.bg-img3').hide();
		$('.banner li:first').removeClass('selected');
		$('.banner li:nth-child(2)').addClass('selected');
		$('.banner li:last').removeClass('selected');
		n = 2;
	});
	
	$('.banner li:last').click(function(){
		$('.bg-img1').hide();
		$('.bg-img2').hide();
		$('.bg-img3').show();
		$('.banner li:first').removeClass('selected');
		$('.banner li:nth-child(2)').removeClass('selected');
		$('.banner li:last').addClass('selected');
		n = 3;
	});
	
	$('#login').click(function(){
		$('.login-form').addClass('login-form-enabled').show();
		$('#login-mask').show();
	});
	
	$('#login-mask').click(function(){
		$(this).hide();
		$('.login-form').removeClass('login-form-enabled').hide();
	});
	
	$('.left-nav h3').click(function(){
		$('#cart').toggleClass('hidden');
	});
	
	$('nav li:nth-child(3)').click(function(){
		$('.contacts').toggleClass('hidden');
		$('.assortment').addClass('hidden');
	});
	
	$('.assortment-btn').click(function(){
		$('.assortment').toggleClass('hidden');
		$('.contacts').addClass('hidden');
	});
	
	$('.banner, .main, footer').click(function(){
		$('.contacts').addClass('hidden');
		$('.assortment').addClass('hidden');
		$('#cart').addClass('hidden');
		$('.mob-menu').addClass('hidden');
	});
});