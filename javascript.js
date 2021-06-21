let clrChanged = new Boolean(false);

let color;

function textChanger(color){
    $("#h-text").text("The color is now " + color);
}

//color buttons
//--------------------------------------------------
$("#button-red").click(function(){
    $("body").css('background-color', 'red');
    color = "red";

    textChanger(color);
});

$("#button-green").click(function(){
    $("body").css('background-color', 'green')
    color = "green"

    textChanger(color);
});

$("#button-dark-grey").click(function(){
    $("body").css('background-color', 'grey')
    color = "grey";

    textChanger(color);
});
//--------------------------------------------------

