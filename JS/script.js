var allProducts = document.querySelectorAll(".list li")
var content = document.querySelector("#content")
var btn = document.querySelector("#btn1")
var totalPrice = 0

allProducts.forEach(function(item){
    item.onclick=function(){
        totalPrice += +(item.getAttribute("price"))
        content.innerHTML += item.textContent + ".&npsb"
        if (content.innerHTML != ""){
            btn.style.display= "block";
            btn.style.backgroundColor = "pink";
            btn.style.Color = "black";
            btn.style.height = "30px";
            btn.style.width = "105px";
        }
    }
})
btn.onclick = function(){
    console.log(totalPrice)
    document.getElementById("total").innerHTML = totalPrice
    event.preventDefault();
}
