function cal1(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)+parseInt(num2);
    alert("แสดงผลรวม : "+sum);
    // document.getElementById("result").innerHTML="แสดงผลรวม :"+sum;
}
function cal2(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)-parseInt(num2);
    alert("แสดงผลรวม : "+sum);
    // document.getElementById("result").innerHTML="แสดงผลรวม :"+sum;
}

function cal3(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)*parseInt(num2);
    alert("แสดงผลรวม : "+sum);
    // document.getElementById("result").innerHTML="แสดงผลรวม :"+sum;
}

function cal4(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseInt(num1)/parseInt(num2);
    alert("แสดงผลรวม : "+sum);
    // document.getElementById("result").innerHTML="แสดงผลรวม :"+sum;
}
function cal5(){
    var num1 = document.getElementById("num1").value;
    var num2 = document.getElementById("num2").value;
    var sum = parseFloat(num1)/(parseFloat(num2)*parseFloat(num2));
    alert("แสดงผลรวม : "+sum.toFixed(2));
    // document.getElementById("result").innerHTML="แสดงผลรวม :"+sum;
}

function myalert(){
    alert("hello")
}

const img = document.createElement("img")
img.src = "img/photo.jpg";
img.style.width = "200px";
document.getElementById("mydiv").appendChild(img);