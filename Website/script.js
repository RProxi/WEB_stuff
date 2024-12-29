let products_elem = document.getElementsByClassName("products-content")[0]

function addItem(name, author, price, img_src) {
    const newItem = document.createElement("div")
    newItem.classList.add("products-item")

    const newImg = document.createElement("img")
    newImg.classList.add("product-img")
    newImg.src = img_src
    newItem.appendChild(newImg)

    const newAuth = document.createElement("p")
    newAuth.classList.add("product-text")
    newAuth.textContent = author
    newItem.appendChild(newAuth)

    const newName = document.createElement("p")
    newName.classList.add("product-text")
    newName.textContent = name
    newItem.appendChild(newName)

    const newPrice = document.createElement("p")
    newPrice.classList.add("product-text")
    newPrice.textContent = price + " p."
    newItem.appendChild(newPrice)

    const newBtn = document.createElement("button")
    newBtn.classList.add("product-btn")
    newBtn.textContent = "Купить"
    newItem.appendChild(newBtn)

    products_elem.appendChild(newItem)
}

addItem("TestName", "TestAuthor", 200, "./assets/6014484247.jpg")