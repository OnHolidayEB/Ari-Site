//create menubar wrapper
//when title is clicked portrait, editorial and about buttons appear
//all buttons should be links to other pages aka about.html


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
    const title = document.createElement('h1');

    anchor.href = 'index.html'

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
        
        const editorial = createMenuLink('Editorial', 'gallery');
        const portrait = createMenuLink('Portrait', 'portrait');
        const about = createMenuLink('About', 'about');
        about.id = 'about-link'

        linkWrapper.appendChild(editorial);
        linkWrapper.appendChild(portrait);
        linkWrapper.appendChild(about);

        menuWrapper.appendChild(linkWrapper);
        

    }
}

const rmMenu = () => {
    const linkWrapper = document.getElementById('menu-link-wrapper');
    linkWrapper.remove();
}


const pushMenuBar = () => {
    const content = document.getElementById('content');
    const menuWrapper = createDiv('menuWrapper');
    menuWrapper.id = "menuWrapper";
    const title = createTitle('ARIEL SADOK');
    
    title.addEventListener('mouseover', pushMenu)
    menuWrapper.addEventListener('mouseleave', rmMenu)

    menuWrapper.appendChild(title);
    content.appendChild(menuWrapper);
}


export default pushMenuBar;