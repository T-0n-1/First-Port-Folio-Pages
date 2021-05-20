// Tällä haetaan demon puhuttavaksi tarkoitettu teksti
var speechMsgInput = "kokoeen vuoksi tekstiä"

// Tällä haetaan ääni
var voiceSelect = document.getElementById('voice');

// Näillä haetaan sopivat äänensäädöt 1 demon puolella
var volumeInput = document.getElementById('volume');
var rateInput = document.getElementById('rate');
var pitchInput = document.getElementById('pitch');

// Näillä haetaan sopivat äänensäädöt 2 demon puolella
// Fetch the list of voices and populate the voice options.
function loadVoices() {
    // Fetch the available voices.
      var voices = speechSynthesis.getVoices();
    
    // Loop through each of the voices.
      voices.forEach(function(voice, i) {
      // Create a new option element.
          var option = document.createElement('option');
      
      // Set the options value and text.
          option.value = voice.name;
          option.innerHTML = voice.name;
            
      // Add the option to the voice selector.
          voiceSelect.appendChild(option);
      });
  }


// Näillä haetaan sopivat äänensäädöt 3 demon puolella
// Execute loadVoices.
loadVoices();
// Chrome loads voices asynchronously.
window.speechSynthesis.onvoiceschanged = function (e) {
    loadVoices();
};

/// Create a new utterance for the specified text and add it to
// the queue.
function speak(text) {
    // Create a new instance of SpeechSynthesisUtterance.
      var msg = new SpeechSynthesisUtterance();
    
    // Set the text.
      msg.text = text;
    
    // Set the attributes.
      msg.volume = parseFloat(volumeInput.value);
      msg.rate = parseFloat(rateInput.value);
      msg.pitch = parseFloat(pitchInput.value);
    
    // If a voice has been selected, find the voice and set the
  // utterance instance's voice attribute.
	//if (voiceSelect.value) {
		msg.voice = speechSynthesis.getVoices().filter(function(voice) { return voice.name == voiceSelect.value; })[0];
	//}
    
    // Queue this utterance.
      window.speechSynthesis.speak(msg);
  }
