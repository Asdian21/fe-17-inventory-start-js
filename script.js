let addProduct = document.getElementsByClassName("add-product")[0];
addProduct.addEventListener("click", addProduction);
let products = [];

function addProduction() {
  let productType = document.getElementById("type-select");
  let productName = document.getElementById("product-name");
  let productCount = document.getElementById("product-count");
  let productList = document.getElementsByClassName("product-item")[0];

  let productTypeValue = productType.value;
  let productNameValue = productName.value;
  let productCountValue = productCount.value;

  products.push(
    `${productTypeValue}: ${productNameValue} - ${productCountValue} штук`
  );

  updateProductList();
}

let clearList = document.getElementsByClassName("clear-list")[0];
clearList.addEventListener("click", clearProduction);

function clearProduction() {
  products.pop();
  updateProductList();
}

function updateProductList() {
  let productList = document.getElementsByClassName("product-item")[0];
  if (products.length === 0) {
    productList.innerHTML = "Продуктов не найдено";
  } else {
    productList.innerHTML = "Наш продуктовый лист:<br>" + products.join("<br>");
  }
}
