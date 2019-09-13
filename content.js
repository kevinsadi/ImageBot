console.log("Chrome extension go");

const audio = new Audio('anime-wow-sound-effect.mp3')
const playPromise = audio.play();

chrome.runtime.onMessage.addListener(gotMessage);

const girls = [
	'https://simg.nicepng.com/png/small/851-8517636_skin-element-http-i-imgur-com-t8thkso-girl.png',
	'https://i.pinimg.com/236x/7e/f9/68/7ef9680856273163d043024998399f55.jpg'
	'https://www.tfwanime.com/wp-content/uploads/2019/03/Shinomiya-kaguya-cat-ears.png',
    	'https://i.kym-cdn.com/photos/images/original/001/235/259/8cb.jpg'
];

document.querySelectorAll('img').forEach((img) => {
	img.src = girls[Math.floor(Math.random() * girls.length)];
	img.addEventListener('click', () => { console.log('playing sound'); });
});
