# Joke-Teller
Begin the jokes

Web page includes a robot.gif and a button.
Once user presses the button, it will call a programmer joke from the API, then using VoiceRSS.speech (voice.js) to get text-to-speech functionality.
*The VoiceRSS object is an external API that provides text-to-speech functionality. The speech() method of the VoiceRSS object is used to synthesize speech from the text of the joke and play it back as an audio file.*

#Potential update to do
Program can be slow with a bad internet. Improvement point would be to automatically begin downloading a joke when page is loaded, and then load a new one when that joke is requested.
