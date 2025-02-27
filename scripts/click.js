
document.getElementById("close-overlay").onclick = function(){
    document.getElementById("cart-overlay").style.display = "none";
}

document.getElementById("open-overlay").onclick = function(){
    document.getElementById("cart-overlay").style.display = "block";
}

window.onclick = function(event){
    const cartOverlay = document.getElementById("cart-overlay")
    if (event.target === cartOverlay){
        cartOverlay.style.display = "none";
    }
}