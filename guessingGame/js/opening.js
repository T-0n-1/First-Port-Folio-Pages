$(function(){

    document.getElementById('theme').play();

$("h1").animate({fontSize: '1px'});
$("h1").animate({heigth: 'toggle'});
$("h1").animate({fontSize: '100px'});

$("h1").animate({marginLeft: "+=100px"});
$("h1").animate({marginLeft: "-=200px"});
$("h1").animate({marginLeft: "+=100px"});

$("h1").animate({marginLeft: "+=150px"});
$("h1").animate({marginLeft: "-=300px"});
$("h1").animate({marginLeft: "+=150px"});

$("h1").animate({marginLeft: "+=50px"});
$("h1").animate({marginLeft: "-=100px"});
$("h1").animate({marginLeft: "+=50px"});

$("h1").animate({marginLeft: "+=200px"});
$("h1").animate({marginLeft: "-=400px"});
$("h1").animate({marginLeft: "+=200px"});

$("h1").addClass("font-effect-neon");

$("h1").delay(1000).fadeOut(2000);

window.addEventListener("click", playGame), false;
window.addEventListener("keydown", playGame, false);

$('#start').delay(8000).animate({width: 'toggle'});
$('#start').animate({fontSize: '2px'}, 'slow');
$('#start').animate({fontSize: '30px'}, 'slow');
$('#start').animate({fontSize: '2px'}, 'slow');
$('#start').animate({fontSize: '130px'}, 'slow');

function playGame() {
    
    if ('speechSynthesis' in window) {
        window.location.href = "index4.html"; 
    } else {
        window.location.href = "index5.html";
    }
    
    
}
});