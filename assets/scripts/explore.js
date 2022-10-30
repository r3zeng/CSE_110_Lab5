// explore.js

window.addEventListener('DOMContentLoaded', init);

function init() {

    const synth = window.speechSynthesis;
    var voices = [];
    var dict = {};

    synth.addEventListener('voiceschanged', () => {
        voices = synth.getVoices();
        for (let i = 0; i < voices.length ; i++) {
            const option = document.createElement('option');
            option.textContent = `${voices[i].name} (${voices[i].lang})`;
            option.setAttribute('data-lang', voices[i].lang);
            option.setAttribute('data-name', voices[i].name);
            dict[option.textContent] = voices[i];
            document.getElementById('voice-select').appendChild(option);
        }
    });

    const button = document.querySelector('button');
    const img = document.querySelector('img');
    button.addEventListener('click', (event) => {
        const utterThis = new SpeechSynthesisUtterance(document.getElementById('text-to-speak').value);
        utterThis.voice = dict[document.getElementById('voice-select').value];
        synth.speak(utterThis);
        //let utterance = new SpeechSynthesisUtterance(document.getElementById('text-to-speak').value);
        //speechSynthesis.speak(utterance);
        img.src = "assets/images/smiling-open.png";
        checkFinishSpeaking(synth, img);
    });

}

function checkFinishSpeaking(synth, img){
    setTimeout(() => {
        if(synth.speaking){
            checkFinishSpeaking(synth, img);
        }
        else{
            img.src = "assets/images/smiling.png"
        }
    }, "50")
}