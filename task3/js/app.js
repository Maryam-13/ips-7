window.addEventListener('load', function () {
    setBodyLoaded();
    setAnimatedBlockLoaded();
});

function setBodyLoaded() {
    let body = document.getElementsByTagName('body')[0];
    body.classList.add('loaded');
}

function setAnimatedBlockLoaded() {
    const animatedBlock = document.getElementById('animatedBlock');
    if (!animatedBlock) {
        return;
    }

    let reached = false;
    const ANIMATED_BLOCK_OFFSET = 300;

    window.addEventListener('scroll', () => {
        if (window.pageYOffset + window.innerHeight > animatedBlock.offsetTop + ANIMATED_BLOCK_OFFSET) {
            if (!reached) {
                animatedBlock.classList.add('loaded');
                reached = true;
            }

        }
    })
}
