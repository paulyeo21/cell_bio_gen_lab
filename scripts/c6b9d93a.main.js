"use strict";$(document).ready(function(){var a=window.location.hash;$(".tab-content "+a).addClass("active").siblings().removeClass("active"),$(".nav-list li a").click(function(a){var b=$(this).attr("href");console.log(b),$(".tab-content "+b).addClass("active").siblings().removeClass("active"),a.preventDefault()})});