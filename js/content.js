console.log("Chrome extension go");
const cheerio = require('cheerio');
const request = require('request');

const images = [];

// IIFE to keep baseURL from being a global variable
(function() {
	// TODO: have the user input this
	const baseURL = 'https://www.google.com/search?biw=1600&bih=355&tbm=isch&sa=1&ei=oqWTXZaCEo-7ggeokqXoCA&q=dogs&oq=dogs&gs_l=img.3..0i67l3j0j0i67j0j0i67j0l3.6200.6586..6716...0.0..1.187.490.2j2......0....1..gws-wiz-img.-e6rzH4KPwQ&ved=0ahUKEwiW2_7Q4vvkAhWPneAKHShJCY0Q4dUDCAc&uact=5';
	// regex to test if the image is already hosted somewhere or if it's an image uri
	// or it's from the https://encrypted-tbn0.gstatic.com/images url w/ at least one search param
	const REGEX = /(^(https?):\/{2}.*\.(jpg|jpeg|png)\??.*|^data:image\/(jpg|jpeg|png);base64.*|(\/images\?{1}.+=.+)$)/g;
	request(baseURL, (err, resp, html) => {
		if (!err && resp.statusCode === 200) {
			const $ = cheerio.load(html);
			$('img').each((i, elem) => {
				const imgURL = elem.attribs.src || elem.attribs['data-src'];
				// /regex/.test(str) tests if the regex pattern is present in the string
				if (REGEX.test(imgURL)) { images.push(imgURL); }
				// otherwise check if it's a source that needs to be appended to the base url
			});
			replaceWithImages();
			window.addEventListener('scroll', replaceWithImages);
		}
	});
})();

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
