let minus = document.querySelector('.minus');
let plus = document.querySelector('.plus');
let amt = document.querySelector('.amt');
let big_img = document.querySelector('.big_img');
let images = document.querySelectorAll('.img');
let addToCartBtn = document.querySelector('.addBtn');
let number = document.querySelector('.number');
let total = document.querySelector('.total');
let cart_content = document.querySelector('.cart_content');
let items = document.querySelector('.items');
let close = document.querySelector('.close');
let empty = document.querySelector('.empty');
let lightbox = document.querySelector('.lightbox');
let deleteIcon = document.querySelector('.delete');
let checkout = document.querySelector('.checkout');
let scroll = document.querySelector('.scroll');
let next = document.querySelector('.next');
let previous = document.querySelector('.previous');
let menu = document.querySelector('ul');
let bars = document.querySelector('.bars');

bars.addEventListener('click',()=>{
    bars.classList.toggle('bar');
    menu.classList.toggle('display');
})


let Allimages = [
    "mat/images/image-product-1-thumbnail.jpg",
    "mat/images/image-product-2-thumbnail.jpg",
    "mat/images/image-product-3-thumbnail.jpg",
    "mat/images/image-product-4-thumbnail.jpg"
];

let i = 0;



next.addEventListener('click',()=>nextImage())
previous.addEventListener('click',()=>previousImage())


big_img.addEventListener('click',()=>{
    lightbox.classList.add('displayIt');
})

close.addEventListener('click',()=>{
    lightbox.classList.remove('displayIt');
})

deleteIcon.addEventListener('click',()=>{
    items.classList.remove('remove');
    checkout.style.display='none';
    empty.style.display='flex';
    cart_content.textContent = 0;
    cart_content.style.display='none';
    amt.textContent = 0;
})

minus.addEventListener('click',()=>subtract(amt));
plus.addEventListener('click',()=> add(amt));

Array.from(images).forEach(img=>{
    img.addEventListener('click',(e)=>{
        let srcs = e.target.getAttribute('src');
        big_img.setAttribute('src',srcs);
        e.target.classList.toggle('target');
    });
});


addToCartBtn.addEventListener('click',()=>{
    let value = amt.textContent;
    cart_content.textContent = value;
    number.textContent = value;
    total.textContent = ` = $${125*Number(value)}`;

    if (Number(value) != 0) {
        cart_content.style.display='grid';
        items.classList.add('remove');
        empty.style.display='none';
        checkout.style.display='block';
    }else{
        cart_content.style.display='none';
        items.classList.remove('remove');
        empty.style.display='flex';
        checkout.style.display='none';
    }
})


function add(value){
    let val =  Number(value.textContent);
    value.textContent = val+1;

}


function subtract(value){
    let val =  Number(value.textContent);
   
    if (val == 0) {
        value.textContent= 0;
    }else{
        value.textContent = val-1;
    }
}


function nextImage(){
    if(i>=Allimages.length-1){
        return false;
    }

    i++;
    scroll.setAttribute('src',Allimages[i]);
}

function previousImage(){
    if (i<=0) {
        return false;
    }
    i--;
    scroll.setAttribute('src',Allimages[i])
}