const images = ["0.jpg", "1.jpg", "2.jpg",];

const chosenImage = images[Math.floor(Math.random() * images.length)]

const bgImage = document.createElement("img");      // <img/> 생성

bgImage.src = `img/${chosenImage}`;         // <img src="img/{chosenImage}.jpg">

document.body.appendChild(bgImage);         // body에 bgImage 삽입