
// store products in an object keyed by id; each value is an object describing the item
let inventory = {
    1234: {Pname: "Laptop", category: "Technology", Quantity: 30, price: 499.99},
    4321: {Pname: "Vacuum Cleaner", category: "Home Appliance", Quantity: 18, price: 179.99},
    5678: {Pname: "Wireless Mouse", category: "Technology", Quantity: 120, price: 24.99},
    8765: {Pname: "Coffee Maker", category: "Kitchen", Quantity: 40, price: 89.99},
    2468: {Pname: "Office Chair", category: "Furniture", Quantity: 25, price: 149.50},
    1357: {Pname: "Bluetooth Speaker", category: "Audio", Quantity: 60, price: 59.99},
    9753: {Pname: "Yoga Mat", category: "Fitness", Quantity: 80, price: 19.95},
    8642: {Pname: "Smartphone", category: "Technology", Quantity: 50, price: 699.00},
    1122: {Pname: "LED Desk Lamp", category: "Lighting", Quantity: 70, price: 29.99},
    3344: {Pname: "Water Bottle", category: "Outdoors", Quantity: 100, price: 14.99},
};

function addProduct(id, Pname, category, Quantity, price) {
    if (price <= 0) {
        alert(`${Pname} has a non‑positive price, please double check price`);
        return;
    }
    if (inventory[id]) {
        alert(`An item with id ${id} already exists.`);
        return;
    }
    inventory[id] = { Pname, category, Quantity, price };
    alert(`${Pname} has been added to the inventory`);
}

function removeProduct(id) {
    if (inventory[id]) {
        const name = inventory[id].Pname;
        delete inventory[id];
        alert(`Removed: ${name} (id ${id}) from inventory`);
    } else {
        alert(`No product found with id ${id}`);
    }
}

function updateQuantity(id, newQuantity) {
    if (inventory[id]) {
        inventory[id].Quantity = newQuantity;
        alert(`Updated ${inventory[id].Pname} (id ${id}) with new quantity of ${newQuantity}`);
    } else {
        alert(`No product found with id ${id}`);
    }
}

function generateReport() {
    const report = Object.entries(inventory).map(([id, item]) => ({ id, ...item }));
    console.log(report);
    return report;
}

function filterByCategory(cat) {
    const results = Object.values(inventory).filter(item => item.category === cat);
    alert(JSON.stringify(results, null, 2));
    return results;
}

function calculateTotalInventoryValue() {
    return Object.values(inventory).reduce((total, item) => total + item.price * item.Quantity, 0);
}

function lowStockAlert() {
    const low = Object.values(inventory).filter(item => item.Quantity < 10);
    if (low.length > 0) {
        const names = low.map(i => i.Pname).join(', ');
        alert(`${names} ${low.length > 1 ? 'have' : 'has'} fallen below 10. Please order more`);
        return low;
    }
    return [];
}
