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
        let quantity = Number(product.querySelector('.product__quantity-value').textContent);
        let id = product.dataset.id;
        let image = product.querySelector('img').getAttribute('src');
        
        let cartProducts = document.querySelector('.cart__products');
        let createElement = document.createElement('div');
        createElement.classList.add('cart__product');
        createElement.setAttribute('data-id', id);
        createElement.innerHTML = `
            <img class="cart__product-image" src=${image}>
            <div class="cart__product-count">${quantity}</div>`;
        
        const cartProduct = cartProducts.querySelectorAll('.cart__product');
        const idProduct = Array.from(cartProduct).map(elem => elem.getAttribute(`data-id`));

        if (!idProduct.includes(id)) {
            cartProducts.append(createElement);
        } else {
            let currentProduct = document.querySelector(`.cart__product[data-id="${id}"]`);
            let quantityProduct = Number(currentProduct.querySelector('.cart__product-count').textContent);
            currentProduct.querySelector('.cart__product-count').textContent = quantity + quantityProduct;
        }
    })
})
