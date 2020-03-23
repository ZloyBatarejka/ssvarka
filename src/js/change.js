const titles = document.querySelectorAll(".card-title");
const oks = document.querySelectorAll(".title-ok");
const inputs = document.querySelectorAll(".title-input");
titles.forEach(item => {
  item.addEventListener("click", function() {
    this.parentNode.classList.toggle("change");
  });
});
oks.forEach((item, index) => {
  item.addEventListener("click", function() {
    alert(`Отправлен запрос на смену названия на "${inputs[index].value}"`);
    this.parentNode.parentNode.classList.toggle("change");
  });
});
