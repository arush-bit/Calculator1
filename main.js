function add()
{
var a,b,c;
a = Number(document.getElementById("firstNumber").value);
b = Number(document.getElementById("secondNumber").value);
c=a+b;
document.getElementById("result").innerHTML = c;
 
}

function sub()
{
var a,b,c;
a = Number(document.getElementById("firstNumber").value);
b = Number(document.getElementById("secondNumber").value);
c=a-b;
document.getElementById("result").innerHTML = c;
 
}

function multy()
{
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 * num2;

}

function divide()
{
    num1 = document.getElementById("firstNumber").value;
    num2 = document.getElementById("secondNumber").value;
    document.getElementById("result").innerHTML = num1 / num2;


}


