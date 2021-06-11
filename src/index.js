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

    case 'arielsadok.com' :
        init();
        loadHomePage();
        addEventListeners();
        break;

    case 'arielsadok.com/index.html':
        init();
        loadHomePage();
        addEventListeners();
        break;

    case 'arielsadok.com/index.html#thumbWrapper':
            init();
            loadHomePage();
            addEventListeners();
            break;
    
    case 'arielsadok.com/portrait.html':
            init();
            pushMenuBar();
            loadPortraitGallery();
            break;
    
    case 'arielsadok.com/editorial.html':
                init();
                pushMenuBar();
                loadEditorialGallery();
                break;
            
    case 'arielsadok.com/about.html':
                init();
                pushMenuBar();
                loadAbout();
                break;
    
    case 'https://onholidayeb.github.io/Ari-Site/':
        init();
        loadHomePage();
        addEventListeners();
        break;

    case 'https://onholidayeb.github.io/Ari-Site/index.html': 
        init();
        loadHomePage();
        addEventListeners();
        break;

    case 'https://onholidayeb.github.io/Ari-Site/portrait.html':
        init();
        pushMenuBar();
        loadPortraitGallery();
        break;
    
    case 'https://onholidayeb.github.io/Ari-Site/index.html#thumbWrapper':
        init();
        loadHomePage();
        addEventListeners();
        break;
    
    case 'https://onholidayeb.github.io/Ari-Site/editorial.html':
        init();
        pushMenuBar();
        loadEditorialGallery();
        break;
    
    case 'https://onholidayeb.github.io/Ari-Site/about.html':
        init();
        pushMenuBar();
        loadAbout();
        break;
        
   /* case 'file:///Users/ericbouthiller/Projects/Ari_Site/dist/index.html':
        init();
        loadHomePage();
        addEventListeners();
        break;
 
    case 'file:///Users/ericbouthiller/Projects/Ari_Site/dist/portrait.html':
            
        init();
        pushMenuBar();
        loadPortraitGallery();
        break;
     
    case 'file:///Users/ericbouthiller/Projects/Ari_Site/dist/index.html#thumbWrapper':
              
        init();
        loadHomePage();
        addEventListeners();
        break;
     
    case 'file:///Users/ericbouthiller/Projects/Ari_Site/dist/editorial.html':
            
        init();
        pushMenuBar();
        loadEditorialGallery();
        break;
     
    case 'file:///Users/ericbouthiller/Projects/Ari_Site/dist/about.html':
         init();
         pushMenuBar();
         loadAbout();
         break;
*/
        
}

function init(){
    const content = document.getElementById('content');
    const div = content.querySelectorAll('div')

    div.forEach(e => e.remove());

}

