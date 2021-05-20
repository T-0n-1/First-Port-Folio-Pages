$("#contact").fadeOut();

const link1 = document.querySelector("#link1");
link1.addEventListener("click", switchMainpage, false);

function switchMainpage(e) {
  $("#wrapper").fadeOut();
  $("#contact").fadeIn();
}

const link2 = document.querySelector("#link2");
link2.addEventListener("click", switchPagemain, false);

function switchPagemain(e) {
  $("#wrapper").fadeIn();
  $("#contact").fadeOut();
}


var vid = document.getElementById("bgv");

const link3 = document.querySelector("#link3");
link3.addEventListener("click", videoSwitch, false);

function videoSwitch(e) {
  isSupp = vid.canPlayType("video/mp4");
  if (isSupp == "") {
    vid.src = "videos/Computing.mp4";
  } else {
    vid.src = "videos/Binary.mp4";
  }
  vid.load();
}

const link5 = document.querySelector("#link5");
link5.addEventListener("click", videoSwitch2, false);

function videoSwitch2(e) {
  isSupp = vid.canPlayType("video/mp4");
  if (isSupp == "") {
    vid.src = "videos/Kmarket.mp4";
  } else {
    vid.src = "videos/Kmarket.mp4";
  }
  vid.load();
}

const link6 = document.querySelector("#link6");
link6.addEventListener("click", videoSwitch3, false);

function videoSwitch3(e) {
  isSupp = vid.canPlayType("video/mp4");
  if (isSupp == "") {
    vid.src = "videos/Clouds.mp4";
  } else {
    vid.src = "videos/Clouds.mp4";
  }
  vid.load();
  typeWriter(e);
}

const link7 = document.querySelector("#link7");
link7.addEventListener("click", videoSwitch4, false);

function videoSwitch4(e) {
  isSupp = vid.canPlayType("video/mp4");
  if (isSupp == "") {
    vid.src = "videos/Ink.mp4";
  } else {
    vid.src = "videos/Ink.mp4";
  }
  vid.load();
}

function vS() {
  isSupp = vid.canPlayType("video/mp4");
  if (isSupp == "") {
    vid.src = "videos/Computing.mp4";
  } else {
    vid.src = "videos/Computing.mp4";
  }
  vid.load();
}

$("#main article .close").on("click", vS);

var i = 0;
var txt = 'Yrittäjä ja opiskelija, joka rentoutuu päivän päätteeksi lukemalla, kuuntelemalla musiikkia, liikkuen luonnossa ja viettämällä aikaa perheen parissa. Tietokoneet, järjestelmät, ohjelmat ja kaikenlaiset laitteet ovat aina kiehtoneet minua – haluan selvittää miten, miksi ja millä logiikalla ne toimivat. Liikun mielelläni luonnossa fatbike-pyörällä. Olen alkanut kuvaamaan pyörälenkkejäni ja editoimaan niitä sitten kotona – lähinnä omaksi ilokseni. Kuvien ja videoiden muokkaaminen on aina kiehtonut minua. Actionkamera ja drone mukanani lataan voimiani säästä ja vuodenajasta riippumatta pyöräillen. Mielenkiinto laitteita ja järjestelmiä kohtaan näkyy myös kotonanamme – meillä on paljon ohjelmoituja ja automatisoituja IoT-laitteita.';
var speed = 50;

function typeWriter() {
  if (i < txt.length) {
    document.getElementById("text1").innerHTML += txt.charAt(i);
    i++;
    setTimeout(typeWriter, speed);
  }
}