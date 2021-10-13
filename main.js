function Dance(){
    navigator.mediaDevices.getUserMedia({audio:true})
    classifier = ml5.soundClassifier("https://teachablemachine.withgoogle.com/models/-b42N4g8r/model.json", modelReady);
}

function modelReady(){
console.log("model is ready");
classifier.classify(gotResult)
}

