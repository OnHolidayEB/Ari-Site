
import brion from './images/Brion.jpeg'

const createSplashWrapper = () => {
    const splashWrapper = document.createElement('div');
    splashWrapper.id = 'splashWrapper';

    return splashWrapper;
}

const createSplashImg = () => {
    const splashImg = document.createElement('img');
    splashImg.id = 'splashImg';
    splashImg.src = brion;
    
    return splashImg;
}

const createTitle = (titleText) => {
    const title = document.createElement('h1');
    title.classList.add('title');
    title.innerHTML = titleText;

    return title;
}

const createLinkWrapper = () => {
    const linkWrapper = document.createElement('div');
    linkWrapper.id = 'linkWrapper';

    return linkWrapper;
}

const createLink = (linkText) => {
    const link = document.createElement('a');
    link.classList.add('link');
    link.innerHTML = `${linkText}`;

    return link;
}

const pushSplash = () => {
    const splashWrapper = createSplashWrapper();
    const splashImg = createSplashImg();

    splashWrapper.appendChild(splashImg);
    splashWrapper.appendChild(createTitle('ARIEL SADOK'));


    return splashWrapper;
}

const pushLink = () => {
    const linkWrapper =  createLinkWrapper();
    
    const portfolios = linkWrapper.appendChild(createLink('Portfolios'));
    portfolios.id = 'portfolio';
    portfolios.href = '#thumbWrapper';
    const bio = linkWrapper.appendChild(createLink('Contact'));
    bio.id = 'bio';
    bio.href = 'about.html'


    return linkWrapper;
}

const loadHomePage = () => {
    const content = document.getElementById('content');
    content.appendChild(pushSplash());
    content.appendChild(pushLink());
}

export default loadHomePage;