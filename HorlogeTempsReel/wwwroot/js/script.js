/** script.js */

// Création de l'objet connection au Back-end .NET Core 2.1 sous SignalR Core
const connection = new signalR.HubConnectionBuilder()
	.withUrl("/horlogeHub")
	.build();

var tempsMs = 1000; // Temps entre chaque seconde à mettre jours dans l'horloge

var interval; // Variable setInterval pour la mise à jours du temps dans l'horloge

// Permet de recevoir une réponse du hub après le Send
// Obtient l'horloge
connection.on("ReceiveHorloge", (hours, minutes, seconds, latence) => {
	try {
		clearInterval(interval);
	} catch (error) {
		console.log(error);
	}

	if (document.getElementById("buttonGetHorloge").hidden === true)
		showHorloge();

	updateViaBackEndHtmlHorloge(hours, minutes, seconds);
	interval = setInterval(updateViaFrontEndHtmlHorloge, tempsMs);
});

connection.start().catch(err => console.error(err.toString())); // Démarre la connection WebSocket via l'objet connection

// Capture l'évènement de click sur le bouton
document.getElementById("buttonGetHorloge").addEventListener("click", event => {
	const c = document.getElementById("buttonGetHorloge").value;
	connection.invoke("SendClient", c).catch(err => console.error(err.toString())); // Appel le hub
	event.preventDefault();
	if (!isNullOrEmpty(document.getElementById("horloge")))
		document.getElementById("buttonGetHorloge").hidden = true;
});

// Vérifier qu'un string est null ou vide
function isNullOrEmpty(s) {
	var result = false;
	if (s === null || s === "")
		result = true;
	return result;
}

// Afficher l'horloge
function showHorloge() {
	document.getElementById("horloge").hidden = false;
}

// Modifie les valeurs du html de l'horloge
function setHorloge(hours, minutes, seconds) {
	if (!isNullOrEmpty(hours))
		document.getElementById("hours").innerHTML = hours;
	if (!isNullOrEmpty(minutes))
		document.getElementById("minutes").innerHTML = minutes;
	if (!isNullOrEmpty(seconds))
	document.getElementById("seconds").innerHTML = seconds;
}

// Mise à jours de l'horloge avec heure retournée par le back-end
function updateViaBackEndHtmlHorloge(hours, minutes, seconds) {
	setHorloge(hours, minutes, seconds);
	console.log("horloge via back : " + hours + ":" + minutes + ":" + seconds);
}

// Calcul de la mise à jours de l'horloge
function updateViaFrontEndHtmlHorloge() {
	if (!isNullOrEmpty(document.getElementById("hours").innerHTML) && !isNullOrEmpty(document.getElementById("minutes").innerHTML) && !isNullOrEmpty(document.getElementById("seconds").innerHTML)) {
		var hh = parseInt(document.getElementById("hours").innerHTML);
		var mm = parseInt(document.getElementById("minutes").innerHTML);
		var ss = parseInt(document.getElementById("seconds").innerHTML);
		ss++;
		if (ss < 10)
			ss = '0' + ss;
		if (ss === 60) {
			ss = '00';
			mm++;
			if (mm < 10)
				mm = '0' + mm;
			if (mm === 60) {
				mm = '00';
				hh++;
				if (hh < 10)
					hh = '0' + hh;
				if (hh === 24)
					hh = '00';
				setHorloge(hh, null, null);
			}
			setHorloge(null, mm, null);
		}
		setHorloge(null, null, ss);
		console.log("ajustement horloge front : " + hh + ":" + mm + ":" + ss);
	}	
}
