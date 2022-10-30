// expose.js


window.addEventListener('DOMContentLoaded', init);

function init() {
  //change horn icon and set audio
  const hornSelect = document.getElementById('horn-select');
  const audio = document.querySelector('audio');
  const hornIcon = document.querySelector('[alt="No image selected"]');
  hornSelect.addEventListener('change', (event) => {
    let currHorn = event.target.value;
    console.log(currHorn)
    if(currHorn == "air-horn") {
      hornIcon.src = "assets/images/air-horn.svg";
      audio.src = 'assets/audio/air-horn.mp3';
    }
    else if(currHorn == "car-horn") {
      hornIcon.src = "assets/images/car-horn.svg";
      audio.src = 'assets/audio/car-horn.mp3';
    }
    else if(currHorn == "party-horn") {
      hornIcon.src = "assets/images/party-horn.svg";
      audio.src = 'assets/audio/party-horn.mp3';
    }
  });

  //change volume icon
  const vol = document.getElementById('volume');
  vol.addEventListener('change', (event) => {
    var currVol = event.target.value;
    const volIcon = document.querySelector('[alt="Volume level 2"]');
    if(currVol == 0){
      volIcon.src="assets/icons/volume-level-0.svg";
    }else if(currVol < 33){
      volIcon.src="assets/icons/volume-level-1.svg";
    }
    else if(currVol < 67){
      volIcon.src="assets/icons/volume-level-2.svg";
    }
    else{
      volIcon.src="assets/icons/volume-level-3.svg";
    }
  });

  //play audio and confetti
  const button = document.querySelector('button');
  button.addEventListener('click', (event) => {
    var playAudio = new Audio(audio.src);
    playAudio.volume = vol.value / 100;
    playAudio.play();
    if(hornSelect.value == "party-horn"){
      const jsConfetti = new JSConfetti();
      jsConfetti.addConfetti();
    }
  });
}