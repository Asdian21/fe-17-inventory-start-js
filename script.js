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
    `${productTypeValue}: ${productNameValue} - ${productCountValue} шт.`
  );

  updateProductList();

  let productString = "";
  let obj = {};
  obj.type = productType;
  obj.name = productName;
  obj.count = productCount;
  products.push(obj);
  console.log(obj);
  products.forEach((e) => {
    productString += `<div class="product-item" >
   Тип:${e.type}
   Название:${e.name}
   Количество:${e.count}
   <button class="delete" onclick={btnClick(${i})}>Удалить</button>
   </div>`;
  });
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
