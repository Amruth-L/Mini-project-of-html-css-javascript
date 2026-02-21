const button = document.getElementById("addBtn");
const list = document.getElementById("myList");
let count = 1;
button.addEventListener("click", function () {
    const newItem = document.createElement("li");
    newItem.textContent = "Item" + count;
    list.appendChild(newItem);
    count++;
});