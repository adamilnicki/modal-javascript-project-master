window.onload = function () {
  let lightBox = document.querySelector(".lightbox-container");
  let lightItem = document.querySelector(".lightbox-item");
  let storeItems = document.querySelectorAll(".store-item");
  let storeImg = document.querySelectorAll(".store-img");

  storeItems.forEach(function (item, index) {
    item.addEventListener("click", function (event) {
      event.preventDefault();
      lightItem.style.backgroundImage = `url(${storeImg[index].src})`;
      lightBox.classList.add("show");

      // buttons left/right
      let btnLeft = document.querySelector(".btnLeft");
      let btnRight = document.querySelector(".btnRight");
      let i = index;
      btnLeft.addEventListener("click", function () {
        if (i > 0) {
          i--;
          lightItem.style.backgroundImage = `url(${storeImg[i].src})`;
          console.log(i);
        } else if(i==0){
          i = storeItems.length-1;
          lightItem.style.backgroundImage = `url(${storeImg[i].src})`;
          console.log(i);
        }
      });
      btnRight.addEventListener("click", function () {
        if (i < 11) {
          i++;
          lightItem.style.backgroundImage = `url(${storeImg[i].src})`;
          console.log(i);
        } else if(i==11){
          i = 0;
          lightItem.style.backgroundImage = `url(${storeImg[i].src})`;
          console.log(i);
        }
      });
    });
  });

  // close popup
  let closeButton = document.querySelector(".lightbox-close");
  closeButton.addEventListener("click", function () {
    lightBox.classList.remove("show");
  });
};
