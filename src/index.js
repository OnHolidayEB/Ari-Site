import './style.css';

import loadHomePage from './home.js';
import addEventListeners from './homepageLinks';
import loadGallery from './gallery.js';
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

    case //'file:///Users/ericbouthiller/Projects/Ari_Site/dist/index.html'|| 
        'https://onholidayeb.github.io/Ari-Site/index.html': 
        init();
        loadHomePage();
        addEventListeners();
        break;

   /* case 'file:///Users/ericbouthiller/Projects/Ari_Site/dist/editorial.html':
        init();
        //loadEditorial();
        //loadGallery();*/
    
        case //'file:///Users/ericbouthiller/Projects/Ari_Site/dist/index.html#thumbWrapper' ||
            'https://onholidayeb.github.io/Ari-Site/index.html#thumbWrapper':
        init();
        loadHomePage();
        addEventListeners();
        break;
    
    case //'file:///Users/ericbouthiller/Projects/Ari_Site/dist/gallery.html'||
        'https://onholidayeb.github.io/Ari-Site/gallery.html':
        init();
        pushMenuBar();
        loadGallery();
        break;
    
    case //'file:///Users/ericbouthiller/Projects/Ari_Site/dist/about.html' ||
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

//to do
//desktop: add 'back' button to top right 
//update css 
//add menu click down from 'ari sadok'
//portrait
//editorial
//about

//mobile: add ability to scroll back (clickbox);