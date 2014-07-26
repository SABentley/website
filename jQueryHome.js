window.onload = function()
{
	var width = $(window).width();
	var height = $(window).height();

	WindowSize(width, height);
};


function WindowSize(width, height)
{
	if(width <= 1280)
	{
		if(height <= 1024)
		{
			LowResolution();
		}
	}
}

function LowResolution()
{
	$("#programmer").css("padding-left", "190px");
	$("#fighter").css("padding-top", "50px");
	$("#fighter").css("padding-left", "310px");
	$(".smallerfont").css("paddingtop", "50px");
	$(".smallerfont").css("font-size", "25px");


}

function blinker() 
{
    $('.blinktext').fadeOut(150);
    $('.blinktext').fadeIn(150);
}

setInterval(blinker, 200);