export function getProduct(productId){
    
    let matchingProduct;
    products.forEach((product)=>{
        if(product.id === productId){
            matchingProduct = product;
        }
    });
 return matchingProduct;
}



export const products = [{
    id: "0120",
    image: 'img/products/f1.jpg',
    name: 'Cartoon Astronout T-Shirt',
    rating: 5,
    priceCents: 78
},{
    id: "0121",
    image: 'img/products/f2.jpg',
    name: 'Multi-Color Summar Shirt',
    rating: 4,
    priceCents: 70
},{
    id: "0122",
    image: 'img/products/f3.jpg',
    name: 'Carribean Colorfull summer Shirt',
    rating: 5,
    priceCents: 80
},{
    id: "0123",
    image: 'img/products/f4.jpg',
    name: 'Colorfull summer ',
    rating: 2,
    priceCents: 90
},{
    id: "0124",
    image: 'img/products/f5.jpg',
    name: 'Hawaian summer Shirt',
    rating: 5,
    priceCents: 100
},{
    id: "0125",
    image: 'img/products/f6.jpg',
    name: 'African Colorfull Shirt',
    rating: 4,
    priceCents: 50
},{
    id: "0126",
    image: 'img/products/f7.jpg',
    name: 'Summer shorts',
    rating: 3,
    priceCents: 30
},{
    id: "0127",
    image: 'img/products/f8.jpg',
    name: 'Hawaian ladies Top',
    rating: 1,
    priceCents: 50
}];