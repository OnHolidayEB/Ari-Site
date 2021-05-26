
const createDiv = (divClass) => {
    const div = document.createElement('div');
    div.classList.add(`${divClass}`);

    return div;
}



const loadAbout = () => {
    const content = document.getElementById('content');
    //const title = createTitle('ARIEL SADOK');
    
    const aboutText = createDiv('aboutText');
    
    aboutText.innerHTML = "Fashion and Portrait photographer based in New York City. <br/a> For inquiries Email Ariel.Sadok@gmail.com"
    
    
    //content.appendChild(title);
    content.appendChild(aboutText);
}


export default loadAbout;