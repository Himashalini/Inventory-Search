const searchInput = document.getElementById('searchInput');
const searchButton = document.getElementById('searchButton');
const resultsTable = document.getElementById('resultsTable');

// Sample inventory data
const inventory = [
  { item: 'Lenovo Laptop', quantity: 50, price: 50000.00 },
  { item: 'Macbook Laptop', quantity: 25, price: 190000.00 },
  { item: 'Dell Laptop', quantity: 100, price: 40000.00 },
  { item: 'Asus Laptop', quantity: 75, price: 64000.00 },
  { item: 'HP Laptop', quantity: 30, price: 70000.00 }
];

// Function to display search results
function displayResults(results) {
  const tableBody = resultsTable.getElementsByTagName('tbody')[0];
  while (tableBody.firstChild) {
    tableBody.removeChild(tableBody.firstChild);
  }

  results.forEach(item => {
    const row = document.createElement('tr');

    const itemCell = document.createElement('td');
    itemCell.textContent = item.item;
    row.appendChild(itemCell);

    const quantityCell = document.createElement('td');
    quantityCell.textContent = item.quantity;
    row.appendChild(quantityCell);

    const priceCell = document.createElement('td');
    priceCell.textContent = item.price.toFixed(2);
    row.appendChild(priceCell);

    tableBody.appendChild(row);
  });
}

// Function to search inventory
function searchInventory() {
  const searchTerm = searchInput.value.toLowerCase();
  const results = inventory.filter(item =>
    item.item.toLowerCase().includes(searchTerm)
  );
  displayResults(results);
}

// Event listener for search button click
searchButton.addEventListener('click', searchInventory);