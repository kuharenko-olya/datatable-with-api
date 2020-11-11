// Получаем элементы
var nextButton = document.getElementById('button-next');
var backButton = document.getElementById('button-back');
var slides = document.getElementsByClassName('slide');

// 1. Первый элемент
var activeSlide = 0;


// 3. Скрываем слайд

function hide() {
    Object.values(slides).forEach(function (slide, index) {
        let styles = getComputedStyle(slide)
        if (index == activeSlide) {
            if (styles.display == 'block') {
                slide.style.display = 'none';
            }
        }
    })


}

//5.Показываем слайд

function show() {
    let slide = slides[activeSlide];
    slide.style.display = 'block';
}


// 2. Нажатие на next()
nextButton.onclick = chooseNext;

//6. Нажатие на prev()
backButton.onclick = choosePrev;


// Выбираем следующий слайд
function chooseNext() {
    
    hide();
    
    /* Проверяем условие:
    Если активный слайд = последнему элементу , то верни на 0
    иначе увеличить ++
    */
    
    if (activeSlide == slides.length - 1) {
        activeSlide = 0;
    } else {
        activeSlide++;
    }

    show();

}


// Выбираем предыдущий слайд

function choosePrev() {
    hide();
    
    /* Проверяем условие:
    Если активный слайд = 0 , тогда верни на последний элемент
    иначе уменьшить --
    */
    
    if (activeSlide == 0) {
        activeSlide = slides.length - 1;
    } else {
        activeSlide--;
    }

    show();
}
