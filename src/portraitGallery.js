import johnny1 from './images/PortriatGallery/JohnnyDonohoe-Image1.jpg';
import johnny2 from './images/PortriatGallery/JohnnyDonohoe-Image2.jpg';
import dimphy1 from './images/PortriatGallery/DimphyJanse-Image1.jpg';
import dimphy2 from './images/PortriatGallery/DimphyJanse-Image2.jpg';
import dimphy3 from './images/PortriatGallery/DimphyJanse-Image3.jpg';
import milo1 from './images/PortriatGallery/MiloMatthieu-Image1.jpg';
import milo2 from './images/PortriatGallery/MiloMatthieu-Image2.jpg';
import alexia1 from './images/PortriatGallery/Alexia-Image1.jpg';
import alexia2 from './images/PortriatGallery/Alexia-Image2.jpg';
import beastie1 from './images/PortriatGallery/BeastieVee-Image1.jpg';
import brion1 from './images/PortriatGallery/BrionStarr-Image1.jpg';
import brion2 from './images/PortriatGallery/BrionStarr-Image2.jpg';
import ian1 from './images/PortriatGallery/IanWeglarz-Image1.jpg';
import ian2 from './images/PortriatGallery/IanWeglarz-Image2.jpg';

const createDiv = (divClass) => {
    const div = document.createElement('div');
    div.classList.add(`${divClass}`);

    return div;
}


const createFigure = (source, caption, idNumber ) => {
    const figure = document.createElement('figure');
    figure.classList.add('gallery-figure');
    //figure.id = 'gallery-figure';
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
    const johnnyFirst_ = galleryImg(johnny1, 'Johnny Donohoe', '0');
    const johnnySecond_ = galleryImg(johnny2, 'Johnny Donohoe', '1');
    const dimphyFirst_ = galleryImg(dimphy1, 'Dimphy Janse', '2');
    const dimphySecond_ = galleryImg(dimphy2, 'Dimphy Janse', '3');
    const dimphyThird_ = galleryImg(dimphy3, 'Dimphy Janse', '4');
    const miloFirst_ = galleryImg(milo1, 'Milo Matthieu', '5');
    const miloSecond_ = galleryImg(milo2, 'Milo Matthieu', '6');
    const alexiaFirst_ = galleryImg(alexia1, 'Alexia', '7');
    const alexiaSecond_ = galleryImg(alexia2, 'Alexia', '8');
    const beastieFirst_ = galleryImg (beastie1, 'Beastie Vee', '9');
    const brionFirst_ = galleryImg(brion1, 'Brion Starr', '10');
    const brionSecond_ = galleryImg(brion2, 'Brion Starr', '11');
    const ianFirst_ = galleryImg(ian1, 'Ian Weglarz', '12');
    const ianSecond_ = galleryImg(ian2, 'Ian Weglarz', '13');

    const galleryDom = GalleryArray();
    galleryDom.populateArray(johnnyFirst_, johnnySecond_, dimphyFirst_, dimphySecond_, dimphyThird_,
            miloFirst_, miloSecond_, alexiaFirst_, alexiaSecond_, beastieFirst_, brionFirst_, brionSecond_,
            ianFirst_, ianSecond_
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
    const newFig = document.querySelector(`.gallery-figure[data-id-number="${newFigID}"`)

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
        const firstImg = document.querySelector(`.gallery-figure[data-id-number= '${gallery.length - 1}'`);
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
    
    
    
    
    
    /*const gallery = GalleryDom().getGalleryDom();
    const currentFig = getCurrentGalleryFigure();
    const currentFigID = currentFig.dataset.idNumber;
    const newFigID = parseInt(currentFigID) - 1;
    const figureWrapper = document.getElementById('figureWrapper');

    if(currentFigID == 0){
        const lastImgId = gallery.length - 1;
        const newImg = createFigure(gallery[lastImgId].img, gallery[lastImgId].caption, gallery[lastImgId].idNumber);
        currentFig.remove();
        figureWrapper.appendChild(newImg);
        newImg.addEventListener('click', forwardArrow);


    }

    else{
        const newImg = createFigure(gallery[newFigID].img, gallery[newFigID].caption, gallery[newFigID].idNumber);
        currentFig.remove();
        figureWrapper.appendChild(newImg);
        newImg.addEventListener('click', forwardArrow);


    }
    */

}

function forwardArrow(){
    const gallery = GalleryDom().getGalleryDom();
    const currentFig = getCurrentGalleryFigure();
    const currentFigID = parseInt(currentFig.dataset.idNumber);
    const newFigID = currentFigID + 1;
    const newFig = document.querySelector(`.gallery-figure[data-id-number="${newFigID}"`)

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
        const firstImg = document.querySelector('.gallery-figure[data-id-number="0"');
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
        if(document.getElementById('click-caption') != null){
            removeClickCaption();
        }
    }
    
   

    





/*
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
        })
        currentFig.classList.toggle("img-fadeOut")

        newImg.addEventListener('click', forwardArrow);
        if(document.getElementById('click-caption') != null){
            removeClickCaption();
        }

        figureWrapper.appendChild(newImg);

    }*/

    
}   

const removeClickCaption = () => {
    const clickCaption = document.getElementById('click-caption');
    clickCaption.remove();
}

const getCurrentGalleryFigure = () => {
    const figure = document.getElementById('current-figure');
    
    return figure;
}

const loadPortraitGallery = () => {

    
    const content = document.getElementById('content');

    const galleryWrapper = createDiv('galleryWrapper');
    const arrowLeft = createDiv('arrow-left');
    arrowLeft.id= 'arrow-left';
    const arrowRight = createDiv('arrow-right');
    arrowRight.id='arrow-right';

    const gallery = GalleryDom().getGalleryDom();

    const figureWrapper = createDiv('figureWrapper');
    figureWrapper.id = 'figureWrapper';
    //const figure = createFigure(gallery[0].img, gallery[0].caption, gallery[0].idNumber);

    


    const clickCaption = createDiv('click-caption');
    clickCaption.id = 'click-caption'
    clickCaption.innerHTML = "Click Image to Scroll";
    
    content.appendChild(galleryWrapper);
    galleryWrapper.appendChild(arrowLeft);
    galleryWrapper.appendChild(figureWrapper);
    //figureWrapper.appendChild(figure);
    gallery.forEach((image, index) => {
        image = createFigure(gallery[index].img, gallery[index].caption, gallery[index].idNumber);
        figureWrapper.appendChild(image);
        image.style.zIndex = 0;
        image.style.display = 'none';
    })
    galleryWrapper.appendChild(arrowRight);
    galleryWrapper.appendChild(clickCaption);

    
    const currentFigure = document.querySelector('.gallery-figure[data-id-number="0"');
    currentFigure.style.zIndex = 30;
    currentFigure.style.display = 'flex';
    currentFigure.id = 'current-figure';
    const currentFigureImg = currentFigure.querySelector('.gallery-img');
    currentFigureImg.id = 'current-image';
   


    addEventListeners();

    
}



export default loadPortraitGallery;
