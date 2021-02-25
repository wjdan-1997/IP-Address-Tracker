import fetchData from './fetch.js';
import handleSubmit from './submit.js';
import setMap from './map.js';

document.addEventListener('DOMContentLoaded', () => {
	setUpEverything();

	document.querySelector('form').onsubmit = handleSubmit;
});

/* Fetch query can be made with either an ipAddress or a domain */
async function setUpEverything(queryType, queryValue) {
	
	const data = await fetchData(queryType, queryValue);

	displayUserInfo(data);
	setMap(data.location);
}


function displayUserInfo({ip, location, isp}) {
	const [IP, Location, TimeZone, ISP] = document.querySelectorAll('.data-value');

	IP.textContent = ip;
	Location.textContent = `${location.region}, ${location.country} ${location.postalCode}`;
	TimeZone.textContent = 'UTC ' + location.timezone;
	ISP.textContent = isp;
}
export {setUpEverything}