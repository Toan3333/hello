const showTitle = document.querySelector(".show-title");
const content = document.querySelector(".app");
const show = document.querySelector(".show");
showTitle.addEventListener("click", handleShowContent);
function handleShowContent() {
  content.classList.add("active");
  show.style.display = "none";
}
