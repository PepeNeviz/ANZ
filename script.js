document.addEventListener('DOMContentLoaded', () => {
    const navLinks = document.querySelectorAll('a');
    navLinks.forEach(link => {
        link.addEventListener('click', event => {
            event.preventDefault();
            document.querySelector(link.getAttribute('href')).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });
});

function showSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'flex'
}

function hideSidebar(){
    const sidebar = document.querySelector('.sidebar')
    sidebar.style.display = 'none'
}

var tl = gsap.timeline()

tl.from(".home-content h1",{
    x:-20,
    opacity:0,
    duration:1,
    delay:0.1
})

tl.from(".home-content p",{
    x:-20,
    opacity:0,
    duration:1,
    delay:0.1
})

var tl2 = gsap.timeline({
    scrollTrigger:{
        trigger:"#about",
        scroller:"body",
        markers:true,
        start:"top 50%",
        end:"top 0",
        scrub:2,
    }
})

tl2.from(".about-content",{
    y:30,
    opacity:0
})

window.addEventListener('scroll', reveal);

function reveal(){
    var reveals = document.querySelectorAll('.reveal');

    for(var i = 0; i < reveals.length; i++){

        var windowheight = window.innerHeight;
        var revealtop = reveals[i].getBoundingClientRect().top;
        var revealpoint = 150;

        if(revealtop < windowheight - revealpoint){
            reveals[i].classList.add('active');
        }
        else{
            reveals[i].classList.remove('active')
        }
    }
}

function updateInfo(name, description1, description2, description3, description10, imgSrc1, description5, imgSrc2, description7, description8, description9) {
    document.getElementById('opening-text').style.display = "none";
    let realName = document.getElementById('real-name');
    realName.textContent = name;
    realName.style.display = "inline";

    document.getElementById('description1').textContent = description1;
    document.getElementById('description2').textContent = description2;
    document.getElementById('description3').textContent = description3;

    document.getElementById('description5').innerHTML = description10; 

    document.getElementById('description10').textContent = description5;
    document.getElementById('description7').textContent = description7;
    document.getElementById('description8').textContent = description8;
    document.getElementById('description9').textContent = description9;

    let img1 = document.getElementById('description4');
    if (imgSrc1) {
        img1.src = imgSrc1;
        img1.style.display = "block";
    } else {
        img1.style.display = "none";
    }

    let img2 = document.getElementById('description6');
    if (imgSrc2) {
        img2.src = imgSrc2;
        img2.style.display = "block";
    } else {
        img2.style.display = "none";
    }
}
