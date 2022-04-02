let shoppingItems = ["milk", "eggs", "bread"]
let listElement = document.getElementById("shopping-list-items");

shoppingItems.forEach((item) => {
    console.log(item);
    let itemElement = document.createElement("li");
    itemElement.innerText = item;
    listElement.appendChild(itemElement);
});

function updateItems() {
    let listElement = document.getElementById("shopping-list-items"); 
    listElement.innerHTML = "";
    
}

function addItem() {
    let item = document.getElementById("new-item-text").value; 
    shoppingItems.push(item);
    console.log(shoppingItems);
    updateItems()
}

function clearItems() {
    let itemElement = document.createElement("li");
    // let listElement = document.getElementById("shopping-list-items");
    // listElement.innerHTML = "";
    shoppingItems = [];
// double check this with a mentor and refer to Kris' message on slack 
}

