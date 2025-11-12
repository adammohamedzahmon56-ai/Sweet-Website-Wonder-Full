var buyButtons = document.querySelectorAll(".buy");
var cancelButtons = document.querySelectorAll(".cancel");
var showproduct = document.getElementById("showproduct");
var totalprice = document.getElementById("totalprice");
var showprice = document.getElementById("showprice");
var sendorder = document.getElementById("sendorder");

var selectedProducts = [];
var total = 0;

buyButtons.forEach(function (btn) {
  btn.onclick = function () {
    var name = btn.getAttribute("title");
    var price = Number(btn.getAttribute("data-price"));

    if (!selectedProducts.includes(name)) {
      selectedProducts.push(name);
      total += price;
      showproduct.innerText = selectedProducts.join(" , ");
    } else {
      alert("You already added this product!");
    }
  };
});

cancelButtons.forEach(function (btn) {
  btn.onclick = function () {
    var name = btn.getAttribute("title");
    var price = Number(btn.getAttribute("data-price"));
    var index = selectedProducts.indexOf(name);

    if (index !== -1) {
      selectedProducts.splice(index, 1);
      total -= price;
      showproduct.innerText = selectedProducts.join(" , ");
      alert(name + " has been removed!");
    }
  };
});

showprice.onclick = function () {
  totalprice.innerText = total + " EGP";
};

sendorder.onclick = function () {
  if (selectedProducts.length === 0) {
    alert("You haven't selected any products!");
    return;
  }
  var phone = "201156044912";
  var message =
    "Hello! I would like to order: " +
    selectedProducts.join(", ") +
    " with a total of " +
    total +
    " EGP.";
  var url = `https://wa.me/${phone}?text=${encodeURIComponent(message)}`;
  window.open(url, "_blank");
};
