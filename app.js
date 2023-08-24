const nextOne = document.querySelector('.one .next');
const prevTwo = document.querySelector('.two .prev');
const firstPerson = document.querySelector('.one');
const secondPerson = document.querySelector('.two');

function move() {
    firstPerson.classList.toggle('active');
    secondPerson.classList.toggle('active');
}

nextOne.addEventListener('click', ()=>{
    move();
})

prevTwo.addEventListener('click', ()=>{
    move();
})

window.addEventListener('keydown',(e)=>{
    if((e.key === 'ArrowLeft' || e.key === 'a') && secondPerson.classList.contains('active')){
        move();
    }
    if((e.key === 'ArrowRight' || e.key === 'd') && firstPerson.classList.contains('active')){
        move();
    }
})
