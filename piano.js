const touchs = document.querySelectorAll('.piano__key');

/**
 * Play music according to the keycode detect
 * @param {*} e 
 * @returns {void}
 */
const play = (e) => {
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

/**
 * Delete the css class at the end of the animation 
 * @param {*} e 
 * @returns {void}
 */
const removeTransition = (e) => {
    if (e.propertyName !== "transform") return;
    if(e.target.classList.contains('play__white')) {
        e.target.classList.remove('play__white');
    } else {
        e.target.classList.remove('play__black');
    }
}

touchs.forEach(touch => touch.addEventListener('transitionend', removeTransition));
touchs.forEach(touch => touch.addEventListener('click', play));
touchs.forEach(touch => touch.addEventListener('touchstart', play));
window.addEventListener('keydown', play);