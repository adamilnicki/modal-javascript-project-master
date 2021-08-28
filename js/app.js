window.onload = function () {
  //Selecting all filterBtns
  let filterBtn = document.querySelectorAll(".filter-btn");
  let storeItems = document.querySelectorAll(".store-item");

  //Adding event listener to EACH index of array (every .filter-btn)
  filterBtn.forEach(function (button) {
    button.addEventListener("click", function (event) {
      event.preventDefault();
      if (button.dataset.filter == "all") {
        storeItems.forEach(function (item) {
          item.style.display = "block";
        });
      } else if (button.dataset.filter == "sweets") {
        storeItems.forEach(function (item) {
          if (item.dataset.item == "sweets") {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      } else if (button.dataset.filter == "cupcakes") {
        storeItems.forEach(function (item) {
          if (item.dataset.item == "cupcakes") {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      } else if (button.dataset.filter == "cakes") {
        storeItems.forEach(function (item) {
          if (item.dataset.item == "cakes") {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      } else if (button.dataset.filter == "doughnuts") {
        storeItems.forEach(function (item) {
          if (item.dataset.item == "doughnuts") {
            item.style.display = "block";
          } else {
            item.style.display = "none";
          }
        });
      }
    });
  });

  //Search box
  let searchBox = document.querySelector("#search-item");
  searchBox.addEventListener("input", function (e) {
    let searchFilter = e.target.value.toLowerCase().trim();
    storeItems.forEach(function (item) {
      if (item.textContent.includes(searchFilter)) {
        item.style.display = "block";
      } else {
        item.style.display = "none";
      }
    });
  });

  //popup code
  let lightBox = document.querySelector(".lightbox-container");
  let lightItem = document.querySelector(".lightbox-item");
  //let storeItems = document.querySelectorAll(".store-item");
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
        } else if (i == 0) {
          i = storeItems.length - 1;
          lightItem.style.backgroundImage = `url(${storeImg[i].src})`;
          console.log(i);
        }
      });
      btnRight.addEventListener("click", function () {
        if (i < 11) {
          i++;
          lightItem.style.backgroundImage = `url(${storeImg[i].src})`;
          console.log(i);
        } else if (i == 11) {
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
