import emma1 from './images/EditorialGallery/EmmaBoyd-FirstImage.jpg';
import emma2 from './images/EditorialGallery/EmmaBoyd-SecondImage.jpg';
import emma3 from './images/EditorialGallery/EmmaBoyd-ThirdImage.jpg';
import emma4 from './images/EditorialGallery/EmmaBoyd-FourthImage.jpg';
import destiny1 from './images/EditorialGallery/DestinyStrudwick-Image1.jpg';
import destiny2 from './images/EditorialGallery/DestinyStrudwick-Image2.jpg';
import destiny3 from './images/EditorialGallery/DestinyStrudwick-Image3.jpg';
import destiny4 from './images/EditorialGallery/DestinyStrudwick-Image4.jpg';
import destiny5 from './images/EditorialGallery/DestinyStrudwick-Image5.jpg';
import dustin1 from './images/EditorialGallery/DustinHeath-Image1.jpg';
import dustin2 from './images/EditorialGallery/DustinHeath-Image2.jpg';
import dustin3 from './images/EditorialGallery/DustinHeath-Image3.jpg';
import dustin4 from './images/EditorialGallery/DustinHeath-Image4.jpg';
import foster1 from './images/EditorialGallery/FosterJames-Image1.jpg';
import foster2 from './images/EditorialGallery/FosterJames-Image2.jpg';
import foster3 from './images/EditorialGallery/FosterJames-Image3.jpg';
import foster4 from './images/EditorialGallery/FosterJames-Image4.jpg';

const createDiv = (divClass) => {
    const div = document.createElement('div');
    div.classList.add(`${divClass}`);

    return div;
}



const createFigure = (source, caption, idNumber ) => {
    const figure = document.createElement('figure');
    figure.classList.add('gallery-figure');
    figure.id = 'gallery-figure';
    figure.dataset.idNumber = idNumber;

    const img = document.createElement('img');
    img.classList.add('gallery-img');
    img.src = source;

    const figCaption = document.createElement('figcaption');
    figCaption.classList.add('gallery-caption');
    figCaption.innerHTML = caption;

    figure.appendChild(img);
    figure.appendChild(figCaption);

    return figure;

};


const galleryImg = (img, caption, idNumber) =>{

    return {img, caption, idNumber}

}

const GalleryArray = () => {
    
    const galleryArray_ = [];

    function populateArray(...images) {
        images.forEach(image => galleryArray_.push(image));
    }

    const getArray = () => {
        return galleryArray_
    }

    return {populateArray, getArray};

}

const GalleryDom = () => {
    const emmaFirst_ = galleryImg(emma1, 'Emma Kate Boyd', '0');
    const emmaSecond_ = galleryImg(emma2, 'Emma Kate Boyd', '1');
    const emmaThird_ = galleryImg(emma3, 'Emma Kate Boyd', '2');
    const emmaFourth_ = galleryImg(emma4, 'Emma Kate Boyd', '3');
    const destinyFirst_ = galleryImg(destiny1, 'Destiny Strudwick', '4');
    const destinySecond_ = galleryImg(destiny2, 'Destiny Strudwick', '5');
    const destinyThird_ = galleryImg(destiny3, 'Destiny Strudwick', '6');
    const destinyFourth_ = galleryImg(destiny4, 'Destiny Strudwick', '7');
    const destinyFifth_ = galleryImg(destiny5, 'Destiny Strudwick', '8');
    const dustinFirst_ = galleryImg(dustin1, 'Dustin Heath', '9');
    const dustinSecond_ = galleryImg(dustin2, 'Dustin Heath', '10');
    const dustinThird_ = galleryImg(dustin3, 'Dustin Heath', '11');
    const dustinFourth_ = galleryImg(dustin4, 'Dustin Heath', '12');
    const fosterFirst_ = galleryImg(foster1, 'Foster James', '13');
    const fosterSecond_ = galleryImg(foster2, 'Foster James', '14');
    const fosterThird_ = galleryImg(foster3, 'Foster James', '15');
    const fosterForth_ = galleryImg(foster4, 'Foster James', '16');
    
    const galleryDom = GalleryArray();
    galleryDom.populateArray(emmaFirst_, emmaSecond_, emmaThird_, emmaFourth_, 
            destinyFirst_, destinySecond_, destinyThird_, destinyFourth_, destinyFifth_,
            dustinFirst_, dustinSecond_, dustinThird_, dustinFourth_,
            fosterFirst_, fosterSecond_, fosterThird_, fosterForth_
                );

    const galleryArray = galleryDom.getArray();
    
    function getGalleryDom(){
        return galleryArray;
    }

    return {getGalleryDom};
}



