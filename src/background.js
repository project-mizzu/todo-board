const images = ["01.jpg", "02.jpg","03.jpg","04.jpg"];

const chosenImg = images[Math.floor(Math.random() * images.length)];

const background = document.createElement("img");
background.src = `image/${chosenImg}`;

const back = document.querySelector("#background")

back.appendChild(background);