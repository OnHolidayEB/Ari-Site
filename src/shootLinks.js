///Used to make a page of thumbnails to direct users to different shoots
//not being used on ari's site but can be used on others

import emmaThumb from './images/EditorialShoots/thumbnails/Emma.jpeg'
import dustinThumb from './images/EditorialShoots/thumbnails/Dustin.jpeg'
import dimphyThumb from './images/EditorialShoots/thumbnails/Dimphy.jpeg'
import fosterThumb from './images/EditorialShoots/thumbnails/Foster.jpeg'
import miloThumb from './images/EditorialShoots/thumbnails/Milo.jpeg'

const editorialLink = (thumbnail, caption, shootLink) =>{
    
    return {thumbnail, caption, shootLink}
}


const getThumbArray = () => {
    const emma = editorialLink(emmaThumb, 'Emma Kate Boyd', '');
    const dustin = editorialLink(dustinThumb, 'Dustin Heath', '');
    const dimphy = editorialLink(dimphyThumb, 'Dimphy Janse', '');
    const foster = editorialLink(fosterThumb, 'Foster James', '');
    const milo = editorialLink(miloThumb, 'Milo Matthieu', '');

    const thumbArray = [emma, dustin, dimphy, foster, milo];

    return thumbArray;
}

const createThumbLink = (thumbnail, caption, shootLink) => {
    const anchor = document.createElement('a');
    const figure = document.createElement('figure');
    const portraitThumb = document.createElement('img');
    const figCaption = document.createElement('figcaption');

    anchor.href= shootLink

    portraitThumb.src = thumbnail;
    portraitThumb.classList.add('edThumbnail')

    figCaption.innerHTML = `${caption}`;
    figCaption.classList.add('thumbCaption');

    anchor.appendChild(figure);
    figure.appendChild(portraitThumb);
    figure.appendChild(figCaption);

    return anchor;
}

const createTitle = (titleText) => {
    const anchor = document.createElement('a');
    const title = document.createElement('h1');

    anchor.href = 'index.html'
    anchor.classList.add('titleLink');

    title.classList.add('title');
    title.innerHTML = titleText;


    anchor.appendChild(title);

    return anchor;
}

const createThumbWrapper = () => {
    const thumbWrapper = document.createElement('div');
    thumbWrapper.classList.add = 'editorialWrapper';

    thumbWrapper.id = "editorialWrapper";
    return thumbWrapper;
}

const loadEditorial = () => {
    const content = document.getElementById('content');
    content.appendChild(createTitle('ARIEL SADOK'));

    const thumbWrapper = createThumbWrapper();
    content.appendChild(thumbWrapper);
    const thumbArray = getThumbArray();
    thumbArray.forEach(thumb => {
        const link = createThumbLink(thumb.thumbnail, thumb.caption, thumb.shootLink);
        thumbWrapper.appendChild(link);
    })    

}

export default loadEditorial;