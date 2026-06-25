const productInput = document.getElementById("productInput")
const priceInput = document.getElementById("priceInput")
const addButton = document.getElementById("addButton")
const cartList = document.getElementById("cartList")

let cart = []

function addToCart() {
    const productName = productInput.value
    const productPrice = Number(priceInput.value)

    const newProduct = {
        productName: productName,
        productPrice: productPrice,
        quantity: 1,
    }

    let itemExists = false

    for (item of cart) {
        if (item.productName === productName) {
            item.quantity++
            itemExists = true
        } 
    }

    if (!itemExists) {
        cart.push(newProduct)    
    }
    
    console.log(cart)

    productInput.value = ""
    priceInput.value = ""
}


function renderCart() {
    cartList.innerHTML = ""

    for (item of cart){
        const listItem = document.createElement("li")
        listItem.textContent = `${item.productName} - ${item.productPrice}kr (x${item.quantity})`
        cartList.appendChild(listItem)
    }
}


addButton.addEventListener("click", () => {
    addToCart()
    renderCart()
})
        

   

        




    
