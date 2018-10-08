(function () {
  const LEFT = document.querySelector("#slider>div>img:first-of-type");
  const RIGHT = document.querySelector("#slider>div>img:last-of-type");
  const BLOCK = document.querySelector("#slider .active").firstElementChild;
  const MAX_WIDTH = BLOCK.childElementCount * parseFloat(getComputedStyle(BLOCK).width);
  const WIDTH = parseFloat(getComputedStyle(BLOCK).width)


  var pos = 0;
  RIGHT.addEventListener("click", function (e) {
    pos = pos - WIDTH <= -MAX_WIDTH ? 0 : pos - WIDTH;
    console.log(pos)
    BLOCK.style.left = pos + "px";
  })

  LEFT.addEventListener("click", function (e) {
    pos = pos + WIDTH > 0 ? -MAX_WIDTH + WIDTH : pos + WIDTH;
    console.log(pos)
    BLOCK.style.left = pos + "px";
  })

})()