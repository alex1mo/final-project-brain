(function () {
  const LEFT = document.querySelector("#slider>div>img:first-of-type");
  const RIGHT = document.querySelector("#slider>div>img:last-of-type");
  const BLOCK = document.querySelector("#slider .active").firstElementChild;
  var max_width = BLOCK.childElementCount * parseFloat(getComputedStyle(BLOCK).width);
  var width = parseFloat(getComputedStyle(BLOCK).width)


  var pos = 0;
  RIGHT.addEventListener("click", function (e) {
    max_width_new = BLOCK.childElementCount * parseFloat(getComputedStyle(BLOCK).width);
    width_new = parseFloat(getComputedStyle(BLOCK).width)
    if (width_new < width || width_new > width) {
      if (pos === 0) {
        pos += width_new - width
      }
      pos = pos - (width_new - width);
      width = width_new;
      max_width = max_width_new
    }
    pos = pos - width <= -max_width ? 0 : pos - width;
    BLOCK.style.left = pos + "px";
    console.log(pos)
  })

  LEFT.addEventListener("click", function (e) {
    max_width_new = BLOCK.childElementCount * parseFloat(getComputedStyle(BLOCK).width);
    width_new = parseFloat(getComputedStyle(BLOCK).width)
    if (width_new < width || width_new > width) {
      if (pos === -(max_width - width)) {
        pos -= width_new - width
      }
      pos = pos - (width_new - width);
      width = width_new;
      max_width = max_width_new
    }
    pos = pos + width > 0 ? -max_width + width : pos + width;
    BLOCK.style.left = pos + "px";
    console.log(pos)

  })

})()