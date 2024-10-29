// SCROLL TO RIGHT
// collect elements
let content = document.querySelector(".content")
let btnscrollright = document.querySelector(".btnscrollright")

btnscrollright.addEventListener("click", function(){
    window.scrollBy(100,0)
})

// SCROLLABLE IMAGE GALLERY
// collect left and right buttons, and gallery container
let btnright = document.querySelector(".btnright")
let  btnleft = document.querySelector(".btnleft")
let  gallerycontainer = document.querySelector(".gallerycontainer")

// define one function for scroll left and scroll right
function scrollGallery(scrollpixels){
   gallerycontainer.scroll({
    left:scrollpixels,
    behavior :"smooth"

  })
}

// add event to each button when is clicked
btnright.addEventListener("click", function(){
    scrollGallery(500)
})

btnleft.addEventListener("click", function(){
    scrollGallery(-500)
})

// to top scroll
// collect to icon
let toTop = document.querySelector(".toTop")

// add scroll event to the window (internet browser)
window.addEventListener("scroll", function(){
    let pexelsfromtop = this.window.scrollY 
    // test window.scrollY
    console.log(pexelsfromtop)

    if (pexelsfromtop >300){
        toTop.style.display = "block"
    }    
    else{
        toTop.style.display = "none"
    }


})