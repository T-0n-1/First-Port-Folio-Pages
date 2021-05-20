// Tarkistaa selaintuen keinotek.puheelle
var supportMsg = document.getElementById('msg');

if ('speechSynthesis' in window) {
    supportMsg.innerHTML = 'Selaimesi <strong>tukee</strong> keinotekoista puhetta.';
} else {
    supportMsg.innerHTML = 'Valitettavasti selaimesi <strong>ei tue</strong> keinotekoista puhetta.';
    supportMsg.classList.add('not-supported');
}

// Piilota pelialue alussa säätöjen tieltä
$("#output").fadeOut(1);
$("#input").fadeOut(1);
$("#guess").fadeOut(1);

// Piilota reset- ja back-nappi
$("#reset").fadeOut(1);
$("#back").fadeOut(1);

/*. arvauspelin muuttujat */
const mysteryNumber = Math.ceil(Math.random() * 101);
let playersGuess = 0;
let guessesRemaining = 10;
let guessesMade = 0;
let gameState = "";
let gameWon = false;
/* arvauspelin pysyvät muuttujat */
const input = document.querySelector("#input");
const output = document.querySelector("#output");

// Tällä haettaisiin demon 'speak' nappi
/* var button = document.getElementById('speak'); */


// Arvauspelin javascript jatkuu

// speech = new SpeechSynthesisUtterance("Tervetuloa! Tämä on JavaScript-arvauspeli. Valitsen numeron yhden ja sadan väliltä, jonka jälkeen sinun tehtävänäsi on yrittää arvata mikä se on. Anna arvauksesi, luku yhden ja sadan väliltä.");
// window.speechSynthesis.speak(speech);

// Napin määrittely
const button = document.querySelector("button");
button.style.cursor = "pointer";
button.addEventListener("click", switchHandler, false);
window.addEventListener("keydown", keydownHandler, false);

// Tämä tarkistaa Enter-näppäimen painalluksen
function keydownHandler(e) {
    if (e.keyCode === 13) {
        playGame();
    }
}

// Ja tämä hiiren napin painalluksen 
// jolla äänen säädöt poistuvat
// ja varsinainen pelialue tulee esille
function switchHandler(e) {

    button.removeEventListener("click", switchHandler, false);

    $("#output").fadeIn(1);
    $("#input").fadeIn(1);
    $("#guess").fadeIn(1);
    $("#msg").fadeOut(1);
    $(".option").fadeOut(1);
    $("#ready").fadeOut(1);
    $("#info").fadeOut(1);

    text = "Tervetuloa JavaScript-arvauspeliin. Minä valitsen numeron yhden ja sadan väliltä, jonka jälkeen sinun tarkoituksesi on saada arvattua valitsemani numero.";
    speak(text);
    
    document.getElementById("guess").addEventListener("click", clickHandler, false);
}

// Ja tämä hiiren napin painalluksen 
function clickHandler() {
    playGame();
}

// Tämä on itse peli
function playGame() {
    document.getElementById('open').play();
    playersGuess = parseInt(input.value);

    if (isNaN(playersGuess)) {
        output.innerHTML = "Vain numeroita arvaukseksi."
        text = "Vain numeroita arvaukseksi."
        speak(text);
    } else {
        text = playersGuess;
        speak(text);
        guessesRemaining--; //Sama kuin guessesRemaining = guessesRemaing - 1;
        guessesMade++; //Vastaavasti sama kuin guessesMade = guessesMade + 1;
        gameState = "Tämä oli arvausnumero " + guessesMade + ", sinulla on " + guessesRemaining + " arvausta jäljellä."

        if (playersGuess > mysteryNumber) {
            output.innerHTML = "Arvauksesi on liian suuri." + " " + gameState
            text = "Arvauksesi on liian suuri. " + gameState;
            speak(text);
            input.value = ""
            if (guessesRemaining < 1) {
                endGame();
            }
        } else if (playersGuess < mysteryNumber) {
            output.innerHTML = "Arvauksesi on liian pieni." + " " + gameState
            text = "Arvauksesi on liian pieni. " + gameState;
            speak(text);
            input.value = ""
            if (guessesRemaining < 1) {
                endGame();
            }
        } else if (playersGuess = mysteryNumber) {
            output.innerHTML = "Onneksi olkoon, arvauksesi osui oikeaan!"
            text = "Onneksi olkoon!";
            speak(text);
            gameWon = true;
            endGame();
        };
    }


}

