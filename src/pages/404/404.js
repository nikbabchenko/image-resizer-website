import '../../assets/styles/styles.scss';
import './404.scss';


// scale on resize
function fontResize() {
    var resolution = 1440;
    var font = 10;

    var width = window.innerWidth;

    var newFont = font * (width / resolution);
    document.querySelector('html').style.fontSize = `${newFont}px`;
}

document.addEventListener('DOMContentLoaded', () => {
    fontResize();
    window.addEventListener('resize', fontResize);
});
