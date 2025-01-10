window.addEventListener('load', () => {
    const loadingBar = document.querySelector('.real-loading-bar-progress');
    let progress = 0;

    const loadingInterval = setInterval(() => {
        progress += 1;
        loadingBar.style.width = `${progress}%`;

        if (progress >= 100) {
            clearInterval(loadingInterval);
        }
    }, 50);
});
