document.addEventListener('DOMContentLoaded', function() {
    const video = document.getElementById('mainVideo');

    // Previene il fullscreen su qualsiasi dispositivo
    function preventFullScreen(e) {
        e.preventDefault();
        e.stopPropagation();
        if (document.fullscreenElement) {
            document.exitFullscreen();
        }
        return false;
    }

    // Eventi per prevenire il fullscreen
    video.addEventListener('webkitbeginfullscreen', preventFullScreen, false);
    video.addEventListener('webkitendfullscreen', preventFullScreen, false);
    video.addEventListener('fullscreenchange', preventFullScreen, false);
    video.addEventListener('webkitfullscreenchange', preventFullScreen, false);
    video.addEventListener('mozfullscreenchange', preventFullScreen, false);
    video.addEventListener('MSFullscreenChange', preventFullScreen, false);

    // Previene il fullscreen su touch
    video.addEventListener('touchstart', function(e) {
        if (e.touches.length > 1) {
            e.preventDefault();
        }
    }, { passive: false });

    // Mantiene il video nella sua dimensione originale
    function maintainVideoSize() {
        video.style.maxHeight = '100vh';
        if (document.fullscreenElement === video) {
            document.exitFullscreen();
        }
    }

    window.addEventListener('resize', maintainVideoSize);
    video.addEventListener('loadedmetadata', maintainVideoSize);
});
