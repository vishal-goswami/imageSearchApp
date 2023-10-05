const apiKey = 'fudHsZZs4Szy6n2qyXuTX2VZ3w3QfcFfZyboExxok5w';
const form = document.querySelector('form');
const serchInput = document.querySelector('.search-input');
const gallary = document.querySelector('.gallary');
const moreBtn = document.querySelector('.more');

let inputData = '';
let page = 1;

async function searchImages() {
	inputData = serchInput.value;
	const url = `https://api.unsplash.com/search/photos?page=${page}&query=${inputData}&client_id=${apiKey}`;

	const response = await fetch(url);
	const data = await response.json();

	const results = data.results;

	if (page === 1) {
		gallary.innerHTML = '';
	}

	results.map((result) => {
		const box = document.createElement('div');
		box.classList.add('box');
		const img = document.createElement('img');
		img.src = result.urls.small;
		img.alt = result.alt_description;
		box.appendChild(img);
		box.appendChild(img);
		gallary.appendChild(box);
	});
	page++;
	if (page > 1) {
		moreBtn.style.display = 'block';
	}
}
form.addEventListener('submit', function (e) {
	e.preventDefault();
	page = 1;
	searchImages();
});
moreBtn.addEventListener('click', function (e) {
	searchImages();
});
