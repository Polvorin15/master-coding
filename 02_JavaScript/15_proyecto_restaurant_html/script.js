

const navToggler = document.querySelector(".nav-toggler");
navToggler.addEventListener("click", toggleNav);

function toggleNav(){
    navToggler.classList.toggle(".active");
    document.querySelector(".nav").classList.toggle("open");
}

document.addEventListener("click", function(e){
    if(e.target.closest(".nav-item")) {
        toggleNav();
    }
});

window.addEventListener("scroll", function(){
    if(this.pageYOffset > 60){
        document.querySelector(".header").classList.add("sticky");

    }
    else{
        document.querySelector(".header").classList.remove("sticky");
    }
})

const menutabs = document.querySelector(".menu-tabs");
menutabs.addEventListener("click",function(e){
  if(e.target.classList.contains("menu-tab-item") && !e.target.classlist.contains("active")){
    const target = e.target.getattribute("data-target");
    console.log(target);
    menutabs.querySelector("active").classlist.remove("active");
    e.target.classlist.add("active");
    const menusection = document.querySelector(".menu-section");
    menuSection.queryselector(".menu-tab-content.active").classlist.remove("active");
    menusection.querySelector(target).classlist.add("active");
  }
});
