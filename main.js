const menuBtn = document.querySelector('.menu-btn i');
const navbar = document.querySelector('.navbar');
const nextBtn = document.querySelector('.next-button i');
const previousBtn = document.querySelector('.previous-button i');
let shoeImg = document.querySelectorAll('.shoeImg');
const plus = document.querySelector('.plus');
const minus = document.querySelector('.minus');
let int = document.querySelector('.digit');
const addToCart = document.querySelector('.add-to-cart');
const notification = document.querySelector('.notification');
const orderSummary = document.querySelector('.item-wrapper');
const quantity = document.querySelector('.quantity');
const totalPrice = document.querySelector('.total-price');
const shoppingCart = document.querySelector('.shoppingCart');
const itemComponent = document.querySelector('.item-component');
const img = document.querySelector('.shoe-img-wrapper');
let idx = 0;
let integer = 0;

menuBtn.addEventListener('click', () => {
    menuBtn.classList.toggle('fa-times');
    navbar.classList.toggle('active');
})

nextBtn.addEventListener('click', () => {
    console.log("clicked!");
    idx++;

    if(idx > shoeImg.length-1) {
        idx = 0;
    }

    if(window.innerWidth>=900) {
        console.log("inner width clicked!");
        img.style.transform = `translateX(${-idx * 575}px)`;
    }else {  
        img.style.transform = `translateX(${-idx * 300}px)`;
    }

});
previousBtn.addEventListener('click', () => {
    console.log("clicked!");
    idx--;

    if(idx > shoeImg.length-1) {
        idx = 0;
    }
    if(idx < 0) {
        idx = shoeImg.length -1;
    }

    if(window.innerWidth >= 900) {
        console.log("inner width clicked!");
        img.style.transform = `translateX(${-idx * 575}px)`;
    }else {
        img.style.transform = `translateX(${-idx * 300}px)`;
    }

})



plus.addEventListener('click', () => {
    integer +=1;
    int.innerHTML = integer;
    addToCart.addEventListener('click', () => {
        notification.innerText = integer;
        notification.classList.add('active');
       
        shoppingCart.addEventListener('click', () => {
            if(notification.classList.contains('active')) {
                orderSummary.classList.toggle('active');
                quantity.innerText = integer;
                totalPrice.innerText = '$' + integer * 125.00;    
            }
        })

        if (int.innerHTML === 0) {
            notification.classList.remove('active');
        }
    })


       
   
})

minus.addEventListener('click', () => {
    if(integer < 0){
        int.innerHTML = 0;
    } else {
        integer -= 1;
        let storedInt = int.innerHTML = integer + 1;
        addToCart.addEventListener('click', () => {
            notification.classList.add('active');
            notification.innerText = storedInt;
            if (storedInt === 0) {
                notification.classList.remove('active');
            }
        })
    }
})

// addToCart.addEventListener('click', () => {
//     notification.classList.toggle('active');
//     if (int.innerHTML === 0) {
//         notification.classList.remove('active');
//     }
// })



