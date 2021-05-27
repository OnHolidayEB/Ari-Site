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
    const figure = document.getElementById('gallery-figure');

    leftArrow.addEventListener('click', backArrow);
    rightArrow.addEventListener('click', forwardArrow);
    figure.addEventListener('click', forwardArrow);
}   

function backArrow() {
    const gallery = GalleryDom().getGalleryDom();
    const currentFig = getCurrentGalleryFigure();
    const currentFigID = currentFig.dataset.idNumber;
    const newFigID = parseInt(currentFigID) - 1;
    const figureWrapper = document.getElementById('figureWrapper');

    if(currentFigID == 0){
        const lastImgId = gallery.length - 1;
        const newImg = createFigure(gallery[lastImgId].img, gallery[lastImgId].caption, gallery[lastImgId].idNumber);
        currentFig.remove();
        figureWrapper.appendChild(newImg);

    }

    else{
        const newImg = createFigure(gallery[newFigID].img, gallery[newFigID].caption, gallery[newFigID].idNumber);
        currentFig.remove();
        figureWrapper.appendChild(newImg);
        newImg.addEventListener('click', forwardArrow);

    }
    

}

function forwardArrow(){
    const gallery = GalleryDom().getGalleryDom();
    const currentFig = getCurrentGalleryFigure();
    const currentFigID = parseInt(currentFig.dataset.idNumber);
    const newFigID = currentFigID + 1;
    const figureWrapper = document.getElementById('figureWrapper');


    if(currentFigID == gallery.length - 1){
        const newImg = createFigure(gallery[0].img, gallery[0].caption, gallery[0].idNumber);
        currentFig.remove();
        figureWrapper.appendChild(newImg);
        newImg.addEventListener('click', forwardArrow);

    }

    else{
        const newImg = createFigure(gallery[newFigID].img, gallery[newFigID].caption, gallery[newFigID].idNumber);
        currentFig.addEventListener('animationend', () => {
            currentFig.remove();
            newImg.addEventListener('click', forwardArrow);
            if(document.getElementById('click-caption') != null){
                removeClickCaption();
            }

        figureWrapper.appendChild(newImg);

        })
        currentFig.classList.toggle("img-fadeOut")
    }

    
    



}   

const removeClickCaption = () => {
    const clickCaption = document.getElementById('click-caption');
    clickCaption.remove();
}

const getCurrentGalleryFigure = () => {
    const figure = document.getElementById('gallery-figure');
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
    const figure = createFigure(gallery[0].img, gallery[0].caption, gallery[0].idNumber);

    const clickCaption = createDiv('click-caption');
    clickCaption.id = 'click-caption'
    clickCaption.innerHTML = "Click Image to Scroll";
    
    content.appendChild(galleryWrapper);
    galleryWrapper.appendChild(arrowLeft);
    galleryWrapper.appendChild(figureWrapper);
    figureWrapper.appendChild(figure);
    galleryWrapper.appendChild(arrowRight);
    galleryWrapper.appendChild(clickCaption);
    

    addEventListeners();

    
}



export default loadEditorialGallery;



