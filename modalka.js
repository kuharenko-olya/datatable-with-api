var button = document.getElementById('button');
var closeModal = document.getElementById('close-modal');

function toggle() {

    var modalWindow = document.getElementById('modal');
    var actualDisplay = getComputedStyle(modalWindow).display;
    
    if (actualDisplay == 'none') {
        modalWindow.style.display = 'block';
    } else {
        modalWindow.style.display = 'none';
    }
}

button.onclick = closeModal.onclick = toggle;