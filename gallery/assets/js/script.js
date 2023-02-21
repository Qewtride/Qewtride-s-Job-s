const sliderMain = new Swiper ('.slider-main', {
    freemode:true,
    centeredSlides:true,
    slidesPerView:3,
    mousewheel:true,
    parallax:true,
    breakpoints:{
        0:{
            slidesPerView:2.5,
            spaceBetween:20,
        },
        680:{
            slidesPerView:3.5,
            spaceBetween:60, 
        }
    }
})


const sliderBg = new Swiper ('.slider-bg', {
    freemode:true,
    centeredSlides:true,
    slidesPerView:3,
    mousewheel:true,
    parallax:true,
    spaceBetween:60,
})




sliderMain.controller.control = sliderBg



document.querySelectorAll('.slider-item').forEach(item =>{
    item.addEventListener('click', event=>{
        item.classList.toggle('opened')
    })
})



let desc = document.querySelector('.description')
sliderMain.on('slideChange', e =>{
sliderMain.activeIndex > 0 ? desc.classList.add('hidden'):desc.classList.remove('hidden')
})