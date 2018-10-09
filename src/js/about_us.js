const DIV = document.querySelectorAll("#about_us .active");
// document.firstElementChild
for (var i = 0; i < DIV.length; i++) {

  DIV[i].addEventListener("mouseover", function (e) {
    this.firstElementChild.style.top = "-10px";
    this.firstElementChild.style.left = "-10px";
    this.firstElementChild.firstElementChild.style.zIndex = "1";
    this.firstElementChild.lastElementChild.style.opacity = "0.5";
  })

  DIV[i].addEventListener("mouseout", function (e) {
    this.firstElementChild.style.top = "0";
    this.firstElementChild.style.left = "0";
    this.firstElementChild.firstElementChild.style.zIndex = "0";
    this.firstElementChild.lastElementChild.style.opacity = "1";
  })
}