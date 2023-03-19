
const slideImgs = document.querySelectorAll('.slider__item')


let imgIndex = 2;
function slideShow() {
    
    const slideImgFirst = $1('.slider__item.first')
    const slideImgSecond = $1('.slider__item.second')
    const slideImgThird = slideImgs[imgIndex]
    const slideImgFourth = slideImgs[imgIndex === slideImgs.length -1 ?  0 : imgIndex + 1]
    slideImgFourth.classList.replace('fourth', 'third')
    slideImgThird.classList.replace('third', 'second')
    slideImgSecond.classList.replace('second', 'first')
    slideImgFirst.classList.replace('first', 'fourth')
    imgIndex++;
    if(imgIndex >= slideImgs.length) { //imgIndex: 0-7, slideImgs.length: 8
        imgIndex = 0;
    }
    setTimeout(slideShow, 2000)
}

slideShow();