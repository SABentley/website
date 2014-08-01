window.onload = function() 
{
	var width = "innerWidth" in window ? window.innerWidth : document.documentElement.offsetWidth; 
	var height = "innerHeight" in window ? window.innerHeight : document.documentElement.offsetHeight; 
	
	console.log($('#module').data('resolution'));
	
	WindowSize(width, height);
	
	$('#mainiFrame').data('currentHTML', 0);

	$('#module').fadeTo(750, 1, function() 
	{
		$('#buttonList').fadeTo(750, 1, function() 
		{
			
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
	
	$(".button").click(function()
	{

	});

};


$(function(){
    $('#mainiFrame').load(function()
	{
		if($('module').data('resolution') != 'low')
		{
			var value = $('#mainiFrame').data('currentHTML');
			
			if(typeof value == 'undefined')
			{
				value = 0;
				
				switch(value)
				{
					case 0:
						$("#programmer").slideDown();
						$("#fighter").slideDown();
						break;
					case 1:
						break;
					case 2:
						break;
					case 3:
						break;
					default:
						break;
				}
			}
			else
			{
				switch(value)
				{
					case 0:
						$("#programmer").slideDown();
						$("#fighter").slideDown();
						break;
					case 1:
						break;
					case 2:
						break;
					case 3:
						break;
					default:
						break;
				}
			}
			
			
		}
		else
		{
			var value = $('#mainiFrame').data('currentHTML');
			
			switch(value)
			{
				case 0:
					LowResolutionHome();
					$("#programmer").slideDown();
					$("#fighter").slideDown();
					break;
				case 1:
					break;
				case 2:
					break;
				case 3:
					break;
				default:
					break;
			}
		}
	});
});




function WindowSize(width, height)
{
	console.log(width);
	console.log(height);

	if(width <= 1280)
	{
		if(height <= 1024)
		{
			LowResolution();
			$('#module').data('resolution', 'low');
		}
	}

}

function LowResolutionHome()
{
	console.log("low res");
	$("#programmer").css("padding-left", "190px");
	$("#fighter").css("padding-top", "50px");
	$("#fighter").css("padding-left", "310px");
	$(".smallerfont").css("paddingtop", "50px");
	$(".smallerfont").css("font-size", "25px");
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
	$(buttonList).css('padding-left', "430px");
	$(buttonList).css('padding-top', "150px");
	$(button).css('width', "160px");
	$(button).css('height', "90px");
	$(button).css('line-height', "88px");
	$(button).css('margin-right', "2%");
	$(impactFont).css('font-size', "35px");
	$(mainiFrame).css('margin-left', "185px");
	$(mainiFrame).css('margin-top', "24px");
	$(mainiFrame).css('width', "841px");
	$(mainiFrame).css('height', "532px");
}




