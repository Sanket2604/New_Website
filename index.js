new fullpage('#fullpage',{
    autoScrolling:true,
    // scrollHorizontally: true
    anchors: ['intro','tech','proj','contact'],
    navigation:true
})

var mySwiper = new Swiper('.mySwiper',{
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    disableOnInteraction: true,
    coverflowEffect: {
        rotate: 10,
        stretch: 0,
        depth: 200,
        modifier: 1,
        slideShadows: false,
    },
    autoplay: {
        delay: 4000,
        disableOnInteraction: true,
    },
    loop: true
});

$('.mySwiper').on('mouseenter', function(e){
    console.log('stop autoplay');
    mySwiper.stopAutoplay();
})
$('.mySwiper').on('mouseleave', function(e){
    console.log('start autoplay');
    mySwiper.startAutoplay();
})

function toggleSideBar(){
    const menuBtn = document.querySelector('.menu-btn');
    if(menuBtn.classList.contains('open')) {
        menuBtn.classList.remove('open');
    }
    else {        
        menuBtn.classList.add('open');
    }
    document.querySelector('.sidebar').classList.toggle('slide');
    document.querySelector('.backdrop').classList.toggle('back');
}

function sideBarClose(){
    document.querySelector('.sidebar').classList.remove('slide');
    document.querySelector('.menu-btn').classList.remove('open');
    document.querySelector('.backdrop').classList.remove('back');
}