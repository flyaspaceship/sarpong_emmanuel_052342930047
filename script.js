let firstHead=document.querySelector(".first-nav");
let secondHead=document.querySelector(".nav-wrapper");
let header=document.querySelector(".header");
let arrows=document.querySelectorAll(".firstArrows");
let questions=document.querySelectorAll(".questionaire");
let container=document.querySelector(".welcomingNote");
let secondArrows=document.querySelectorAll(".secondArrows");
let secondContainer=document.querySelector(".customers");
let flip=document.querySelectorAll(".flip");
let body=document.body;
var count=0;
window.addEventListener('scroll', ()=>{
    if(count<window.pageYOffset){
        header.setAttribute('style',' transform:translateY(-55px);transition:all 2s; ');
        // secondHead.setAttribute('style','position:fixed; top:0; left:0;');
        count=window.pageYOffset;
    }else{
        // secondHead.removeAttribute('style','position:fixed; top:0; left:0;');
        header.setAttribute('style','transform:translateY(0px); transition:all 2s;');
        count=window.pageYOffset;
    }

});

// container.addEventListener('wheel', (ev)=>{
//     ev.preventDefault();
//     container.scrollLeft +=ev.deltaY;
// })
arrows.forEach(arrow=>{
    arrow.addEventListener('click', ()=>{
        if (arrow.classList.contains('fa-less-than')){
            container.scrollLeft-=470;
        }else{
            if (arrow.classList.contains('fa-greater-than')){
                container.scrollLeft+=470;
        }
    }
    });
});
// secondContainer.addEventListener('wheel', (ev)=>{
//     ev.preventDefault();
//     secondContainer.scrollLeft +=ev.deltaY;
// })
secondArrows.forEach(arrow=>{
    arrow.addEventListener('click', ()=>{
        if (arrow.classList.contains('fa-less-than')){
            secondContainer.scrollLeft-=450;
        }else{
            if (arrow.classList.contains('fa-greater-than')){
                secondContainer.scrollLeft+=450;
        }
    }
    });
});
const imgObserver= new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.remove('questionaire');
            entry.target.classList.add('show');
        }else{
            entry.target.classList.remove('show');
            entry.target.classList.add('questionaire');
        }
    })
    });
// questions.forEach(img=>imgObserver.observe(img));

const observer= new IntersectionObserver((entries)=>{
    entries.forEach((entry) => {
        if (entry.isIntersecting){
            entry.target.classList.remove('questionaire')
            entry.target.classList.add('show')
        }else{
            entry.target.classList.remove('show')
            entry.target.classList.add('questionaire')
        }
    })
});
// wwedoList.forEach((el) => observer.observe(el));
questions.forEach(img=>observer.observe(img));

let hope=document.querySelector('#hopeful');

hope.addEventListener('scroll',()=>{
    hope.setAttribute('style', 'cursor:pointer; transform: scale(1.2);');
    console.log("I'm working");
});
