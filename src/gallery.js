import emma1 from './images/EditorialGallery/EmmaBoyd-FirstImage.jpg';
import emma2 from './images/EditorialGallery/EmmaBoyd-SecondImage.jpg';
import emma3 from './images/EditorialGallery/EmmaBoyd-ThirdImage.jpg';
import emma4 from './images/EditorialGallery/EmmaBoyd-FourthImage.jpg';


const createTitle = (titleText) => {
    const anchor = document.createElement('a');
    const title = document.createElement('h1');

    anchor.href = 'index.html'
    anchor.classList.add('titleLink');

    title.classList.add('gallery-title');
    title.innerHTML = titleText;


    anchor.appendChild(title);

    return anchor;
}

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
    
    const galleryDom = GalleryArray();
    galleryDom.populateArray(emmaFirst_, emmaSecond_, emmaThird_, emmaFourth_);

    const galleryArray = galleryDom.getArray();
    

    console.table(galleryArray)

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

    }
    

}

function forwardArrow(){
    const gallery = GalleryDom().getGalleryDom();
    const currentFig = getCurrentGalleryFigure();
    const currentFigID = parseInt(currentFig.dataset.idNumber);
    const newFigID = currentFigID + 1;
    const figureWrapper = document.getElementById('figureWrapper');


    console.log(currentFigID);
    console.log(gallery.length);
    
    
    if(currentFigID == gallery.length - 1){
        const newImg = createFigure(gallery[0].img, gallery[0].caption, gallery[0].idNumber);
        currentFig.remove();
        figureWrapper.appendChild(newImg);

    }

    else{
        const newImg = createFigure(gallery[newFigID].img, gallery[newFigID].caption, gallery[newFigID].idNumber);
        currentFig.remove();
        figureWrapper.appendChild(newImg);

    }

    
    



}   

const getCurrentGalleryFigure = () => {
    const figure = document.getElementById('gallery-figure');
    return figure;
}

const loadGallery = () => {

    
    const content = document.getElementById('content');
    const title = createTitle('ARIEL SADOK');

    const galleryWrapper = createDiv('galleryWrapper');
    const arrowLeft = createDiv('arrow-left');
    arrowLeft.id= 'arrow-left';
    const arrowRight = createDiv('arrow-right');
    arrowRight.id='arrow-right';

    const gallery = GalleryDom().getGalleryDom();

    const figureWrapper = createDiv('figureWrapper');
    figureWrapper.id = 'figureWrapper';
    figureWrapper.classList.add('gallery-figure')
    const figure = createFigure(gallery[0].img, gallery[0].caption, gallery[0].idNumber);
    
    content.appendChild(title);
    content.appendChild(galleryWrapper);
    galleryWrapper.appendChild(arrowLeft);
    galleryWrapper.appendChild(figureWrapper);
    figureWrapper.appendChild(figure);
    galleryWrapper.appendChild(arrowRight);

    addEventListeners();

    
}



export default loadGallery;



