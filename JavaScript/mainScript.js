function changeBg(){
    var navbar=document.getElementById('navbar-example2');
    var scrollValue=window.scrollY;
    if(scrollValue<150){
        navbar.classList.remove('bgColor');
    } else {
        navbar.classList.add('bgColor');
    }
    if(scrollValue<750){
        navbar.classList.remove('bgColor1');
    } else {
        navbar.classList.add('bgColor1');
    }
    console.log(scrollValue);
    
}

window.addEventListener('scroll',changeBg);

// preloader
var loader=document.getElementById("preloader");
window.addEventListener("load",function(){
    loader.style.display="none";
})

/************************************************************************************************ */
function isElementInViewport(elem) {
    var rect = elem.getBoundingClientRect();
    return (
      rect.top >= 0 &&
      rect.left >= 0 &&
      rect.bottom <= (window.innerHeight || document.documentElement.clientHeight) &&
      rect.right <= (window.innerWidth || document.documentElement.clientWidth)
    );
  }
  
  function handleScrollAnimation() {
    var progressBars = document.querySelectorAll('.radial-bars .radial-bar .progress-bar');
    progressBars.forEach(function (progressBar) {
      if (isElementInViewport(progressBar)) {
        progressBar.classList.add('animatethis');
        console.log("Animation added to element");
      }
    });
  }
  
  // Attach the scroll event listener to handle animation on scroll
  window.addEventListener('scroll', handleScrollAnimation);
  
  // Initial check in case the element is already in view on page load
  window.addEventListener('load', handleScrollAnimation);


/****************************************************************************************************************** */
function handleScrollAnimationOne() {
    var progressBars = document.querySelectorAll('.radial-bars .radial-bar .path');
    var num = 1;
    
    progressBars.forEach(function (progressBar) {
      if (isElementInViewport(progressBar)) {
        progressBar.classList.add('path-' + num);  // Adding class with a prefix
        console.log("Done for path-" + num);
    //   } else {
    //     progressBar.classList.remove('path-' + num);  // Remove the class if not in viewport
      }
      num = num + 1;
    });
  }
  
  
  // Attach the scroll event listener to handle animation on scroll
  window.addEventListener('scroll', handleScrollAnimationOne);
  
  // Initial check in case the element is already in view on page load
  window.addEventListener('load', handleScrollAnimationOne);

  // <!--------------------- Done-------------------------- -->
