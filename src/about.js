
const createDiv = (divClass) => {
    const div = document.createElement('div');
    div.classList.add(`${divClass}`);

    return div;
}



const loadAbout = () => {
    const content = document.getElementById('content');
    
    const aboutText = createDiv('aboutText');
    
    aboutText.innerHTML = "Fashion and portrait photographer based in New York City. <br/a> For inquiries email Ariel.Sadok@gmail.com"

    content.appendChild(aboutText);
}


export default loadAbout;