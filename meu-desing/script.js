
const openMenu = document.querySelector('.mobile-btn-menu')
const closeMenu = document.querySelector('.close-area')

function toggleOpenMenu(event){
    if(event.type ==='touchstart')event.preventDefault()
    let menuArea = document.querySelector('.mobile-list-general')
    menuArea.classList.remove('close-menu-animation')
    menuArea.classList.add('open-menu-animation')

}

openMenu.addEventListener('click',toggleOpenMenu)

function toggleCloseMenu(event){
    let closeMenuArea = document.querySelector('.mobile-list-general')
    closeMenuArea.classList.remove('open-menu-animation')
    closeMenuArea.classList.add('close-menu-animation')
}

closeMenu.addEventListener('touchstart',toggleCloseMenu)




let totalSlides = document.querySelectorAll('.slide-item').length
let currenteSlide = 0

document.querySelector('.slider-area').style.width = `calc(100% * ${totalSlides})`

console.log(totalSlides)

function goPrev(){
    currenteSlide--;
    if(currenteSlide < 0){
        currenteSlide = totalSlides - 1;
    }
    updateMargin()
}

function goNext(){
    currenteSlide++;
    if(currenteSlide > (totalSlides -1)){
       currenteSlide =0
    }
    updateMargin()
}

function updateMargin(){
    let slideItemWidth = document.querySelector('.slide-item').clientWidth;
    let novaMargin = (currenteSlide * slideItemWidth);
    document.querySelector('.slider-area').style.marginLeft = `-${novaMargin}px`
}
