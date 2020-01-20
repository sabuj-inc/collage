$(document).ready(function(){

	
	$(".moreIcon").click(function(){
		$(".moreDetcls").slideToggle();
	});
	
	$("#MainManuIcon").click(function(){
		$("#MainManuContant").fadeToggle();
	});
	
	var availableTags = [
	"Video music",
	"Bnagla song",
	"Hindi Song",
	"English Song",
	"Tamil Song",
	"Tutorial",
	"Islamic",
	"Waz",
	"Drama",
	"Review",
	"Funny Video",
	"News",
	"Pothom alo",
	"Movie",
	"Natok",
	"New song",
	"Perl",
	"PHP",
	"Python",
	"Ruby",
	"Php",
	"Scala",
	"Python",
	"Scheme"
];
$( "#searchBox" ).autocomplete({
	source: availableTags,
	autoFocus:true,
	minLength:1
});
	
	
	$(".watchControl").click(function(){
		$(".hoverShadow").fadeOut(500);
	});
	$(".ChannelMore").click(function(){
		$(".ChannelMoreControl").fadeToggle();
	});
	
	$(".SearchIcon").click(function(){
		$("#manuControl").fadeOut();
		$(".profile").fadeOut();
		$(".webLogo").fadeOut();
		$(".SearchIcon").fadeOut();
		$(".searchInput").fadeIn();
		$(".searchInput").css({
			'width':'100%',
			'padding-left':'30px'
		});
		$(".ResponControl").css({
		'display':'block'
		});
	});	
	$(".ResponControl").click(function(){
		$("#manuControl").fadeIn();
		$(".profile").fadeIn();
		$(".webLogo").fadeIn();
		$(".SearchIcon").fadeIn();
		$(".searchInput").fadeOut();
		$(".ResponControl").fadeOut();
		
		
		
	});

	$("#hideBlok1").click(function(){
		$("#SameVideos1").fadeOut();
		
	});


	//choice.php
	$(".sub-click").click(function(){
		$(".sub-click").toggleClass("subbg");
		$(".ballIcon").removeClass("ballbg");
		$(".ballIcon").toggle();
	});
		$(".ballIcon").click(function(){
		$(".ballIcon").toggleClass("ballbg");
	});
	
	$(".show-more").click(function(){
		$(".moreText").slideDown();
		$(".show-more").hide();
		$(".hide-more").show();
	
	});
	$(".hide-more").click(function(){
		$(".moreText").slideUp();
		$(".hide-more").hide();
		$(".show-more").show();
		
	});
	$(".iButtonIcon").click(function(){
		$(".alliVideo").slideToggle();
		$(".iButtonSection").css({
			'opacity':'1'
		});
	});
	$(".ChannelTotalSub").click(function(){
		$(".ChannelTotalSub").toggleClass("ChannelTotalSubBG");
		$(".alert").fadeToggle(1000);
	});
	$(".allow,.block").click(function(){
		$(".alert").fadeOut(700);
		
	});
	
	
	
	

});