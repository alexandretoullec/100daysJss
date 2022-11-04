const counters = document.querySelectorAll(".counter");

counters.forEach((counter)=>{
  counter.innerText = 0;

  function updateCounter () {

    //the + sign allows to convert string into number
    const target = +counter.dataset.target;
    const count = +counter.innerText;
    const increment = target / 200; // 200 represent the delay of the counter you can increase or decrease it

    if(count < target){
      counter.innerText = `${Math.ceil(count + increment)} `;
      setTimeout(updateCounter,10)
    }else{
      counter.innerText = target;
    }

  }
  // updateCounter()

  window.addEventListener("scroll" , ()=> {
    const scrollH = window.pageYOffset;
    const sectionTop = document.querySelector(".top");
    const sectionTopH = sectionTop.clientHeight;

    console.log(sectionTopH);

    if(scrollH >= sectionTopH -1){
      updateCounter()
    }



  })
})