AWS.config.update({
    accessKeyId: "AKIAXWMA6NCFFK3EN4TH",
    secretAccessKey: "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",
    region: "us-east-1" // Change if needed
});

var polly = new AWS.Polly();

function convertTextToSpeech() {
    let text = document.getElementById("textInput").value;
    let selectedVoice = document.getElementById("voiceSelect").value;

    var params = {
        Text: text,
        OutputFormat: "mp3",
        VoiceId: selectedVoice
    };

    polly.synthesizeSpeech(params, function (err, data) {
        if (err) {
            console.error(err);
        } else {
            let audioBlob = new Blob([data.AudioStream], { type: "audio/mp3" });
            let audioUrl = URL.createObjectURL(audioBlob);
            document.getElementById("audioPlayer").src = audioUrl;
        }
    });
}
