'use strict';

thumbs.onclick = (event) => {
  const thumbchoice = event.target.closest('a');

  if (!thumbchoice) {
    return;
  }
  showThumbnail(thumbchoice.href, thumbchoice.title);
  event.preventDefault();
};

const showThumbnail = (href, title) => {
  largeImg.src = href;
  largeImg.alt = title;
}