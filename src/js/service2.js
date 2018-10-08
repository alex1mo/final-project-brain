(function () {
  const HEAD_ALL = document.querySelectorAll("#service2 .headService2");
  const ARROW = document.querySelectorAll("#service2 .headService2 [src*=ARROW]")

  for (var i = 0; i < HEAD_ALL.length; i++) {
    if (i === 0) {
      HEAD_ALL[0].open = true;
    } else {
      HEAD_ALL[i].open = false;
    }
    HEAD_ALL[i].addEventListener("click", function (e) {
      if (!this.open) {
        for (var i = 0; i < HEAD_ALL.length; i++) {
          if (HEAD_ALL[i].open) {
            HEAD_ALL[i].open = false;
            HEAD_ALL[i].nextElementSibling.style.padding = "0 25px";
            HEAD_ALL[i].nextElementSibling.style.height = "0px";
            ARROW[i].style.transform = "rotate(180deg)";
            break;
          }
        }
        this.open = true;
        this.lastElementChild.lastElementChild.style.transform = "rotate(0deg)"
        this.nextElementSibling.style.padding = "25px";
        this.nextElementSibling.style.height = "47.6%";
      }
    })
  }
})();