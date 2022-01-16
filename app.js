const currentImg = document.querySelector(".current-img");
const imgs = document.querySelectorAll(".all-imgs img");

imgs.forEach(function (img) {
  img.addEventListener("click", function (e) {
    // console.log(e.target.src);
    currentImg.src = e.target.src;

    currentImg.classList.add("animate-imgs");
    setTimeout(() => {
      currentImg.classList.remove("animate-imgs");
    }, 400);
  });
});
