const images = ["pic1.jpg", "pic2.jpg", "pic3.jpg", "pic4.jpg", "pic5.jpg", "pic6.jpg"];

const selectedImg = images[Math.floor(Math.random() * images.length)];

//js 로 태그만들어 html 에 넣음
//tag를 만든다
const bgImage = document.createElement("img"); //<img>
//src="./img/img1.jpg"
bgImage.src = `img/${selectedImg}`;

document.body.appendChild(bgImage);
