// Generated by CoffeeScript 1.10.0
(function() {
  var nameElement, shop;

  shop = {
    owner: {
      name: "Ian"
    }
  };

  nameElement = document.getElementById("owner-name");

  nameElement.innerHTML = shop.owner.name;

  document.title = shop.owner.name + "'s Pet Shop";

}).call(this);
