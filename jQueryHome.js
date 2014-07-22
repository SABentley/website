function blinker() 
{
    $('.blinktext').fadeOut(150);
    $('.blinktext').fadeIn(150);
}

setInterval(blinker, 200);