const button = document.getElementById('button');
const audioElement = document.getElementById("audio")

function buttonDisableEnable() {
	button.disabled = !button.disabled;
}

// Passing Joke to VoiceRSS API
function tellME(joke) {
	const jokeString = joke.trim().replace(/ /g, "%20");
	VoiceRSS.speech( {
		key: "bafae21e1c71495ba42275b046b10260", 
		src: jokeString, 
		hl: "en-us", 
		r: 0,
		c: "mp3",
		f: "44khz_16bit_stereo",
		ssml: false
	});
}

// Get jokes from JOKE API
async function getJokes() {
	let joke = "";
	const apiUrl = "https://v2.jokeapi.dev/joke/Programming?blacklistFlags=nsfw,religious,political,racist,sexist,explicit"
	try {
		const response = await fetch(apiUrl);
		const data = await response.json();
		if (data.setup) {
			joke = `${data.setup} ... ${data.delivery}`;
		} else {
			joke = data.joke;
		}
		// Text-to-Speech
		tellME(joke);
		// Disable Button
		buttonDisableEnable();
	} catch (error) {
		// catch errors here
		console.log("An error to investigate!:", error)
	}
}

// Event Listeners
button.addEventListener("click", getJokes);
audioElement.addEventListener("ended", buttonDisableEnable);