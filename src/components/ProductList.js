export default function productList(products) {

  const element = document.getElementById('product-list');

  // map of products
  let productItem = products.map(product => `
  <div class="product-item">
  <h1 class="product-title">${product.productVariants[0].title}</h1>
  <img class="product-image" src="${product.productVariants[0].imageUrl}" alt="${product.productVariants[0].title}">
  <p class="product-price">${product.productVariants[0].price}</p>
  <button class="less">-</button>
  <button class="more">+</button>
  </div>`).join('');

  // append list to html
  element.innerHTML = productItem;
}
