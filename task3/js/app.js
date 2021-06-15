var caption = document.getElementsByClassName("caption");

for (var i = 0; i < caption.length; i++) {
    caption[i].onclick = function () {
        this.classList.toggle('is-open');

        var content = this.nextElementSibling;
        if (content.style.maxHeight) {

            content.style.maxHeight = null;
        } else {

            content.style.maxHeight = content.scrollHeight + "px";
        }
    }
}

var button = document.querySelector('#arrow');
button.addEventListener('click', Up);


function Up(event) {
    event.preventDefault();
    window.scroll({
        left: 0,
        top: 0,
        behavior: 'smooth',
    })
}

window.addEventListener('scroll', (event) => {
    const button = document.querySelector('#arrow');
    const topOffset = 400;
    if (window.pageYOffset > topOffset) {
        button.classList.add('visible');
    } else {
        button.classList.remove('visible');
    }
});

const menu = document.querySelectorAll('.js-menu-item');
console.log(menu);
for (const pointmenu of menu) {
    pointmenu.addEventListener('click', function (event) {
        event.preventDefault();
        const id = pointmenu.getAttribute('href');

        document.querySelector(id).scrollIntoView({
            behavior: 'smooth',
            block: 'start'
        });
    });
}

const buttonBlacks = document.querySelectorAll('.button');
for ( const buttonBlack of buttonBlacks) {
    buttonBlack.addEventListener('click', OpenPopUp);
}

const overlay = document.querySelector('#black');
overlay.addEventListener('click', ClosePopUp);
const popupform = document.querySelector('#Pop-Up');
const buttonClose = document.querySelector('.close');
buttonClose.addEventListener('click', ClosePopUp);

function OpenPopUp(event) {
    event.preventDefault();
    overlay.classList.add('visible');
    popupform.classList.add('visible');
}

function ClosePopUp(event) {
    event.preventDefault();
    overlay.classList.remove('visible');
    popupform.classList.remove('visible');
}

document.querySelector('.menu').addEventListener('click', function () {
    document.querySelector('#mobile-menu').classList.toggle("animate");
})





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
