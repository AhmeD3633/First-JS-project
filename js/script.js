var allproducts = document.querySelectorAll(".card")
var div = document.querySelector("#content")
var btn = document.querySelector("#btn")
var total = document.querySelector("#tatal")
var name =document.querySelector(".name")
var totalprice = 0


allproducts.forEach(function(item){
    item.onclick = function(){
        div.innerHTML +=item.querySelector(".name").textContent +"-"
        totalprice +=+(item.getAttribute("price"))

        if(div.innerHTML != ""){
            btn.style.display="block"
        }
    }
})
btn.onclick = function(){
    document.getElementById("total").innerHTML = totalprice
}