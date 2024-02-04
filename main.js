function startClassification() {
    navigator.mediaDevices.getUserMedia({ audio: true });
    classifier = ml5.soundClassifier('https://teachablemachine.withgoogle.com/models/6Yu6oF7mj/model.json', modelReady);
    
}
function modelReady() {
    classifier.classify(gotResults);
}
function gotResults(error, results) {
    if (error) {
        console.log(error);
    }
    else {
        console.log(results);
        document.getElementById("result_label").innerHTML = 'I can hear ' + results[0].label;
        document.getElementById("result_confidence").innerHTML = 'I am ' + (results[0].confidence * 100).toFixed(2) + "% sure";
        language_heading = document.getElementById('language_h1');

        if (results[0].label == "Hindi") {
            language_heading == "Hindi";
        }
        else if (results[0].label == "English") {
            language_heading == "English";
        }
        else if (results[0].label == "Chinese") {
            language_heading == "Chinese";
        }
        else if (results[0].label == "Indonesian") {
            language_heading == "Indonesian";
        }
        else {
            language_heading == "Background Noise";
        }
    }
}