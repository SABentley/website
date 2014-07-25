function ResolutionHome(lowRes)
{
	if(lowRes)
	{
		console.log("This is low resolution");
	}
	else
	{
		console.log("This is high resolution");
	}
}

function blinker() 
{
    $('.blinktext').fadeOut(150);
    $('.blinktext').fadeIn(150);
}

setInterval(blinker, 200);