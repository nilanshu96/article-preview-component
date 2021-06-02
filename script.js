const SHARE_OPEN = 'share-open';
const SHARE_CLOSE = 'share-close';

const shareOpenButton = document.getElementById(SHARE_OPEN);
const shareCloseButton = document.getElementById(SHARE_CLOSE);

let isShareMenuOpen = false;

const toggleShareMenu = function(event) {

    if(isShareMenuOpen) {
        if(this.id === SHARE_CLOSE) {
            const shareOptions = event.target.parentNode;
            shareOptions.style.display = "none";
            isShareMenuOpen = false;
        } else if (this.id === SHARE_OPEN) {
            const shareOptions = event.target.parentNode.querySelector(".share-options");
            shareOptions.style.display = "none";
            isShareMenuOpen = false;
        }
    } else {
        const shareOptions = event.target.parentNode.querySelector(".share-options");
        shareOptions.style.display = "flex";
        isShareMenuOpen = true;
    }
}

shareOpenButton.onclick = toggleShareMenu;
shareCloseButton.onclick = toggleShareMenu;