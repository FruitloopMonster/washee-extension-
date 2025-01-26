const imagePath = chrome.runtime.getURL('washee.png');

const image = document.createElement('img');
image.src = imagePath;
image.style.position = 'fixed';
image.style.width = '1000px';
image.style.height = '1000px';
image.style.zIndex = '9999';
image.style.pointerEvents = 'none';
document.body.appendChild(image);

let posX = Math.random() * (window.innerWidth - 100);
let posY = Math.random() * (window.innerHeight - 100);
let speedX = 250;
let speedY = 500;

function washeetime() {

  image.style.left = `${posX}px`;
  image.style.top = `${posY}px`;

  requestAnimationFrame(washeetime);
}

washeetime();
