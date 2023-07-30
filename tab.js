const tabs = document.querySelectorAll(".tab__btn");
const tabContent = document.querySelectorAll(".content__box .content");

tabs.forEach((tab, index) => {
  tab.addEventListener("click", (e) => {
    //on sélectionne tous les tabs et on enlève la class 'active'
    tabs.forEach((tab) => tab.classList.remove("active"));
    //on ajoute la class "active" à la tab sélectionnée
    tab.classList.add("active");

    var line = document.querySelector(".line");
    line.style.width = e.target.offsetWidth + "px";
    line.style.left = e.target.offsetLeft + "px";

    tabContent.forEach(content => {content.classList.remove('active')});
    tabContent[index].classList.add('active');
  });
});