const addEventListeners = () => {
    const leftArrow = document.getElementById('arrow-left');
    const rightArrow = document.getElementById('arrow-right');
    const images = document.querySelectorAll('img.gallery-img');

    leftArrow.addEventListener('click', backArrow);
    rightArrow.addEventListener('click', forwardArrow);
    images.forEach(img => {
        img.addEventListener('click', forwardArrow);
    })
}   

function backArrow() {
    const gallery = GalleryDom().getGalleryDom();
    const currentFig = getCurrentGalleryFigure();
    const currentFigID = parseInt(currentFig.dataset.idNumber);
    const newFigID = currentFigID - 1;
    const newFig = document.querySelector(`.gallery-figure[data-id-number="${newFigID}"]`)

    currentFig.style.zIndex = 0;
    currentFig.classList.toggle('img-fadeOut')
    currentFig.addEventListener('animationend', (e) => {

        if(e.animationName == 'fadeIn'){
            return;
        }

        else{
            currentFig.style.display = 'none';
            currentFig.classList.remove('img-fadeOut');

        }
        
    })

    if(currentFigID == 0){
        const firstImg = document.querySelector(`.gallery-figure[data-id-number= '${gallery.length - 1}']`);
        firstImg.style.zIndex = 30;
        firstImg.style.display = 'flex';
        firstImg.id = 'current-figure';
        currentFig.id = '';


    }

    else{
        currentFig.id = '';
        newFig.style.zIndex = 30;
        newFig.style.display = 'flex';
        newFig.id = 'current-figure'
        const newFigImg = newFig.querySelector('.gallery-img');
        newFigImg.id = 'current-image';
    }
   
}

function forwardArrow(){
    const gallery = GalleryDom().getGalleryDom();
    const currentFig = getCurrentGalleryFigure();
    const currentFigID = parseInt(currentFig.dataset.idNumber);
    const newFigID = currentFigID + 1;
    const newFig = document.querySelector(`.gallery-figure[data-id-number="${newFigID}"]`)

    currentFig.style.zIndex = 0;
    currentFig.classList.toggle('img-fadeOut')
    currentFig.addEventListener('animationend', (e) => {

        if(e.animationName == 'fadeIn'){
            return;
        }

        else{
            currentFig.style.display = 'none';
            currentFig.classList.remove('img-fadeOut');

        }
        
    })

    if(currentFigID == gallery.length - 1){
        const firstImg = document.querySelector('.gallery-figure[data-id-number="0"]');
        firstImg.style.zIndex = 30;
        firstImg.style.display = 'flex';
        firstImg.id = 'current-figure';
        currentFig.id = '';


    }

    else{
        currentFig.id = '';
        const currentFigImg = currentFig.querySelector('.gallery-img');
        currentFigImg.id = '';
        newFig.style.zIndex = 30;
        newFig.style.display = 'flex';
        newFig.id = 'current-figure'
        const newFigImg = newFig.querySelector('.gallery-img');
        newFigImg.id = 'current-image';
        if(document.getElementById('click-caption') != null){
            removeClickCaption();
        }
    }

}   

const removeClickCaption = () => {
    const clickCaption = document.getElementById('click-caption');
    clickCaption.remove();
}

const getCurrentGalleryFigure = () => {
    const figure = document.getElementById('current-figure');
    
    return figure;
}

const loadEditorialGallery = () => {
    const content = document.getElementById('content');

    const galleryWrapper = createDiv('galleryWrapper');
    const arrowLeft = createDiv('arrow-left');
    arrowLeft.id= 'arrow-left';
    const arrowRight = createDiv('arrow-right');
    arrowRight.id='arrow-right';

    const gallery = GalleryDom().getGalleryDom();

    const figureWrapper = createDiv('figureWrapper');
    figureWrapper.id = 'figureWrapper';

    const clickCaption = createDiv('click-caption');
    clickCaption.id = 'click-caption'
    clickCaption.innerHTML = "Click Image to Scroll";
    
    content.appendChild(galleryWrapper);
    galleryWrapper.appendChild(arrowLeft);
    galleryWrapper.appendChild(figureWrapper);
    gallery.forEach((image, index) => {
        image = createFigure(gallery[index].img, gallery[index].caption, gallery[index].idNumber);
        figureWrapper.appendChild(image);
        image.style.zIndex = 0;
        image.style.display = 'none';
    })
    galleryWrapper.appendChild(arrowRight);
    galleryWrapper.appendChild(clickCaption);

    
    const currentFigure = document.querySelector('.gallery-figure[data-id-number="0"]');
    currentFigure.style.zIndex = 30;
    currentFigure.style.display = 'flex';
    currentFigure.id = 'current-figure';
    const currentFigureImg = currentFigure.querySelector('.gallery-img');
    currentFigureImg.id = 'current-image';
   


    addEventListeners();

    
}


export default loadEditorialGallery;



