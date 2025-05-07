// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {
  const synth = window.speechSynthesis;
  const voiceSelect = document.getElementById("voice-select");
  const speakButton = document.querySelector("#explore button");
  const textInput = document.getElementById("text-to-speak");
  const faceImage = document.querySelector("#explore img");
  
  let voices = [];

  function populateVoiceList() {
    voices = synth.getVoices();
    
    // Clear existing options but keep the default first option
    if (voiceSelect.options.length === 0) {
      const defaultOption = document.createElement("option");
      defaultOption.textContent = "Select Voice";
      defaultOption.disabled = true;
      defaultOption.selected = true;
      voiceSelect.appendChild(defaultOption);
    } else {
      while (voiceSelect.options.length > 1) {
        voiceSelect.remove(1);
      }
    }

    for (let i = 0; i < voices.length; i++) {
      const option = document.createElement("option");
      option.textContent = `${voices[i].name} (${voices[i].lang})`;

      if (voices[i].default) {
        option.textContent += " — DEFAULT";
      }

      option.setAttribute("data-lang", voices[i].lang);
      option.setAttribute("data-name", voices[i].name);
      option.value = i;
      voiceSelect.appendChild(option);
    }
  }

  populateVoiceList();
  if (speechSynthesis.onvoiceschanged !== undefined) {
    speechSynthesis.onvoiceschanged = populateVoiceList;
  }

  speakButton.addEventListener("click", () => {
    if (!textInput.value.trim()) return;
    
    const utterThis = new SpeechSynthesisUtterance(textInput.value);
    
    if (voiceSelect.selectedIndex > 0) {
      const selectedVoice = voices[voiceSelect.value];
      utterThis.voice = selectedVoice;
    }
    
    utterThis.onstart = () => {
      faceImage.src = "assets/images/smiling-open.png";
    };
    
    utterThis.onend = () => {
      faceImage.src = "assets/images/smiling.png";
    };
    
    synth.speak(utterThis);
  });
}