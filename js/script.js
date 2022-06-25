const btns = document.querySelectorAll(".btn");
const productCard = document.querySelectorAll(".product__card");
const productAllLink = document.querySelector(".product__link");
const productDetail = document.querySelectorAll(".product__detail-wrapper");
const btnsWrapper = document.querySelector(".select__card-wrapper");
const bth = document.querySelector(".div")

btnsWrapper.addEventListener("click", function(evt){
  const data = evt.target.dataset.filter;

  productCard.forEach((product) => {
    if(product.classList.contains(data)){
        product.style.display = "block"
    } else{
        product.style.display = "none"
    }
  })
})

productAllLink.addEventListener("click", function(){
    productCard.forEach((product) =>{
        product.style.display = "block";
    })
})


// for(i = 0; i < btns.length; i++){

//     btns[i].addEventListener("click", (e) => {
//         e.preventDefault();

//         const filter = e.target.dataset.filter;


//      productCard.forEach((product) => {
//             if(product.classList.contains(filter)){
//                 product.style.display = "block"
//             } else{
//                 product.style.display = "none";
//             }
//         })
//      })
//     }

// productAllLink.addEventListener("click")


