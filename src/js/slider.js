(function () {
  const LEFT = document.querySelector("#slider>div>img:first-of-type");
  const RIGHT = document.querySelector("#slider>div>img:last-of-type");
  const BLOCK = document.querySelector("#slider .active").firstElementChild;
  var max_width = BLOCK.childElementCount * parseFloat(getComputedStyle(BLOCK).width);
  var width = parseFloat(getComputedStyle(BLOCK).width)
  var num = 0;


  var pos = 0;
  RIGHT.addEventListener("click", function (e) {
    pos = pos - width <= -max_width ? 0 : pos - width;
    BLOCK.style.left = pos + "px";
    num = num + 1 > BLOCK.childElementCount - 1 ? 0 : num + 1;
  })

  LEFT.addEventListener("click", function (e) {
    pos = pos + width > 0 ? -max_width + width : pos + width;
    BLOCK.style.left = pos + "px";
    num = num - 1 < 0 ? BLOCK.childElementCount - 1 : num - 1;
  })

  window.onresize = function (e) {
    max_width = BLOCK.childElementCount * parseFloat(getComputedStyle(BLOCK).width);
    width = parseFloat(getComputedStyle(BLOCK).width);
    pos = -(width * num);
    BLOCK.style.left = pos + "px";
  };
})()