const card = document.querySelector('.card');
const container = document.querySelector('.container')
//Itens variados
const title = document.querySelector('.title');
const sneaker = document.querySelector('.sneaker img');
const sizes = document.querySelector('.sizes');
const purchase = document.querySelector('.purchase button');
const description = document.querySelector('.info h3 ');
container.addEventListener('mousemove', (event) =>{ //Animação de movimento do cartao
    let xAxis = (window.innerWidth/2 - event.pageX)/25;
    let yAxis = (window.innerHeight/2 - event.pageY)/25;
    card.style.transform = `rotateY(${xAxis}deg) rotateX(${yAxis}deg)`;
});

//Animação interna
container.addEventListener('mouseenter', (event) => {
    card.style.transition = 'all 0.118s ease';
    //Popout efeito
    title.style.transform = 'translateZ(150px)'
    sneaker.style.transform = 'translateZ(150px) rotateZ(-15deg)'
    purchase.style.transform = 'translateZ(150px)'
    description.style.transform = 'translateZ(150px)'
    sizes.style.transform = 'translateZ(150px)'
})
//Animação pra fora
container.addEventListener('mouseleave', (event) => {
    card.style.transition = 'all 0.5s ease';
    card.style.transform = 'rotateY(0deg) rotateX(0deg)';
    //Popout efect
    title.style.transform = 'translateZ(0px)'
    sneaker.style.transform = 'translateZ(0px) rotateZ(0deg)'
    purchase.style.transform = 'translateZ(0px)'
    description.style.transform = 'translateZ(0px)'
    sizes.style.transform = 'translateZ(0px)'
})

