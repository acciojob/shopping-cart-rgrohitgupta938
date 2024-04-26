document.getElementById('add').addEventListener('click', function() {
      // Get input values
      var itemName = document.getElementById('item-name-input').value;
      var itemPrice = parseFloat(document.getElementById('item-price-input').value);

      // Check if input is valid
      if (itemName.trim() === '' || isNaN(itemPrice) || itemPrice <= 0) {
        alert('Please enter a valid item name and price.');
        return;
      }

      // Clear input fields
      document.getElementById('item-name-input').value = '';
      document.getElementById('item-price-input').value = '';

      // Update shopping list table
      var tableBody = document.querySelector('#shopping-list tbody');
      var totalRow = tableBody.lastElementChild;
      var newRow = tableBody.insertBefore(document.createElement('tr'), totalRow);
      var nameCell = newRow.insertCell(0);
      var priceCell = newRow.insertCell(1);
      nameCell.textContent = itemName;
      priceCell.textContent = itemPrice.toFixed(2);

      // Update grand total
      var totalCell = document.getElementById('total');
      var currentTotal = parseFloat(totalCell.textContent);
      var newTotal = currentTotal + itemPrice;
      totalCell.textContent = newTotal.toFixed(2);
    });