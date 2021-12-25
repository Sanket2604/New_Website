new fullpage('#fullpage',{
    autoScrolling:true,
    scrollHorizontally: true,
    anchors: ['intro','tech','proj','contact'],
    navigation:true,
	slidesNavigation: true,
	slidesNavPosition: 'bottom',
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

function submit(){
    const cname = document.getElementById('n').value
    const email = document.getElementById('e').value
    const text = document.getElementById('t').value

    if( cname !== '' && email !== '' && text!== ''){
        if (/^[a-zA-Z0-9.!#$%&'*+/=?^_`{|}~-]+@[a-zA-Z0-9-]+(?:\.[a-zA-Z0-9-]+)*$/.test(email)){
            console.log("Hello There")
            Email.send({
                Host: "smtp.gmail.com",
                Username : "lastknight2604@gmail.com",
                Password : "pLp,t#5[2Lv:{QY'O6~c`Al}E*ZT7-",
                To : "sanketbanerjee10@gmail.com",
                From : "lastknight2604@gmail.com",
                Subject : "New Message",
                Body : "<b>Name: </b>"+cname+
                        "<br><br><b>Email: </b>"+email+
                        "<br><br><b>Message: </b> <br> "+text
                }).then(function(response){
                    console.log(response)                    
                    document.querySelector('.confir').classList.toggle('active')
                    setTimeout(()=>{
                        document.querySelector('.confir').classList.toggle('active')
                    }, 5000)
            });
        }
        else{
            alert("Please enter a valid email address")
        }
    }
    else{
        if(cname === ''){
            alert("Please Enter Your Name")
        }
        else if(email === ''){
            alert("Please Enter Your Email Id")
        }
        else if(text === ''){
            alert("Please Enter Your Message")
        }
    }
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
