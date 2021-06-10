var caption = document.getElementsByClassName("caption");

for (var i = 0; i < caption.length; i++) {
    caption[i].onclick = function() {
        this.classList.toggle('is-open');

        var content = this.nextElementSibling;
        if (content.style.maxHeight) {

            content.style.maxHeight = null;
        } else {

            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}




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
