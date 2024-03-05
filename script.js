const hamMenu = (x) => {
  x.classList.toggle("change");
  links = document.getElementById("link");
  links.style.display = links.style.display === "block" ? "none" : "block";
  // document.addEventListener("click", (event) => {
  //   if (event.target !== hamMenu && links.contains(!event.target)) {
  //     links.style.display = "none";
  //     hamMenu.classList.remove("change");
  //   }
  // });
};
