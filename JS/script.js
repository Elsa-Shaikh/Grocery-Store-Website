let searchForm = document.querySelector('.search-form');
document.querySelector('#search-btn').onclick = () =>{
    searchForm.classList.toggle('active');

    menu.classList.remove('active');
    login.classList.remove('active');
    shopping_cart.classList.remove('active');
    signup.classList.remove('active');

}
let shopping_cart = document.querySelector('.shopping-cart');
document.querySelector('#cart-btn').onclick = () =>{
    shopping_cart.classList.toggle('active');
    
    menu.classList.remove('active');
    login.classList.remove('active');
    searchForm.classList.remove('active');
    signup.classList.remove('active');

}

let login = document.querySelector('.login-form');
document.querySelector('#login-btn').onclick = () =>{
    login.classList.toggle('active');
    
    menu.classList.remove('active');
    shopping_cart.classList.remove('active');
    searchForm.classList.remove('active');
    signup.classList.remove('active');

}

let signup = document.querySelector('.create-form');
document.querySelector('.account').onclick = () =>{
    signup.classList.toggle('active');

    menu.classList.remove('active');
    shopping_cart.classList.remove('active');
    searchForm.classList.remove('active');
    login.classList.remove('active');
}



let menu = document.querySelector('.navbar');
document.querySelector('#menu-btn').onclick = () =>{
    menu.classList.toggle('active');
   
    login.classList.remove('active');
    shopping_cart.classList.remove('active');
    searchForm.classList.remove('active');
    signup.classList.remove('active');
}

window.onscroll = () =>{
    menu.classList.remove('active');       
    login.classList.remove('active');
    shopping_cart.classList.remove('active');
    searchForm.classList.remove('active');
    signup.classList.remove('active');
    if(window.scrollY > 60){
      document.querySelector('#scroll-top').classList.add('active');
  }
  else{
      document.querySelector('#scroll-top').classList.remove('active');
  }

  }


var swiper = new Swiper(".product-slider", {
    loop :true,
    spaceBetween: 20,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });


var swiper = new Swiper(".review-slider", {
    loop :true,
    spaceBetween: 20,
    autoplay:{
        delay:2500,
        disableOnInteraction:false,
    },
    breakpoints: {
      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1020: {
        slidesPerView: 3,
      },
    },
  });
  

function loader(){
    document.querySelector('.loader-container').classList.add('fade-out');
}
function fadeOut(){
    setInterval(loader,4000);
}
window.onload = fadeOut();

