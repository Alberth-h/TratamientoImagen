const imgElement = document.getElementById('imgSrc');
const inputElement = document.getElementById('fileInput');

inputElement.addEventListener('change', (e) => {
    imgElement.src = URL.createObjectURL(e.target.files[0]);
}, false);

const process = () => {
    const mat = cv.imread(imgElement);
    const mat_result = new cv.Mat();
    const filter = parseInt($("#filter").val());

    switch (filter) {
        case 1:
            {
                const value = parseInt($("#value").val());
                cv.threshold(mat, mat_result, value, 255, cv.THRESH_BINARY);
                break;
            }
    }
    cv.imshow('canvasOutput', mat_result);
    mat.delete();
    mat_result.delete();
}


//Cargo bien
const onOpenCvReady = () => {
    document.getElementById('status').innerHTML = '<b>OpenCV Cargo Correctamente';
    $("#cv_start").show();
    $("#main_process").show();
    $("#cv_start").click(process);
    $("#main_process").show();

    $("#filter").change(function() {
        const filter = parseInt($("#filter").val());
        $(".step_blocks").hide();
        $("#step3_" + filter).show();
    });

    $("#value").change(function() {
        $("value_sel").html($(this).val());
        process();
    });
}

//Cargo mal
const onOpenCvError = () => {
    const element = document.getElementById('status');
    element.setAttribute('class', 'err');
    element.innerHTML = 'Fallo la carga de OpenCv.js';
}