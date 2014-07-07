'use strict';

$(document).ready(function() {
	$('.header').load('header.html');
	
	var tabid = window.location.hash;
	$('.tab-content ' + tabid).addClass('active').siblings().removeClass('active');
	window.location.hash='';

	$('.nav-list li a').click(function(e){
		var currentAttrValue = $(this).attr('href');
		$('h5').html(currentAttrValue);
		$('.tab-content ' + currentAttrValue).addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
});