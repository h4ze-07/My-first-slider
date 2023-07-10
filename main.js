const slider = document.querySelector('.images');

const btnPrev = document.querySelector('.btn-prev');
const btnNext = document.querySelector('.btn-next');

let slide = 0;

updateSlide();

btnPrev.addEventListener('click', (e) => {
    slide -= 400;
    slider.style.left = -slide + 'px';
    updateSlide();
});

btnNext.addEventListener('click', (e) => {
    slide += 400;
    slider.style.left = -slide + 'px';
    updateSlide();
});

function updateSlide() {
    if (slide <= 0) {
        btnPrev.classList.add('hide');
    } else {
        btnPrev.classList.remove('hide');
    }

    if (slide >= 3200) {
        btnNext.classList.add('hide');
    } else {
        btnNext.classList.remove('hide');
    }
}