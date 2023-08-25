// Get all product cards
const productCards = document.querySelectorAll('.product-card');

// Function to update product details on comparison
function compareProducts(productName) {
  // Simulate fetching data from a database
  const productData = {
    'Product Name': {
      name: 'Product Name',
      description: 'Compare prices from different local markets.',
      imageUrl: 'product1.jpg',
    },
    // Add more products here
  };

  const product = productData[productName];

  if (product) {
    const productCard = document.querySelector(`[data-product="${productName}"]`);
    if (productCard) {
      const image = productCard.querySelector('img');
      const name = productCard.querySelector('h3');
      const description = productCard.querySelector('p');

      image.src = product.imageUrl;
      name.textContent = product.name;
      description.textContent = product.description;
    }
  }
}

// Add click event listeners to each "Compare Now" button
productCards.forEach(card => {
  const compareButton = card.querySelector('.btn');
  const productName = card.dataset.product;

  compareButton.addEventListener('click', () => {
    compareProducts(productName);
  });
});
const searchFocus = document.getElementById('search-focus');
const keys = [
  { keyCode: 'AltLeft', isTriggered: false },
  { keyCode: 'ControlLeft', isTriggered: false },
];

window.addEventListener('keydown', (e) => {
  keys.forEach((obj) => {
    if (obj.keyCode === e.code) {
      obj.isTriggered = true;
    }
  });

  const shortcutTriggered = keys.filter((obj) => obj.isTriggered).length === keys.length;

  if (shortcutTriggered) {
    searchFocus.focus();
  }
});

window.addEventListener('keyup', (e) => {
  keys.forEach((obj) => {
    if (obj.keyCode === e.code) {
      obj.isTriggered = false;
    }
  });
});

