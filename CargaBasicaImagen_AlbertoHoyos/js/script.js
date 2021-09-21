const imgElement = document.getElementById('imgSrc');
const inputElement = document.getElementById('fileInput');

inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

imgElement.onload = function() {
    const mat = cv.imread(imgElement);
    cv.cvtColor(mat, mat, cv.COLOR_BGR2GRAY);
    cv.imshow('canvasOutput', mat);
    mat.delete();
};

//Cargo bien
const onOpenCvReady = () => document.getElementById('status').innerHTML = '<b>OpenCV Cargo Correctamente';

//Cargo mal
const onOpenCvError = () => {
    const element = document.getElementById('status');
    element.setAttribute('class', 'err');
    element.innerHTML = 'Fallo la carga de OpenCv.js';
}