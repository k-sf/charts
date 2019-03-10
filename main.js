document.addEventListener("DOMContentLoaded", function() {
    const viewport = document.querySelector("#js-viewport");
    const leftBlock = document.querySelector(".overlay-color.left");
    const chartPreviewCcon = document.querySelector(".chart-preview-con");
    let maxWidth = chartPreviewCcon.offsetWidth-viewport.offsetWidth;
    let startWidth = 0;

    let startPosX = 0;
    viewport.addEventListener('touchstart',touchStart);
    function touchStart(e){
        startWidth = leftBlock.offsetWidth;
        startPosX = e.touches[0].clientX;
        document.addEventListener("touchmove", touchMove);
        viewport.addEventListener("touchend", touchEnd);
        // viewport.removeEventListener('touchstart',touchStart);
    }
    function touchEnd(){
        document.removeEventListener("touchmove", touchMove);
        viewport.removeEventListener("touchend", touchEnd);
        // viewport.addEventListener('touchstart',touchStart);
    }
    function touchMove(e) {
        const currentPosX = e.touches[0].clientX;
        const coordMargin = currentPosX-startPosX;
        let resultWidth = startWidth + coordMargin;
        if(resultWidth<0){
            resultWidth = 0;
        }else if(resultWidth>maxWidth){
            resultWidth = maxWidth;
        }
        leftBlock.style.minWidth =  resultWidth + 'px';
    }
});
