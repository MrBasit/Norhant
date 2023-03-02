const humburger = document.querySelector(".humburger");
const navlist = document.querySelector("header .container .content nav ul");
const links = document.querySelectorAll("header .container .content nav ul li a");
const close = document.querySelector(".cross");

humburger.addEventListener("click", function(e){
    e.preventDefault();
    e.stopPropagation();
    navlist.classList.add('active')
}
)
links.forEach(link => {
    link.addEventListener('click', function(e){
        navlist.classList.remove("active")
    })

})
close.addEventListener('click', function(e){
    e.preventDefault();
    e.stopPropagation();
    navlist.classList.remove("active")
})