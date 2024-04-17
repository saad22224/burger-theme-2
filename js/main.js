  let hamp = document.querySelector(".hamp")
  let nav =  document.getElementById("nav")
  let moon =  document.getElementById("moon")
  let close =  document.getElementById("close")
  hamp.addEventListener("click" , (e)=>{
  nav.classList.remove("hidden")
  hamp.classList.add("hidden")
  moon.classList.add("hidden")
  })

  close.addEventListener("click" , ()=>{
    nav.classList.add("hidden")
    hamp.classList.remove("hidden")
  moon.classList.remove("hidden")
  })


  
let links = document.querySelectorAll('a[href^="#"]');

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let target = document.querySelector(this.getAttribute('href'));
        if (target && window.innerWidth <= 768) {
          nav.classList.add("hidden")
          hamp.classList.remove("hidden")
          moon.classList.remove("hidden")
            let targetPosition = target.offsetTop;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});

links.forEach(link => {
    link.addEventListener('click', function(e) {
        e.preventDefault();

        let target = document.querySelector(this.getAttribute('href'));
        if (target && window.innerWidth >= 769) {
            let targetPosition = target.offsetTop;
            window.scrollTo({
                top: targetPosition,
                behavior: 'smooth'
            });
        }
    });
});


// const taps = document.querySelectorAll(".taps li");

// taps.forEach((e) => {
//    e.addEventListener("click", function () {
//        // إزالة العنصر النشط من العناصر الأخرى
//        taps.forEach((item) => {
//            if (item !== e && item.classList.contains("active")) {
//                item.classList.remove("active");
//            }
//        });

//        // تبديل الحالة active للعنصر الحالي
//        e.classList.toggle("active");
//    });
// });



const taps = document.querySelectorAll(".taps li");  // nested foreach
  const all = document.querySelectorAll(".item-wrap")
  const food = document.querySelectorAll(".food")
  const snack = document.querySelectorAll(".snack")
  const beverage = document.querySelectorAll(".beverage")
  
taps.forEach(e => {
    e.addEventListener("click" , () =>{
        taps.forEach(e =>{
            e.classList.remove("active")
        })
        e.classList.add("active")




        const tabval = e.getAttribute("data-taps")

         all.forEach ( (e) =>{
            e.style.display = 'none'
         })

        if (tabval == "all") {
            all.forEach ( (e) =>{
      e.style.display = 'block'
             })
        }
        if (tabval == "food") {
            food.forEach ( (e) =>{
      e.style.display = 'block'
             })
        }
        if (tabval == "snack") {
            snack.forEach ( (e) =>{
      e.style.display = 'block'
             })
        }
        if (tabval == "Beverage") {
            beverage.forEach ( (e) =>{
      e.style.display = 'block'
             })
        }
        
    })
})


// swiper
const swiper = new Swiper('.swiper', {
    speed: 400,
    spaceBetween: 0,
    autoplay: {
        delay: 3000,
        disableOnInteraction:false,
      },
        // Responsive breakpoints
  breakpoints: {
    // when window width is >= 640px
    640: {
      slidesPerView: 1,
    },
    // when window width is >= 768px
   768: {
      slidesPerView: 2,
      spaceBetween: 10
    },
    // when window width is >= 640px
    1024: {
      slidesPerView: 3,
      spaceBetween: 10
    }
  },
    // Optional parameters
    direction: 'horizontal',
    loop: true,
    // If we need pagination
    pagination: {
      el: '.swiper-pagination',
    clickable:true,
    },
    // grabCursor:true,
})

// const subBtn = document.querySelector(".sub")
// subBtn.addEventListener("click" , (e)=>{
//    e.preventDefault()
// })

const scrollbtn = document.querySelector(".kolo")
window.addEventListener("scroll" , ()=>{
  if (scrollY >= 1500) {
   scrollbtn.classList.remove("hidden")
   scrollbtn.classList.add("inline-block")
  }
  else{
    scrollbtn.classList.add("hidden")
    scrollbtn.classList.remove("inline-block")
    
  }
})

scrollbtn.onclick = function () {
window.scrollTo({
  top:0,
  left:0,
  behavior:"smooth"
})
}


// const scrollheader = document.querySelector("#header")
// console.log(scrollheader)
// window.addEventListener("scroll" , ()=>{
//   if (scrollY >= 50) {
//    scrollheader.classList.add("md:border-b","md:border-yellow-300")
//   }
//   else{
//     scrollheader.classList.remove("md:border-b","md:border-yellow-300")

    
//   }
// })



// const body = document.body
// const header = document.getElementById("header")
//  const review = document.getElementById('review')




// const darkmode = function () {
//   body.classList.add("dark")
//   header.classList.add("dark")
//   review.classList.add("dark")
//   moon.classList.replace("ri-moon-line","ri-sun-line")
//   localStorage.setItem("mode" , "dark")
// }

// const lightmode = function () {
//   body.classList.remove("dark")
//   header.classList.remove("dark")
//   review.classList.remove("dark")
//   moon.classList.replace("ri-sun-line","ri-moon-line")
//   localStorage.setItem("mode" , "light")
// }



// if  (localStorage.getItem("mode") === "dark") {
//     darkmode()
// }else{
//   lightmode()
// }



// moon.addEventListener("click" , ()=>{
//   if (localStorage.getItem("mode") == "light") {
//     darkmode()
//   }else{
//     lightmode()
//   }
// })



const body = document.body
const header = document.getElementById("header")
 const review = document.getElementById('review')


 if (localStorage.getItem("mode") === "dark") {
  body.classList.add("dark")
 }


 moon.addEventListener("click" , function () {
    if (localStorage.getItem("mode") === "dark") {
      body.classList.remove("dark")
      header.classList.remove("dark")
      review.classList.remove("dark")
  this.classList.replace("ri-sun-line" , "ri-moon-line")
  localStorage.setItem("mode" , "light")
    }
    else{
      body.classList.add("dark")
      header.classList.add("dark")
      review.classList.add("dark")
  this.classList.replace("ri-moon-line" , "ri-sun-line")
  localStorage.setItem("mode" , "dark")
    }
 })



 document.addEventListener("DOMContentLoaded", function() {
  
  setTimeout(function() {
      var overlay = document.getElementById("overlay");
      console.log(overlay)
      overlay.style.display = "none";
  }, 3000); 
});
