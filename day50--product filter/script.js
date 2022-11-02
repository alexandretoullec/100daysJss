const btns = document.querySelectorAll(".btn");
const storeProducts = document.querySelectorAll(".store-product");

for (let i = 0 ; i < btns.length ; i++){
    btns[i].addEventListener("click",function(e){
        const current = document.getElementsByClassName("active");
        current[0].className = current[0].className.replace("active","");
        this.className += " active";

        // Switch Tab content
        const filter = e.target.dataset.filter
        
        storeProducts.forEach((product)=>{
            if(filter === "all") {
                product.style.display = "block"
            }else if (product.classList.contains(filter)) {
                product.style.display = "block"
            }else{
                product.style.display = "none"
            }
        })

    })
}
