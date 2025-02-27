import {products, getProduct} from '../data/products.js';
import {cart, addToCart, removeFromCart, saveToStorage} from '../data/cart.js';


function renderOrderSummary(){
    let productsHTML = '';

    products.forEach((product)=>{
        productsHTML +=`
            <div class="pro">
                <img src="${product.image}" alt="">
                <div class ="desc">
                    <span> Adidas</span>
                    <h5>${product.name}</h5>
                    <div class="star">
                        <i class ="fas fa-star"></i>
                        <i class ="fas fa-star"></i>
                        <i class ="fas fa-star"></i>
                        <i class ="fas fa-star"></i>
                        <i class ="fas fa-star"></i>
                    </div>
                <h4>£${product.priceCents}</h4>
                </div>
                <a href ="#"><i class ="fal fa-shopping-cart prod-cart" data-product-id ="${product.id}"></i></a>
            </div>

        `;
    });
    document.querySelector('.js-products-container').innerHTML = productsHTML;




    /* this updates the cart quantity in  the main page */

    function updateCartQuantity(){
        let cartQuantity =0;

        cart.forEach((cartItem)=>{
            cartQuantity += cartItem.quantity;
        });
        
        document.querySelector('.js-cart-quantity').innerHTML = cartQuantity;        
    }

   

    document.querySelectorAll('.prod-cart').forEach((button)=>{
        button.addEventListener('click', (event)=>{
          event.preventDefault();
            const productId = button.dataset.productId;
           
            addToCart(productId);
            updateCartQuantity();    
            renderOrderSummary();
        });   
        saveToStorage();
    });
    
    let cartSummaryHTML ='';

    cart.forEach((cartItem)=>{
        const productId = cartItem.productId;

        let matchingProduct= getProduct(productId);

        saveToStorage();
    
        cartSummaryHTML += `
            <div class="cart-item js-cart-item-container-${matchingProduct.id}">
                <img src="${matchingProduct.image}" alt="product">
                <div>
                    <h4>${matchingProduct.name}</h4>
                    <h5>£${matchingProduct.priceCents}</h5>
                    <span class="remove-item link-primary js-remove-link" data-product-id= "${matchingProduct.id}"> remove</span>
                </div>
                
            </div>
        `;
  
    });

    document.querySelector('.js-cart-overlay-items').innerHTML = cartSummaryHTML;
    updateCartQuantity(); 
   

    document.querySelectorAll('.js-remove-link')
        .forEach((link)=>{
            link.addEventListener('click', ()=>{
            const productId = link.dataset.productId;
            removeFromCart(productId);

            const container = document.querySelector(`.js-cart-item-container-${productId}`);
            container.remove();

            saveToStorage();

            renderOrderSummary();
        });
        
    });


    function getTotalPrice(cart, products) { 
        let totalPrice = 0; 
        cart.forEach(function(cartItem) { 
            const product = products.find(function(product) { 
                return product.id === cartItem.productId; }); 
                if (product) { 
                    totalPrice += product.priceCents * cartItem.quantity; 
                } 
               
            }); 
           
            return totalPrice; 
        }
        let totalPrice = getTotalPrice(cart, products); 
        
        document.querySelector('.js-cart-total').innerHTML = totalPrice;

        
    /* this code increasses the number in the chefron up and down */
    /*not working properly needs revising*/


        const displayValue =document.querySelector('.js-displayValue');
        let count =0;

        document.querySelectorAll('.js-increment')
            .forEach((chefron)=>{
               
                chefron.addEventListener('click', ()=>{
                   count++;
                    
                    const productId = chefron.dataset.productId;
                    displayValue.count += count;
                    addToCart(productId);
                    updateCartQuantity;
                    // console.log(productId);
                    // console.log(count);
                    document.querySelector('.js-displayValue').innerHTML = count;
                });   
        });

        // document.querySelectorAll('.js-decrement')
        // .forEach((chefron)=>{
        //     chefron.addEventListener('click', ()=>{                
        //     count--;
        //         // console.log(count);
        //         const productId = chefron.dataset.productId;
                
        //         addToCart(productId);
        //         updateCartQuantity();
        //         // console.log(productId);
        //         document.querySelector('.js-displayValue').innerHTML = count;
        //     });   
    // });
}

renderOrderSummary();

