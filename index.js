new fullpage('#fullpage',{
    autoScrolling:true,
    // scrollHorizontally: true
    anchors: ['home','tech','proj','learn','contact'],
    navigation:true
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