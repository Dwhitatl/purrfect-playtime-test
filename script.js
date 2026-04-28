// ===== BUY BUTTON HANDLER =====
    // Function: buyProduct()
    // Purpose: Sends selected item to the platform payment processor
    // Triggers: Product buttons and checkout form button
    function buyProduct(name, amountCents) {
      var email = document.getElementById('email').value || 'guest@example.com';
      var buyerName = document.getElementById('name').value || '';
      window.__processPayment({ amountCents: amountCents, email: email, productName: name, name: buyerName, quantity: 1 });
    }
    document.querySelectorAll('.buy-btn').forEach(function(btn){
      btn.addEventListener('click', function(){ buyProduct(btn.dataset.name, parseInt(btn.dataset.price, 10)); });
    });
    document.getElementById('checkoutBtn').addEventListener('click', function(){
      var sel = document.getElementById('product');
      buyProduct(sel.value, parseInt(sel.selectedOptions[0].dataset.price, 10));
    });