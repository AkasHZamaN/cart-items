    const loadCartList = () => {
        const cartList = getCartList();
        for(const productName in cartList){
            displayProduct(productName);
        }
    }
    // event listener 
    const addItem = () => {
        const productField = document.getElementById('product-field');
        const productName = productField.value;

        // if product value none then return
        if(!productName){
            return;
        }

        // display product in the UI
        displayProduct(productName);

        // display product in the locarStorage
        productToCartList(productName);

        // clear product field
        productField.value = '';
    }

    // display function for showing product in the UI
    const displayProduct = productName => {
        const ul = document.getElementById('product-items');

        const li = document.createElement('li');
        li.innerText = productName;

        ul.appendChild(li);
    }

    // check the cart list in the localStorage. if have cart list then parse it otherwise we create new cart list
    const getCartList = () => {
        const cartList = localStorage.getItem('cartList');
        let cartListObject;
        if(cartList){
            cartListObject = JSON.parse(cartList);
        }
        else{
            cartListObject = {};
        }
        return cartListObject;
    }

    // add product to the localStorage
    const productToCartList = productName => {
        const cartList = getCartList();
        if(cartList[productName]){
            cartList[productName] = cartList[productName]+1;
        }
        else{
            cartList[productName] = 1;
        }
        
        const cartListStringify = JSON.stringify(cartList);
        localStorage.setItem('cartList', cartListStringify);
    }

    const orderNow = () => {
        document.getElementById('product-items').textContent = '';
        localStorage.removeItem('cartList');
    }

    // const addToCart = () => {
    //     displayProduct(productName);
    // }
    loadCartList();
