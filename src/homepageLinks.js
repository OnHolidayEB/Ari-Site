import portrait from './images/portrait.jpeg';
import editorial from './images/editorial.jpeg';


const addEventListeners = () => {
    const links = document.querySelectorAll('.link');
    links.forEach(link => {
        link.addEventListener('click', parseLink);

    })

}

function parseLink() {
    
    switch(this.id){
        case 'portfolio':
            pushPortfolioDom();
            break;
        case 'bio':
            bio();
            break;
            
    }
}

const createWrapper = () => {
    const thumbWrapper = document.createElement('div');
    thumbWrapper.classList.add('thumbWrapper');
    thumbWrapper.id = 'thumbWrapper'

    return thumbWrapper;

}

const createPortfolioLink = (thumbnail, caption, link) => {
    const anchor = document.createElement('a');
    const figure = document.createElement('figure');
    const portraitThumb = document.createElement('img');
    const figCaption = document.createElement('figcaption');

    anchor.href=`${link}`;

    portraitThumb.src = thumbnail;
    portraitThumb.classList.add('thumbnail')

    figCaption.innerHTML = `${caption}`;
    figCaption.classList.add('thumbCaption');

    anchor.appendChild(figure);
    figure.appendChild(portraitThumb);
    figure.appendChild(figCaption);

    return anchor;
   
}


const pushPortfolioDom = () =>{

    if(document.body.contains(document.getElementById('thumbWrapper'))){
        return;
    }

    else{
        const content = document.getElementById('content');
        const thumbWrapper = content.appendChild(createWrapper());
        thumbWrapper.appendChild(createPortfolioLink(portrait, 'Portrait', ''));
        thumbWrapper.appendChild(createPortfolioLink(editorial, 'Editorial', 'gallery.html'));

    }
    
}






export default addEventListeners;