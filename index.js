AOS.init();

new fullpage('#fullpage',{
    autoScrolling:true,
    // scrollHorizontally: true
    anchors: ['intro','tech','proj','contact'],
    navigation:true,
    onLeave: function(origin, destination, direction){
        if(destination.index===1){
            document.querySelector('.s2').classList.add('add_anim')
            document.querySelector('.s3').classList.remove('add_anim')
            document.querySelector('.s4').classList.remove('add_anim')
        }
        if(destination.index===2){
            document.querySelector('.s3').classList.add('add_anim')
            document.querySelector('.s2').classList.remove('add_anim')
            document.querySelector('.s4').classList.remove('add_anim')
        }
        if(destination.index===3){
            document.querySelector('.s4').classList.add('add_anim')
            document.querySelector('.s2').classList.remove('add_anim')
            document.querySelector('.s3').classList.remove('add_anim')
        }
    }
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
        delay: 5000,
        disableOnInteraction: true,
    },
    loop: true,
});

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




let t1 = gsap.timeline({scrollTrigger:{
    trigger:".s1",
    start:"top 50%",
}})
.from('.h1', { x: '-50%',  opacity: 0, ease: 'power2'})
.from('.img1', { x: '+50%', y: '-50%', opacity: 0, ease: 'power2'})
.from('.l1', { x: '-50%', y: '-50%', opacity: 0, ease: 'power2'})
.from('.l2', { x: '-50%', y: '-50%', opacity: 0, ease: 'power2'})
.from('.l3', { x: '-50%', y: '-50%', opacity: 0, ease: 'power2'})
.from('.download_cont', { y: '+50%', opacity: 0, ease: 'power2'})

// let t2 = gsap.timeline({scrollTrigger:{
//     trigger:".s2",
//     start:"top 50%",
// }})
// .from('.h2', { x: '-50%', y: '-50%', opacity: 0, ease: 'power2'})
// .from('.lang', { y: '10px', opacity: 0, ease: 'power2'})