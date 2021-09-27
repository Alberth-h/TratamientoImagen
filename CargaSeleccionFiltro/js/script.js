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