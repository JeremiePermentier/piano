const touchs = document.querySelectorAll('.piano__key');

const play = (e) => {
    console.log(e)
    let key = null;
    if (e.pointerType === "mouse" || e.type === "touchstart") {
        key = e.target.attributes[0].value;
    } else {
        key = e.keyCode;
    }
    let sound = document.querySelector(`audio[data-key="${key}"]`);
    let touch = document.querySelector(`button[data-key="${key}"]`);

    if (!sound) return;
    sound.currentTime = 0;
    sound.play();


    if (touch.classList[1] === 'white') {
        touch.classList.add('play__white');
    } else {
        touch.classList.add('play__black');
    }
}

const removeTransition = (e) => {
    if (e.propertyName !== "transform") return;
    if(e.target.classList.contains('play__white')) {
        e.target.classList.remove('play__white');
    } else {
        e.target.classList.remove('play__black');
    }
}

const test = (e) => {
    console.log(e)
}

touchs.forEach(touch => touch.addEventListener('transitionend', removeTransition));
touchs.forEach(touch => touch.addEventListener('click', play));
touchs.forEach(touch => touch.addEventListener('touchstart', play));
window.addEventListener('keydown', play);