const slides = document.querySelectorAll('.slider');
const btns = document.querySelectorAll('.btn');
let currentSlide = 1;


const carousel = arg => {

    slides.forEach( slide => {
        slide.classList.remove('active');

        btns.forEach( btn => {
            btn.classList.remove('active');
        })
    })

    slides[arg].classList.add('active');
    btns[arg].classList.add('active');
}

btns.forEach((btn, i) => {
    btn.addEventListener('click', () => {
        carousel(i);
        currentSlide = i;
    })
})

const play = (activeImage) => {
    let active = document.getElementsByClassName('active');
    let i = 1;
    let player = () => {
        setTimeout( () => {
            [...active].forEach( activeImage => {
                activeImage.classList.remove('active');
            } )
            slides[i].classList.add('active');
            btns[i].classList.add('active');
            i++;
            if(slides.length == i){
                i = 0;
            }

            if(i >= slides.length){
                return;
            }
            player();
        }, 5000);
    }
    player();
}
play();
