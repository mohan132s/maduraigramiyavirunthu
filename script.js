const menuItems = [
    {
        id: 1,
        name: "Dosai",
        price: 20,
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        id: 2,
        name: "Chicken Alfredo Pasta",
        price: 14.99,
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        id: 3,
        name: "Caesar Salad",
        price: 8.99,
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        id: 4,
        name: "Cheeseburger",
        price: 10.99,
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        id: 5,
        name: "Grilled Salmon",
        price: 16.99,
        image: "/placeholder.svg?height=200&width=200"
    }
];

const menuItemsContainer = document.getElementById('menuItems');
const searchInput = document.getElementById('searchInput');
const noItemsMessage = document.getElementById('noItemsMessage');

function createMenuItemElement(item) {
    const menuItem = document.createElement('div');
    menuItem.classList.add('menu-item');
    menuItem.innerHTML = `
        <img src="${item.image}" alt="${item.name}">
        <div class="menu-item-info">
            <div class="menu-item-name">${item.name}</div>
            <div class="menu-item-price">$${item.price.toFixed(2)}</div>
        </div>
    `;
    return menuItem;
}

function displayMenuItems(items) {
    menuItemsContainer.innerHTML = '';
    items.forEach(item => {
        const menuItemElement = createMenuItemElement(item);
        menuItemsContainer.appendChild(menuItemElement);
    });
    noItemsMessage.classList.toggle('hidden', items.length > 0);
}

function filterMenuItems(searchTerm) {
    const filteredItems = menuItems.filter(item =>
        item.name.toLowerCase().includes(searchTerm.toLowerCase())
    );
    displayMenuItems(filteredItems);
}

searchInput.addEventListener('input', (e) => {
    filterMenuItems(e.target.value);
});

// Initial display of all menu items
displayMenuItems(menuItems);

