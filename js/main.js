// Init Function Change Color Shoes
let elementShoe = document.getElementsByClassName("button-colors");

for (let i = 0; i < elementShoe.length; i++) {
    elementShoe[i].addEventListener("click", changedColorShoe);
}

function changedColorShoe() {
    let dataColor = this.getAttribute("data-color");

    switch (dataColor) {
        case "green":
            document.getElementById("image-shoes").src = "img/green_shoe.png";
            break;
        case "orange":
            document.getElementById("image-shoes").src = "img/orange_shoe.png";
            break;
        case "blue":
            document.getElementById("image-shoes").src = "img/blue_shoe.png";
            break;
    }
}
// End Function Change Color Shoes

//Init Function Select Size Shoes

let elementSizeShoe = document.getElementsByClassName("button-size-shoe", changedSizeShoe);

for (let i = 0; i < elementSizeShoe.length; i++) {
    elementSizeShoe[i].addEventListener("click", changedSizeShoe);
}

function removeAllActivates(){
    for (let i = 0; i < elementSizeShoe.length; i++) {
        elementSizeShoe[i].classList.remove("button-size-shoe-active");
    }
}

function changedSizeShoe() {



    for (let i = 0; i < elementSizeShoe.length; i++) {

        if(!this.classList.contains("button-size-shoe-active")){
            removeAllActivates();
            this.classList.add("button-size-shoe-active");
        }

    }

}    

function checkActivated(param){

    

}

// End Function Select Size Shoes