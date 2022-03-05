const addItem = () => {
    const productField = document.getElementById('product-field');
    const product = productField.value;
    // display product 
    displayItems(product);

    // display localStorage
    addProductToCart(product);

    productField.value = '';
}

const displayItems = product => {
    const ul = document.getElementById('product-items');
    const li = document.createElement('li');
    li.classList.add('nav-item');
    li.innerText = product;

    ul.appendChild(li);
}

const getCart = () => {
    const cart = localStorage.getItem('cart');
    let cartObj;
    if(cart){
        cartObj = JSON.parse(cart);
    }
    else{
        cartObj ={};
    }
    return cartObj;
}

const addProductToCart = product => {
    const cart = getCart();
    cart[product] = 1;
    
    const cartStringigy = JSON.stringify(cart);
    localStorage.setItem('cart', cartStringigy);
}