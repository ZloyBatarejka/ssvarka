let toggler = document.querySelector("#table_toggler");
let goods = document.querySelector(".goods");
toggler.addEventListener("click", () => {
  goods.classList.toggle("table");
});
