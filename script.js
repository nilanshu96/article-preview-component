const SHARE_OPEN = 'share-open';
const SHARE_CLOSE = 'share-close';

const shareOpenButton = document.getElementById(SHARE_OPEN);
const shareCloseButton = document.getElementById(SHARE_CLOSE);

let isShareMenuOpen = false;

const toggleShareMenu = function(event) {

    if(isShareMenuOpen) {
        if(this.id === SHARE_CLOSE) {
            const shareOptions = event.target.parentNode;
            shareOpenButton.style.background = "url(./images/icon-share.svg) no-repeat 50% 45%, #ecf2f8";
            shareOptions.style.display = "none";
            isShareMenuOpen = false;
        } else if (this.id === SHARE_OPEN) {
            const shareOptions = event.target.parentNode.querySelector(".share-options");
            event.target.style.background = "url(./images/icon-share.svg) no-repeat 50% 45%, #ecf2f8";
            shareOptions.style.display = "none";
            isShareMenuOpen = false;
        }
    } else {
        const shareOptions = event.target.parentNode.querySelector(".share-options");
        event.target.style.background = "url(./images/icon-share-white.svg) no-repeat 50% 45%, #6d7f97";
        shareOptions.style.display = "flex";
        isShareMenuOpen = true;
    }
}

shareOpenButton.onclick = toggleShareMenu;
shareCloseButton.onclick = toggleShareMenu;