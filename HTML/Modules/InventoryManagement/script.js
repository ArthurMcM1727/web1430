
// store products in an object keyed by id; each value is an object describing the item
let inventory = {
    1234: {Pname: "Laptop", category: "Technology", Quantity: 30, price: 499.99},
    4321: {Pname: "Vacuum Cleaner", category: "Home Appliance", Quantity: 18, price: 179.99},
    5678: {Pname: "Wireless Mouse", category: "Technology", Quantity: 120, price: 24.99},
    8765: {Pname: "Coffee Maker", category: "Kitchen", Quantity: 4, price: 89.99},
    2468: {Pname: "Office Chair", category: "Furniture", Quantity: 25, price: 149.50},
    1357: {Pname: "Bluetooth Speaker", category: "Audio", Quantity: 60, price: 59.99},
    9753: {Pname: "Yoga Mat", category: "Fitness", Quantity: 80, price: 19.95},
    8642: {Pname: "Smartphone", category: "Technology", Quantity: 50, price: 699.00},
    1122: {Pname: "LED Desk Lamp", category: "Lighting", Quantity: 70, price: 29.99},
    3344: {Pname: "Water Bottle", category: "Outdoors", Quantity: 100, price: 14.99},
};

function addProduct() {
    const productid = document.getElementById('add-id').value
    const productname = document.getElementById('add-name').value   
    const productcategory = document.getElementById('add-category').value
    const productquantity = document.getElementById('add-quantity').value
    const productprice = document.getElementById('add-price').value
    if (productprice <= 0) {
        alert(`${productname} has a non‑positive price, please double check price`);
        return;
    }
    if (inventory[productid]) {
        alert(`An item with id ${productid} already exists.`);
        return;
    }
    inventory[productid] = { productname, productcategory, productquantity, productprice};
    console.log(inventory[productid])
    alert(`${productname} has been added to the inventory`);
    renderInventoryTable()
}

function removeProduct() {
    let productid = document.getElementById('remove-id').value;
    productid = productid.trim();
    console.log('removeProduct received id:', productid);
    console.log('current inventory keys:', Object.keys(inventory));
    if (inventory.hasOwnProperty(productid)) {
        const name = inventory[productid].productname || inventory[productid].productname;
        delete inventory[productid];
        alert(`Removed: ${name || 'item'} (id ${productid}) from inventory`);
    } else {
        console.log(`No product found with id ${productid}`);
    }
    renderInventoryTable();
}

function updateQuantity() {
    const id = document.getElementById('update-id').value;
    const newQuantity = parseInt(document.getElementById('new-quantity').value, 10); // match HTML id
    if (inventory[id]) {
        inventory[id].Quantity = newQuantity;
        alert(`Updated ${inventory[id].Pname} (id ${id}) with new quantity of ${newQuantity}`);
        renderInventoryTable();
    } else {
        console.log(`No product found with id ${id}`);
    }
}

function generateReport() {
    const report = Object.entries(inventory).map(([id, item]) => ({ id, ...item }));
    console.log(report);
    return report;
}

function filterByCategory() {
    const category = document.getElementById('filter-category').value;
    const results = Object.values(inventory).filter(item => item.category === category);
    alert(JSON.stringify(results, null, 2));
    return results;
}

function calculateTotalInventoryValue() {
    alert(Object.values(inventory).reduce((total, item) => total + item.price * item.Quantity, 0));
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

// utility to display inventory in HTML table
function renderInventoryTable() {
    const tbody = document.querySelector('#inventoryTable tbody');
    if (!tbody) return;
    tbody.innerHTML = '';
    Object.entries(inventory).forEach(([id, item]) => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${id}</td>
            <td>${item.Pname}</td>
            <td>${item.category}</td>
            <td>${item.Quantity}</td>
            <td>$${item.price.toFixed(2)}</td>
        `;
        tbody.appendChild(row);
    });
}

// the HTML page will call renderInventoryTable() on load and attach event handlers via attributes
