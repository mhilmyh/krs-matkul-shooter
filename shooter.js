require("dotenv").config();
const axios = require("axios");

function StealKRS(jwt = process.env.JWT) {
	headers = {
		accept: "application/json, text/plain, */*",
		"accept-encoding": "gzip, deflate, br",
		"accept-language": "en-US,en;q=0.9,id;q=0.8",
		authorization: `Bearer ${jwt}`,
		"content-length": 177,
		"content-type": "application/json;charset=UTF-8",
		cookie: "_ga=GA1.3.86766915.1597712799; _gid=GA1.3.435139552.1597712799",
		origin: "https://krs.simak.ipb.ac.id",
		referer: "https://krs.simak.ipb.ac.id/krs",
		"sec-fetch-dest": "empty",
		"sec-fetch-mode": "cors",
		"sec-fetch-site": "same-origin",
		"user-agent":
			"Mozilla/5.0 (Linux; Android 6.0.1; Moto G (4)) AppleWebKit/537.36 (KHTML, like Gecko) Chrome/84.0.4147.135 Mobile Safari/537.36",
	};
	data = {
		KurikulumId: 133614,
		StatusMataKuliahId: 5,
		KelasKuliah: "1",
		KelasPraktikum: "0",
		KelasResponsi: "0",
		DiplomaProgramKeahlianId: 0,
		PascaSitIn: false,
		PascaMatrikulasi: false,
	};
	axios
		.post("https://krs.simak.ipb.ac.id/api/Krs", data, { headers })
		.then((response) => console.log(response.data))
		.catch((error) => console.log(error.response.data));
}

function Main() {
	setInterval((jwt) => StealKRS(), 2000);
}

Main();
