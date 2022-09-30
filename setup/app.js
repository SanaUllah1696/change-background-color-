const colors = ["green", "red", "rgba(133,122,200)", "#f15025"];
const btn=document.getElementById("btn");
const color=document.querySelector(".color");

btn.addEventListener("click",function(){
    const num=getcolor();
    document.body.style.backgroundColor=colors[num];
    color.textContent=colors[num];

})

function getcolor()
{
    var num= Math.random();
    num=num*colors.length;

    num=Math.floor(num);
    return num;
}
