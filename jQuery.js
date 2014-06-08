window.onload = function() 
{
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




