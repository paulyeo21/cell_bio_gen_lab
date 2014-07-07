'use strict';

$(document).ready(function() {
	// include header
	// $('.header').load('header.html');
	
	// tabs
	var tabid = window.location.hash;
	// console.log(location.href);
	$('.tab-content ' + tabid).addClass('active').siblings().removeClass('active');
	// window.location.hash='';

	// header tabs
	// $('.header').click(function() {
	// 	var currentAttrValue = $(this).attr('href');
	// 	console.log(this);
	// 	$('ul li').addClass('active').siblings().removeClass('active');
	// });

	// sidebar tabs
	$('.nav-list li a').click(function(e){
		var currentAttrValue = $(this).attr('href');
		console.log(currentAttrValue);
		$('.tab-content ' + currentAttrValue).addClass('active').siblings().removeClass('active');
        e.preventDefault();
    });
});