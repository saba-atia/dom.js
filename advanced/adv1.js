const form = document.getElementById("shopping-form");
const input = document.getElementById("item-input");
const shoppingList = document.getElementById("shopping-list");

function addItem(event) {
    event.preventDefault();

    const itemValue = input.value.trim();

    if (itemValue !== "") {
        const li = document.createElement("li");

        li.textContent = itemValue;

        const deleteButton = document.createElement("button");
        deleteButton.textContent = "Delete";
        deleteButton.onclick = () => {
            li.remove(); 
        };

        li.appendChild(deleteButton);

        shoppingList.appendChild(li);

        input.value = "";
        input.focus();
    }
}

form.addEventListener("submit", addItem);