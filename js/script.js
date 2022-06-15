let menuButton = document.querySelector('.menu__icon');
menuButton.addEventListener('click', () => {
    console.log('Клик по кнопке меню');
    document.querySelector('.menu').classList.toggle('menu__visible');
});

let points = document.querySelector('.points');
points.addEventListener('click', () => {
    console.log('read more');
    document.querySelector('.add__blogtext').classList.toggle('add__blogtext_visible');
});

function initSlider() {
    const slidesToShow = 3
    const slidesToScroll = 2

    let position = 0

    const slider = document.querySelector('.slider')
    const slidesContainer = document.querySelector('.slider__slides')
    const slides = document.querySelectorAll('.slider__slide')
    const buttonPrev = document.querySelector('.button_type_prev')
    const buttonNext = document.querySelector('.button_type_next')

    const slideWidth = slider.clientWidth / slidesToShow
    const slidesCount = slides.length

    slides.forEach(slide => {
        slide.style.minWidth = `${slideWidth}px`
    })

    const setPosition = () => {
        slidesContainer.style.transform = `translateX(${position}px)`
    }

    const checkButtons = () => {
        buttonPrev.disabled = position === 0
        buttonNext.disabled = position <= -(slidesCount - slidesToShow) * slideWidth
    }
    checkButtons()

    const movePosition = slideWidth * slidesToScroll

    buttonPrev.addEventListener('click', () => {
        const unscrolledSlidesCount = Math.abs(position) / slideWidth
        position += unscrolledSlidesCount >= slidesToScroll
            ? slidesToScroll * slideWidth
            : unscrolledSlidesCount * slideWidth

        setPosition()
        checkButtons()
        console.log('prev')
    })

    buttonNext.addEventListener('click', () => {
        const unscrolledSlidesCount = slidesCount - (Math.abs(position) + slidesToShow * slideWidth) / slideWidth
        position -= unscrolledSlidesCount >= slidesToScroll
            ? slidesToScroll * slideWidth
            : unscrolledSlidesCount * slideWidth

        setPosition()
        checkButtons()
        console.log('next')
    })
}

initSlider()

document.addEventListener('DOMContentLoaded', () => {
    initPopup()
})

function initPopup() {
    const popupIdPattern = 'popup';
    const visibleClass = 'visible';
    const popupTriggers = document.querySelectorAll('.js-open-popup')

    popupTriggers.forEach((popupTrigger) =>
        popupTrigger.addEventListener('click', () => {
            const popupNumber = popupTrigger.id[popupTrigger.id.length - 1];
            document.querySelector('.overlay').classList.add(visibleClass);
            document.getElementById(popupIdPattern + popupNumber).classList.add(visibleClass);
        })
    );

    const popupCloseButtons = document.querySelectorAll('.overlay, .close-button');
    const popupElements = document.querySelectorAll('.popup');

    popupCloseButtons.forEach((element) =>
        element.addEventListener('click', () => {
            document.querySelector('.overlay').classList.remove(visibleClass);
            popupElements.forEach((popup) => popup.classList.remove(visibleClass));
        })
    );
}

 AOS.init();
