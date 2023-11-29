let number1=document.get

function dice() {
    a = Math.floor(Math.random() * 10)

    if (a == 0) {
        console.log(a + 1)
        document.getElementById('number1').innerHTML=a+1;
    }
    else {
        console.log(a)
        document.getElementById('number1').innerHTML=a;
    }
}





