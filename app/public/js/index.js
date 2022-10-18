const slidesContainer = document.getElementById("slides-container");
const slide = document.querySelector(".slide");
const prevButton = document.getElementById("slide-arrow-prev");
const nextButton = document.getElementById("slide-arrow-next");
const bannerLi = document.querySelectorAll("li.slide")

let i = 0;
 
nextButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
  i++;
  if (i == bannerLi.length){
    slidesContainer.scrollLeft -= (slideWidth * bannerLi.length);
    i = 0;
  }
});
 
prevButton.addEventListener("click", () => {
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft -= slideWidth;
  i--;
  if(i<0){
    i=0;
  }
});


setInterval(function(){
  const slideWidth = slide.clientWidth;
  slidesContainer.scrollLeft += slideWidth;
  i++;
  if (i == bannerLi.length){
    slidesContainer.scrollLeft -= (slideWidth * bannerLi.length);
    i = 0;
  }
},1000 * 7)