const nav = document.querySelector('#nav');
const navBtn = document.querySelector('#nav-btn');
const navBtnImg = document.querySelector('#nav-btn-img');

navBtn.onclick = () => {
    if (nav.classList.toggle('open')) {
        navBtnImg.src = "../images/sections/icons/nav-close.svg";
    } 
    else {
        navBtnImg.src = '../images/sections/icons/nav-open.svg';
    }
}

AOS.init();
