const dec = document.querySelectorAll('.product__quantity-control_dec');
const inc = document.querySelectorAll('.product__quantity-control_inc');

dec.forEach((elem) => {
    elem.addEventListener('click', () => {
        let dec = elem.parentElement.querySelector('.product__quantity-value')
        if (dec.textContent <= 1) {
            return
        }
        dec.textContent--
        })
    })

inc.forEach((elem) => {
    elem.addEventListener('click', () => {
        let inc = elem.parentElement.querySelector('.product__quantity-value')
        inc.textContent++
    })
})

const basket = document.querySelectorAll('.product__add');

basket.forEach(element => {
    element.addEventListener('click', element => {
        let product = element.target.closest('.product');
        let idProduct = product.dataset.id;
        let quantity = Number(product.querySelector('.product__quantity-value').textContent);
     
        
        let cartProducts = document.querySelector('.cart__products');
        
        for (let carts of cartProducts.children) {

            if (carts.dataset.id === idProduct) {
                
                let currentProduct = Number(carts.querySelector('.cart__product-count').textContent);
                carts.querySelector('.cart__product-count').textContent = quantity + currentProduct;
                
                return
            }
        }

        let image = product.querySelector('img').getAttribute('src');
        
        const productToCart = `<div class="cart__product" data-id="${idProduct}">
                                <img class="cart__product-image" src="${image}">
                                <div class="cart__product-count">${quantity}</div>
                            </div>`;
        
        cartProducts.insertAdjacentHTML('beforeend', productToCart);   
    })
})

