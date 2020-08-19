const axios = require("axios");

function StealKRS() {
	headers = {
		accept: "application/json, text/plain, */*",
		"accept-encoding": "gzip, deflate, br",
		"accept-language": "en-US,en;q=0.9,id;q=0.8",
		authorization:
			"Bearer eyJhbGciOiJSUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiIxMDk2NTEiLCJleHAiOjE2MDA0OTcyMTgsImlzcyI6Imh0dHBzOi8vYXBpLmlwYi5hYy5pZCJ9.saBjXUu3q51eH9a1wGq2o-u5q3aHxP39P8YF3VIhREhl1GdqhbNhV47VcEcSJghU5PAuOVCjPE4aL2FNsRDnFj3tn4hvcfxFuqZXttHI5O4DX1Rw4LJWyZisoihD79iPOUXVcabxbzdm_HQDUUgWN525eBsSAAb9_b5UIeda4jNSnYv7IL6BDtjFMNlVjOMN7jBodvObWnR0lBoQFmEO01QrWtxN2K44rRvNTwPGVvA4kJLsiwkY0sa19RAneCxtGxof7G3uly5bT4k75obpxIqC7lJ20aAe-h2TKIIGmCgmZ5IKQA6tpiyCmODF1kK3xxiDkCN1KnlchmimBwKRkg",
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
	setInterval(() => StealKRS(), 2000);
}

Main();
