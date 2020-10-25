const card = document.querySelector('.card');
const container = document.querySelector('.container');
const title = document.querySelector('.title');
const shrek = document.querySelector('.shrek img');
const watch = document.querySelector('.watch button');
const description = document.querySelector('.info h3');
const sizes = document.querySelector('.sizes');

container.addEventListener('mousemove', e => {
    let xAxis = (window.innerWidth / 2 - e.pageX) / 25;
    let yAxis = (window.innerHeight / 2 - e.pageY) / 25;

    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
})

container.addEventListener('mouseenter', e => {
    card.style.transition = 'none';
    title.style.transform = 'translateZ(125px)';
    watch.style.transform = 'translateZ(125px)';
    sizes.style.transform = 'translateZ(100px)';

    const angle = e.pageX < window.innerWidth / 2 ? -10 : 10;
    shrek.style.transform = `translateZ(100px) rotateZ(${angle}deg)`;
})

container.addEventListener('mouseleave', e => {
    card.style.transition = 'all 0.5s ease';
    
    card.style.transform = `rotateY(0deg) rotateX(0deg)`;
    title.style.transform = 'translateZ(0)';
    watch.style.transform = 'translateZ(0)';
    sizes.style.transform = 'translateZ(0)';
    shrek.style.transform = 'translateZ(0) rotateZ(0)';
})