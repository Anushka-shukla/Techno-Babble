// nav scroll
const links = document.querySelectorAll(".page-header ul a");

for (const link of links) {
  link.addEventListener("click", clickHandler);
}

function clickHandler(e) {
  e.preventDefault();
  const href = this.getAttribute("href");
  const offsetTop = document.querySelector(href).offsetTop;

  scroll({
    top: offsetTop,
    behavior: "smooth"
  });
}


// $(document).ready(function(){ 
//     $(window).scroll(function(){ 
//         if ($(this).scrollTop() > 100) { 
//             $('#scroll').fadeIn(); 
//         } else { 
//             $('#scroll').fadeOut(); 
//         } 
//     }); 
//     $('#scroll').click(function(){ 
//         $("html, body").animate({ scrollTop: 0 }, 600); 
//         return false; 
//     }); 
// });