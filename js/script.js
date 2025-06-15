let btn = document.querySelector("#mybtn")

let flag = false;

function changetext(){
    if(flag) {
        flag = false
        btn.innerText = "Купить"
    }
    
    else{
        flag = true
        btn.innerText = "В корзине";
    }


    
}

