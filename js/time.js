let time = document.querySelector('.time')

function showTime() {
    let date = new Date();

    let hour = plusZero(date.getHours());
    let min = plusZero(date.getMinutes());
    let sec = plusZero(date.getSeconds());


    time.innerText = hour + ":" + min + ":" + sec;

    setTimeout(showTime, 1000);
}
function plusZero(num) {
    if(num < 10) {
        return "0" + num;
    }
    else{
        return num;
    }
}



showTime();