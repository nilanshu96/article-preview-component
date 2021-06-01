const shareOpenButton = document.getElementById('share-open');
const shareCloseButton = document.getElementById('share-close');

let isShareMenuOpen = false;

const toggleShareMenu = function(event) {

    if(isShareMenuOpen) {
        const shareOptions = event.target.parentNode;
        shareOptions.style.display = "none";
        isShareMenuOpen = false;
    } else {
        const shareOptions = event.target.parentNode.querySelector(".share-options");
        shareOptions.style.display = "flex";
        isShareMenuOpen = true;
    }
}

shareOpenButton.onclick = toggleShareMenu;
shareCloseButton.onclick = toggleShareMenu;