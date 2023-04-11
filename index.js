let union = document.querySelector(".union");
let navbar = document.querySelector(".top_navbar");
let logo = document.querySelector("#logo");
let main = document.querySelector(".main-section");

union.addEventListener("click", function () {
  // alert("javascript working");

  let cross = document.createElement("li");
  cross.id = "cross";
  cross.innerHTML = "×";

  navbar.classList.add("mobile-menu");
  logo.classList.add("mobile-back");
  main.classList.add("mobile-back");
  union.classList.add("img_remove");
  navbar.prepend(cross);

  let cross2 = document.querySelector("#cross");
  cross2.addEventListener("click", function () {
    // alert("go for it");
    navbar.classList.remove("mobile-menu");
    logo.classList.remove("mobile-back");
    main.classList.remove("mobile-back");
    union.classList.remove("img_remove");
    cross2.remove();
  });

});


