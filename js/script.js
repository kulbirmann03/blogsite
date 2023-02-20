function myFunction() {
    var x = document.getElementById("sub-nav");
    if (x.className === "sub-nav") {
      x.className += " responsive";
    } else {
      x.className = "sub-nav";
    }
  }

 //carousel slideshow code 
var slideIndex = 1;
showSlides(slideIndex);

//next and previous controls

function plusSlides(n){
  showSlides(slideIndex+=n);
}

function currentSlide(n){
  showSlides(slideIndex=n);
}

function showSlides(n){
  var i;
  var slides = $(".carousel-sub");
  if(n>slides.length){
    slideIndex=1;
  }
  if(n<1){
    slideIndex=slides.length;
  }
  var arr = Array.prototype.slice.call( slides, 0 );
  for (i=0;i<arr.length;i++)
  {
    arr[i].style.display="block";
  }
 
  $(arr[slideIndex-1]).addClass('main-data');
  $(arr[slideIndex-2]).removeClass('main-data');
  console.log(slideIndex);
  console.log(arr.length-slideIndex);
  
}

