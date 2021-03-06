function scrollFunction(key) {
    let element = document.documentElement;

    switch(key) {
        case 'home': element.scrollTop = 0; break;
        case 'aboutMe': element.scrollTop = 136; break;
        case 'skills': element.scrollTop = 654; break;
        case 'codeExample': element.scrollTop = 773; break;
        case 'workExperience': element.scrollTop = 864; break;
    }
}