document.querySelector('form').addEventListener('submit', (event) => {
	event.preventDefault();
	const baseURL = document.querySelector('#i_url').value;
	chrome.storage.sync.set({ baseURL }, () => {});
	chrome.storage.sync.get('baseURL', (data) => { console.log(data) });
});