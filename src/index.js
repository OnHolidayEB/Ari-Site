import './style.css';

import loadHomePage from './home.js';
import addEventListeners from './homepageLinks';
import loadEditorialGallery from './editorialGallery.js';
import loadPortraitGallery from './portraitGallery.js';
import loadAbout from './about.js'
import pushMenuBar from './menuBar.js'


function getUrl(){
    return window.location.href;
}
switch (getUrl()) {

    case 'https://onholidayeb.github.io/Ari-Site/':
        init();
        loadHomePage();
        addEventListeners();
        break;

    case //'file:///Users/ericbouthiller/Projects/Ari_Site/dist/index.html':
            'https://onholidayeb.github.io/Ari-Site/index.html': 
        init();
        loadHomePage();
        addEventListeners();
        break;

    case //'file:///Users/ericbouthiller/Projects/Ari_Site/dist/portrait.html':
            'https://onholidayeb.github.io/Ari-Site/portrait.html':
        init();
        pushMenuBar();
        loadPortraitGallery();
        break;
    
        case //'file:///Users/ericbouthiller/Projects/Ari_Site/dist/index.html#thumbWrapper':
             'https://onholidayeb.github.io/Ari-Site/index.html#thumbWrapper':
        init();
        loadHomePage();
        addEventListeners();
        break;
    
    case //'file:///Users/ericbouthiller/Projects/Ari_Site/dist/editorial.html':
           'https://onholidayeb.github.io/Ari-Site/editorial.html':
        init();
        pushMenuBar();
        loadEditorialGallery();
        break;
    
    case //'file:///Users/ericbouthiller/Projects/Ari_Site/dist/about.html':
          'https://onholidayeb.github.io/Ari-Site/about.html':
        init();
        pushMenuBar();
        loadAbout();
        break;

        
}

function init(){
    const content = document.getElementById('content');
    const div = content.querySelectorAll('div')

    div.forEach(e => e.remove());

}

