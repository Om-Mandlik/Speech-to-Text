var mic_btn = document.getElementById("mic_btn")
var output = document.getElementById("output")
mic_btn.addEventListener("click",()=>{
   const speech_recognition = window.SpeechRecognition || window.webkitSpeechRecognition
    let listening = false

    if (!speech_recognition) {
        console.log("Your browser does not support speech recognition")
    } else {
        const recognition = new speech_recognition()
        recognition.continuous = false
        recognition.lang = 'en-US'
        recognition.start()
        listening = true
        recognition.onresult = (event)=>{
            const transcript = event.results[0][0].transcript
            output.textContent = transcript
            if (transcript.toLowerCase() == "open youtube") {
                window.location.href = "https://www.youtube.com/"
            }
        }
        recognition.onerror = (event)=>{
            console.log("error : ",event.error)
        }
        recognition.onend = ()=>{
            if(listening){
                recognition.start();
            }
        }
    }
})