function endGame() {
    if (gameWon) {
        document.getElementById('open').pause();
        document.getElementById('wav2').play();
        output.innerHTML = "Arvasit oikein! Luku oli " + mysteryNumber
        text = "Arvasit oikein! Luku oli " + mysteryNumber;
        speak(text);
        $('#page-wrapper').css({"margin":"0 auto"});
        $('#page-wrapper').css({"float":"center"});
        $("html").css('background-image', 'none');
        fireWorks ();

    } else {
        output.innerHTML = "Arvasit väärin. Luku oli " + mysteryNumber
        text = "Arvasit väärin. Luku oli " + mysteryNumber;
        speak(text);
    }

    // nappien vaihto
    $("#input").fadeOut(1);
    $("#guess").fadeOut(2000);
    $("#reset").fadeIn(2000);
    $("#back").fadeIn(3000);

    //poista Enter-näppäin käytöstä
    removeEventListener("keydown", keydownHandler, false);

}

// Ilotulitus voiton jälkeen
function fireWorks() {
    document.getElementById('wav1').play();
    // window.resizeBy(0, -100);

    var SCREEN_WIDTH = window.innerWidth,
    SCREEN_HEIGHT = window.innerHeight,
    mousePos = {
        x: 400,
        y: 300
    },

    // create canvas
    canvas = document.createElement('canvas'),
    context = canvas.getContext('2d'),
    particles = [],
    rockets = [],
    MAX_PARTICLES = 400,
    colorCode = 0;

// init
$(document).ready(function() {
    document.body.appendChild(canvas);
    canvas.width = SCREEN_WIDTH;
    // canvas.width = 50%;
    canvas.height = SCREEN_HEIGHT;
    setInterval(launch, 800);
    setInterval(loop, 1000 / 50);
});

// update mouse position
$(document).mousemove(function(e) {
    e.preventDefault();
    mousePos = {
        x: e.clientX,
        y: e.clientY
    };
});

// launch more rockets!!!
$(document).mousedown(function(e) {
    for (var i = 0; i < 5; i++) {
        launchFrom(Math.random() * SCREEN_WIDTH * 2 / 3 + SCREEN_WIDTH / 6);
    }
});

function launch() {
    launchFrom(mousePos.x);
}

function launchFrom(x) {
    if (rockets.length < 10) {
        var rocket = new Rocket(x);
        rocket.explosionColor = Math.floor(Math.random() * 360 / 10) * 10;
        rocket.vel.y = Math.random() * -3 - 4;
        rocket.vel.x = Math.random() * 6 - 3;
        rocket.size = 8;
        rocket.shrink = 0.999;
        rocket.gravity = 0.01;
        rockets.push(rocket);
    }
}

function loop() {
    // update screen size
    if (SCREEN_WIDTH != window.innerWidth) {
        canvas.width = SCREEN_WIDTH = window.innerWidth;
    }
    if (SCREEN_HEIGHT != window.innerHeight) {
        canvas.height = SCREEN_HEIGHT = window.innerHeight;
    }

    // clear canvas
    context.fillStyle = "rgba(0, 0, 0, 0.05)";
    context.fillRect(0, 0, SCREEN_WIDTH, SCREEN_HEIGHT);

    var existingRockets = [];

    for (var i = 0; i < rockets.length; i++) {
        // update and render
        rockets[i].update();
        rockets[i].render(context);

        // calculate distance with Pythagoras
        var distance = Math.sqrt(Math.pow(mousePos.x - rockets[i].pos.x, 2) + Math.pow(mousePos.y - rockets[i].pos.y, 2));

        // random chance of 1% if rockets is above the middle
        var randomChance = rockets[i].pos.y < (SCREEN_HEIGHT * 2 / 3) ? (Math.random() * 100 <= 1) : false;

/* Explosion rules
             - 80% of screen
            - going down
            - close to the mouse
            - 1% chance of random explosion
        */
        if (rockets[i].pos.y < SCREEN_HEIGHT / 5 || rockets[i].vel.y >= 0 || distance < 50 || randomChance) {
            rockets[i].explode();
        } else {
            existingRockets.push(rockets[i]);
        }
    }

    rockets = existingRockets;

    var existingParticles = [];

    for (var i = 0; i < particles.length; i++) {
        particles[i].update();

        // render and save particles that can be rendered
        if (particles[i].exists()) {
            particles[i].render(context);
            existingParticles.push(particles[i]);
        }
    }

    // update array with existing particles - old particles should be garbage collected
    particles = existingParticles;

    while (particles.length > MAX_PARTICLES) {
        particles.shift();
    }
}

function Particle(pos) {
    this.pos = {
        x: pos ? pos.x : 0,
        y: pos ? pos.y : 0
    };
    this.vel = {
        x: 0,
        y: 0
    };
    this.shrink = .97;
    this.size = 2;

    this.resistance = 1;
    this.gravity = 0;

    this.flick = false;

    this.alpha = 1;
    this.fade = 0;
    this.color = 0;
}

Particle.prototype.update = function() {
    // apply resistance
    this.vel.x *= this.resistance;
    this.vel.y *= this.resistance;

    // gravity down
    this.vel.y += this.gravity;

    // update position based on speed
    this.pos.x += this.vel.x;
    this.pos.y += this.vel.y;

    // shrink
    this.size *= this.shrink;

    // fade out
    this.alpha -= this.fade;
};

Particle.prototype.render = function(c) {
    if (!this.exists()) {
        return;
    }

    c.save();

    c.globalCompositeOperation = 'lighter';

    var x = this.pos.x,
        y = this.pos.y,
        r = this.size / 2;

    var gradient = c.createRadialGradient(x, y, 0.1, x, y, r);
    gradient.addColorStop(0.1, "rgba(255,255,255," + this.alpha + ")");
    gradient.addColorStop(0.8, "hsla(" + this.color + ", 100%, 50%, " + this.alpha + ")");
    gradient.addColorStop(1, "hsla(" + this.color + ", 100%, 50%, 0.1)");

    c.fillStyle = gradient;

    c.beginPath();
    c.arc(this.pos.x, this.pos.y, this.flick ? Math.random() * this.size : this.size, 0, Math.PI * 2, true);
    c.closePath();
    c.fill();

    c.restore();
};

Particle.prototype.exists = function() {
    return this.alpha >= 0.1 && this.size >= 1;
};

function Rocket(x) {
    Particle.apply(this, [{
        x: x,
        y: SCREEN_HEIGHT}]);

    this.explosionColor = 0;
}

Rocket.prototype = new Particle();
Rocket.prototype.constructor = Rocket;

Rocket.prototype.explode = function() {
    var count = Math.random() * 10 + 80;

    for (var i = 0; i < count; i++) {
        var particle = new Particle(this.pos);
        var angle = Math.random() * Math.PI * 2;

        // emulate 3D effect by using cosine and put more particles in the middle
        var speed = Math.cos(Math.random() * Math.PI / 2) * 15;

        particle.vel.x = Math.cos(angle) * speed;
        particle.vel.y = Math.sin(angle) * speed;

        particle.size = 10;

        particle.gravity = 0.2;
        particle.resistance = 0.92;
        particle.shrink = Math.random() * 0.05 + 0.93;

        particle.flick = true;
        particle.color = this.explosionColor;

        particles.push(particle);
    }
};

Rocket.prototype.render = function(c) {
    if (!this.exists()) {
        return;
    }

    c.save();

    c.globalCompositeOperation = 'lighter';

    var x = this.pos.x,
        y = this.pos.y,
        r = this.size / 2;

    var gradient = c.createRadialGradient(x, y, 0.1, x, y, r);
    gradient.addColorStop(0.1, "rgba(255, 255, 255 ," + this.alpha + ")");
    gradient.addColorStop(1, "rgba(0, 0, 0, " + this.alpha + ")");

    c.fillStyle = gradient;

    c.beginPath();
    c.arc(this.pos.x, this.pos.y, this.flick ? Math.random() * this.size / 2 + this.size / 2 : this.size, 0, Math.PI * 2, true);
    c.closePath();
    c.fill();

    c.restore();
};
};