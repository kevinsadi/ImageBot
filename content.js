console.log("Chrome extension go");

const images = [
	'https://simg.nicepng.com/png/small/851-8517636_skin-element-http-i-imgur-com-t8thkso-girl.png',
	'https://i.pinimg.com/236x/7e/f9/68/7ef9680856273163d043024998399f55.jpg',
	'https://simg.nicepng.com/png/small/851-8517636_skin-element-http-i-imgur-com-t8thkso-girl.png',
	'https://i.pinimg.com/236x/7e/f9/68/7ef9680856273163d043024998399f55.jpg',
	'https://i.kym-cdn.com/photos/images/original/001/430/011/c1d.png',
	'https://i.ytimg.com/vi/H8wNTZmCEhI/maxresdefault.jpg',
	'https://i.pinimg.com/originals/15/a4/67/15a46703f2f55dd8735d11f5774fc4a6.jpg',
	'https://www.tfwanime.com/wp-content/uploads/2019/03/Shinomiya-kaguya-cat-ears.png',
	'https://i.kym-cdn.com/photos/images/original/001/235/259/8cb.jpg'
];

function replaceWithImages() {
	document.querySelectorAll('img').forEach((img) => {
		const bounds = img.getBoundingClientRect();
		// When working with getBoundingClientRect(), treat the top of the
		// viewport as 0, and the bottom as window.innerHeight.
		const withinViewport = bounds.bottom > 0 && bounds.top < window.innerHeight;
		// Modify images within the viewport and those that haven't yet been changed
		if (withinViewport && !images.includes(img.src)) {
			img.src = images[Math.floor(Math.random() * images.length)];
			// TODO: img.addEventListener('click', () => { console.log('play sound'); });
		}
	});
}

replaceWithImages();
window.addEventListener('scroll', replaceWithImages);
