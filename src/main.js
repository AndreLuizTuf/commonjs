const p = require("./services/products");
async function main() {
  console.log("carrinho compras: ");
  p.getFullName("408", "mousepad");
  p.getProductLabel("mousepad");
}

main();
