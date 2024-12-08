
/* 
==========
workshops
==========
 */

const carousel = document.querySelector('.carousel-container');
const quantity = document.querySelectorAll('.items').length;
const items = document.querySelectorAll('.items')
const next = document.querySelector('.next');
const prev = document.querySelector('.prev');

const indexing = (i) => {
    let idx= i%quantity;
    if(idx<0){
        idx = idx*-1  
    }else if (idx>0){
        idx = 11-idx  
    }else{
        idx = 0;
    }
    return idx;
}

const currentSlide = (items, idx) => {
    items.forEach((link) => {
        link.classList.remove('current');
    })
    items[idx].classList.add('current')
}

let i =0;   

next.addEventListener('click', () => {
    carousel.style.rotate = `${-(++i)*(360/quantity)}deg`;

    let index = indexing(i)
    currentSlide(items, index)


});

prev.addEventListener('click', () => {
    carousel.style.rotate = `${-(--i)*(360/quantity)}deg`

    let index = indexing(i)
    currentSlide(items, index)

     
})




