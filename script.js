const menuItems = [
    {
        id: 1,
        name: {
            en: "Dosa",
            ta: "தோசை"
        },
        price: 20,
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        id: 2,
        name: {
            en: "Chicken Biryani",
            ta: "சிக்கன் பிரியாணி"
        },
        price: 150,
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        id: 3,
        name: {
            en: "Idli Sambar",
            ta: "இட்லி சாம்பார்"
        },
        price: 40,
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        id: 4,
        name: {
            en: "Vada",
            ta: "வடை"
        },
        price: 10,
        image: "/placeholder.svg?height=200&width=200"
    },
    {
        id: 5,
        name: {
            en: "Pongal",
            ta: "பொங்கல்"
        },
        price: 60,
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
        <img src="${item.image}" alt="${item.name.en}">
        <div class="menu-item-info">
            <div class="menu-item-name">${item.name.en} / ${item.name.ta}</div>
            <div class="menu-item-price">₹${item.price.toFixed(2)}</div>
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
        item.name.en.toLowerCase().includes(searchTerm.toLowerCase()) ||
        item.name.ta.includes(searchTerm)
    );
    displayMenuItems(filteredItems);
}

searchInput.addEventListener('input', (e) => {
    filterMenuItems(e.target.value);
});

// Initial display of all menu items
displayMenuItems(menuItems);

