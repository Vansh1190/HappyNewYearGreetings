let senderName;
let generated = false;
let audio2;
let audio1;
let newUrl = "https://vansh1190.github.io/HappyNewYearGreetings/?";
const shareData = {
	title: 'MDN',
	text: 'Learn web development on MDN!',
	url: window.location.href
}


let fu = () => {
	audio1 = new Audio('fireworks.mp3');

	document.getElementById("touchDiv").remove();
	audio1.play();
	audio1.volume = 0.05;



	setTimeout(() => {

		audio2 = new Audio('coca_cola_song.mp3');
		audio2.play();
		audio2.volume = 0.5;
		audio2.loop = true;
	}, 2000)

	if (window.location.search != "") {
		let url = new URLSearchParams(window.location.search);
		senderName = url.get("name");
		senderName = senderName.toUpperCase()
		document.getElementById("greet").innerHTML = `<h2>${senderName}</h2> <br>  Wishes You and Your Family a Joyful, Bright, Healthy, Prosperous and Happiest New Year Ahead!
 	<img id ="gif" src="2023-GIF.gif" > 
	
	<h3>ਤੁਹਾਨੂੰ ਤੇ ਤੁਹਾਡੇ ਸਾਰੇ ਪਰਿਵਾਰ ਨੂੰ ਨਵੇਂ ਸਾਲ ਦੀ
ਲੱਖ ਲੱਖ ਵਧਾਈ ਹੋਵੇ ਜੀ ।</h3>
<h2>HAPPY NEW YEAR 2023</h2>
<h3>  आपको और आपके पूरे परिवार को नववर्ष की हार्दिक शुभकामनाएं
बधाई हो   </h3>
`
		

		setTimeout(() => {
			document.getElementById("gif").scrollIntoView(true)

		}, 4000)
			;
		document.getElementById("greet").style.animationName = "entry"
		document.getElementById("greet").style.display = "block"
		// navigator.vibrate([100,100,100,100,100,30,200,30,200,30,200,30,100,30,100,30,100]);
		let n = 0;
		setInterval(() => {
			if (n == 360) {
				console.log(n)
				n = 0;
			}
			else {

				document.getElementById("gif").style.filter = `hue-rotate(${n}deg)`;
				n++;
			}
		}, 20)
	}
}



let ss = () => {
	audio1.pause();
	audio2.pause();
}
let wShare = () => {
	window.addEventListener("click", ss)
	navigator.share(shareData);

}

let wShare2 = () => {

	window.location.href = `whatsapp://send?text= ${shareData.url}`;
}


let func = () => {
	newUrl = "https://vansh1190.github.io/HappyNewYearGreetings/?";
	let name = document.getElementById("name").value;
	if (name == "") {
		alert("Name field Cannot be Empty!");
		return;
	}
	name = name.replace(" ", "%20")
	newUrl += "name=" + name;
	shareData.url = newUrl;
	generated = true;
	console.log(newUrl)
	window.open(newUrl, "_blank");
	document.getElementById("name").value = "";
	

}





let userVisit = () => {
	let obj = window.clientInformation;
	console.log(visitData.name)
	visitData.name = obj;
	console.log(visitData.name)
}

window.onload = userVisit()
