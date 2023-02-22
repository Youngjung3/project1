const gap = 500;
function js() {
  const sections = document.querySelectorAll("section");
  const nav = document.querySelector("nav");
  const gnb = nav.querySelectorAll(".gnb>li");
  const sgnb = document.querySelectorAll(".sideNav>li");

  function removeON(obj){
	obj.forEach((o) => {
		o.classList.remove("on");
	  });
  }
  function smooth(el){
	e.preventDefault();
	document.querySelector(el.firstChild.getAttribute("href")).scrollIntoView({ behavior: "smooth" });
  }
  sgnb.forEach((el) => {
    el.addEventListener("click", function (e) {
      e.preventDefault();
      document
        .querySelector(el.firstChild.getAttribute("href"))
        .scrollIntoView({ behavior: "smooth" });
		removeON(gnb);
/*       sgnb.forEach((obj) => {
        obj.classList.remove("on");
      }); */
      el.classList.add("on");
    });
  });
}
js();