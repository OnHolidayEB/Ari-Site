
const createDiv = (divClass) => {
    const div = document.createElement('div');
    div.classList.add(`${divClass}`);

    return div;
}

const createMenuLink = (linkText, linkPage) => {
    const link = document.createElement('a');
    link.classList.add('menu-link');
    link.innerHTML = linkText;
    link.href =  `${linkPage}.html`

    return link;

}

const createTitle = (titleText) => {
    const anchor = document.createElement('a');
    anchor.id = 'title-anchor'
    const title = document.createElement('h1');


    title.classList.add('gallery-title');
    title.innerHTML = titleText;


    anchor.appendChild(title);

    return anchor;
}

const pushMenu = () => {
    if(document.body.contains(document.getElementById('about-link'))){
        return;
    }

    else{

        const menuWrapper = document.getElementById('menuWrapper')
        const linkWrapper = createDiv('linkWrapper');
        linkWrapper.id = 'menu-link-wrapper';
        const title = document.getElementById('title-anchor');

      
        
        const editorial = createMenuLink('Editorial', 'editorial');
        const portrait = createMenuLink('Portrait', 'portrait');
        const about = createMenuLink('Contact', 'about');
        about.id = 'about-link'

        linkWrapper.appendChild(editorial);
        linkWrapper.appendChild(portrait);
        linkWrapper.appendChild(about);

        menuWrapper.appendChild(linkWrapper);

        linkWrapper.onanimationend = function(e){
            if(e.animationName == 'fadeIn'){
                title.href = 'index.html'
            }

            else{
                title.href = '#';
            }
        }
        

    }
}

const addEventListeners = () => {
    const title = document.getElementById('title-anchor');
    const menuWrapper = document.getElementById('menuWrapper');

    title.addEventListener('mouseover', pushMenu);
    title.addEventListener('touchstart', pushMenu);
    menuWrapper.addEventListener('mouseleave', rmMenu);

    


}

const rmMenu = () => {
    const linkWrapper = document.getElementById('menu-link-wrapper');
    linkWrapper.addEventListener('animationend', () => {
        linkWrapper.remove();

    })
    linkWrapper.classList.toggle('linkWrapperFadeOut')
    const title = document.getElementById('title-anchor');
    title.href = '';
}


const pushMenuBar = () => {
    const content = document.getElementById('content');
    const menuWrapper = createDiv('menuWrapper');
    menuWrapper.id = "menuWrapper";
    const title = createTitle('ARIEL SADOK');
    

    menuWrapper.appendChild(title);
    content.appendChild(menuWrapper);
    
    /*title.addEventListener('mouseover', pushMenu)
    title.addEventListener('touchstart', pushMenu);
    menuWrapper.addEventListener('mouseleave', rmMenu)*/
    addEventListeners();

}


export default pushMenuBar;