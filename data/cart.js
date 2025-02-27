import {products, getProduct} from './products.js';


export let cart = JSON.parse(localStorage.getItem('cart'));
if (!cart){
    cart =[{
        productId: "0120",
        quantity: 1,
},{
        productId: "0121",
        quantity: 1
},{
        productId: "0122",
        quantity: 1
}];
}


export function saveToStorage(){
    localStorage.setItem('cart', JSON.stringify(cart));
}




export function addToCart(productId){
    let matchingItem = 0;

    cart.forEach((cartItem)=>{
        if(productId === cartItem.productId){
        matchingItem = cartItem;
        }
    });

    if(matchingItem){
    matchingItem.quantity += 1;
    
    }else{
        cart.push({
        productId: productId,
        quantity:1
        });
    }
  
    saveToStorage();

}


export function removeFromCart(productId){
    const newCart=[];

    cart.forEach((cartItem)=>{
        if(cartItem.productId !==  productId){
            newCart.push(cartItem);
        }
    });

    cart = newCart;
    saveToStorage();
}
