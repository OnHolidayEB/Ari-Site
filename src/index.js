import './style.css';

import loadHomePage from './home.js';
import addEventListeners from './homepageLinks';
import loadGallery from './gallery.js';
import loadAbout from './about.js'



function getUrl(){
    return window.location.href;
}
switch (getUrl()) {
    case 'https://onholidayeb.github.io/Ari-Site/': 
        init();
        loadHomePage();
        addEventListeners();
        break;

    case 'file:///Users/ericbouthiller/Projects/Ari_Site/dist/editorial.html':
        init();
        //loadEditorial();
        //loadGallery();
    case 'https://onholidayeb.github.io/Ari-Site/index.html':
        init();
        loadHomePage();
        addEventListeners();
        break;

    case 'https://onholidayeb.github.io/Ari-Site/gallery.html':
        init();
        loadGallery();
        break;
    
    case 'https://onholidayeb.github.io/Ari-Site/about.html':
        init();
        loadAbout();
        break;

        
}

function init(){
    const content = document.getElementById('content');
    const div = content.querySelectorAll('div')

    div.forEach(e => e.remove());

}