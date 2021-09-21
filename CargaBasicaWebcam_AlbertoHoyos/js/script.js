let video = document.getElementById("videoInput");
let src;
let dst;
let cap;

const fps = 30;

const processVideo = () => {
    try {
        const inicio = Date.now();

        cap.read(src);
        cv.cvtColor(src, dst, cv.COLOR_RGB2GRAY);
        cv.imshow('canvasOutput', dst);

        const delay = 1000 / fps - (Date.now() - inicio);
        setTimeout(processVideo, delay);
    } catch (err) {
        console.log(err);
    }
}

const start_cv = () => {
    src = new cv.Mat(video.height, video.width, cv.CV_8UC4);
    dst = new cv.Mat(video.height, video.width, cv.CV_8UC1);
    cap = new cv.VideoCapture(video);
    processVideo();
}


navigator.mediaDevices.getUserMedia({ video: true, audio: false })
    .then(function(stream) {
        video.srcObject = stream;
        video.play();
    })
    .catch(function(err) {
        console.log("Ocurrio un error" + err);
    });

const onOpenCvReady = () => {
    document.getElementById('status').innerHTML = '<b>OpenCV Cargo Correctamente';
    $("#cv_start").show();
    $("#cv_start").click(start_cv);
}
const onOpenCvError = () => {
    const element = document.getElementById('status');
    element.setAttribute('class', 'err');
    element.innerHTML = 'Fallo la carga de OpenCv.js';
}