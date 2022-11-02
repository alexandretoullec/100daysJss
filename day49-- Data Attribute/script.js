const btns = document.querySelectorAll(".btn");
const text = document.querySelector(".text");

btns.forEach((btn) => {
 btn.addEventListener("click", (e)=> {
  // const filter = e.target.getAttribute("data-link");

  //dataset refer to data- in the HTML as a prefix then add the suffix which is in that case link
  const filter = e.target.dataset.link;

  // console.log(filter);

  if(filter === "home"){
    text.innerHTML = "Homepage"
  }else if(filter === "about"){
    text.innerHTML = "About page"
  }else{
    text.innerHTML = "Contact page"
  }

 })
})
