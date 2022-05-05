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

gsap.timeline({scrollTrigger:{
    trigger:".s1",
    start:"top 50%",
}})
.from('.h1', { x: '-50%',  opacity: 0, ease: 'power2'})
.from('.img1', { x: '+50%', y: '-50%', opacity: 0, ease: 'power2'})
.from('.l1', { x: '-50%', y: '-50%', opacity: 0, ease: 'power2'})
.from('.l2', { x: '-50%', y: '-50%', opacity: 0, ease: 'power2'})
.from('.l3', { x: '-50%', y: '-50%', opacity: 0, ease: 'power2'})
.from('.download_cont', { y: '+50%', opacity: 0, ease: 'power2'})

gsap.timeline({scrollTrigger:{
    trigger:".s2",
    start:"top 50%",
}})
.from('.h2', { y: '-50%',  opacity: 0, ease: 'power2'})
.from('.lang', { duration: 0.25, y: '50px',opacity: 0, ease: 'power2', stagger: 0.1})

gsap.timeline({scrollTrigger:{
    trigger:".s3",
    start:"top 50%",
}})
.from('.h3', { y: '-50%',  opacity: 0, ease: 'power2'})
.from('.project_card', { duration: 0.25, y: '50px',opacity: 0, ease: 'power2', stagger: 0.1})

gsap.timeline({scrollTrigger:{
    trigger:".s4",
    start:"top 50%",
}})
.from('.h4', { y: '-50%',  opacity: 0, ease: 'power2'})
.from('.form', { duration: 0.25, x: '-50px',opacity: 0, ease: 'power2', stagger: 0.1})
.from('.t', { duration: 0.25, x: '-50px',opacity: 0, ease: 'power2'})
.from('.msg_btn', { duration: 0.25, x: '-50px',opacity: 0, ease: 'power2'})
.from('.m', { duration: 0.25, y: '50px',opacity: 0, ease: 'power2', stagger: 0.1})