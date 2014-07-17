window.onload = function() 
{

	var width = $(window).width();
	var height = $(window).height();
	
	WindowSize(width, height);

	var loaded = false;

	$('#module').fadeTo(750, 1, function() 
	{
		$('#buttonList').fadeTo(750, 1, function() 
		{
			loaded = true;
		});
    });


	$(".button").mouseenter(function() 
	{
		$(this).css("color", "#73AF2B");
		$(this).css("cursor", "pointer");
	});
	
	$(".button").mouseleave(function()
	{
		$(this).css("color", "#E9E017");
	});

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
	else
	{
		
	}
}

function LowResolution()
{
	var background = "#background";
	var module = "#module";
	var buttonList = "#buttonList";
	var button = ".button";
	var impactFont = ".impactfont";
	var mainiFrame = "#mainiFrame";

	$(background).css('background-image', "url(stylesheet/background43.png)");
	$(background).css('width', "1254px");
	$(background).css('height', "873px");
	$(module).css('background-image', "url(stylesheet/module43.png)");
	$(module).css('width', "1166px");
	$(module).css('height', "819");
	$(module).css('margin-left', "50px");
	$(buttonList).css('padding-left', "100px");
	$(buttonList).css('padding-top', "260px");
	$(button).css('width', "220px");
	$(button).css('height', "100px");
	$(button).css('line-height', "95px");
	$(button).css('margin-right', "4%");
	$(impactFont).css('font-size', "50px");
	$(mainiFrame).css('margin-left', "270px");
	$(mainiFrame).css('margin-top', "10px");
	$(mainiFrame).css('width', "664px");
	$(mainiFrame).css('height', "420px");
}




