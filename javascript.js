let clrChanged = new Boolean(false);

let color;

//color buttons
//--------------------------------------------------
$("#button-red").click(function(){
    $("body").css('background-color', 'red');
    color = "red";
});

$("#button-green").click(function(){
    $("body").css('background-color', 'green')
    color = "green"
});

$("#button-dark-grey").click(function(){
    $("body").css('background-color', 'grey')
    color = "grey";
});
//--------------------------------------------------

