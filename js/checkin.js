document.addEventListener('DOMContentLoaded', function() {
    // Function for handling check-in form 
    document.getElementById('checkin-form').addEventListener('submit', function(event) {
      event.preventDefault();
      var name = document.getElementById('name').value;
      var roomNumber = document.getElementById('room-number').value;
      var checkinDate = document.getElementById('checkin-date').value;
  
      var table = document.getElementById('checkin').getElementsByTagName('tbody')[0];
      var newRow = table.insertRow(table.rows.length);
  
      var cell1 = newRow.insertCell(0);
      var cell2 = newRow.insertCell(1);
      var cell3 = newRow.insertCell(2);
  
      cell1.innerHTML = name;
      cell2.innerHTML = roomNumber;
      cell3.innerHTML = checkinDate;
  
      document.getElementById('checkin-form').reset();
    });
  
    // Function for check-out form 
    document.getElementById('checkout-form').addEventListener('submit', function(event) {
      event.preventDefault();
      var roomNumber = document.getElementById('checkout-room').value;
      var table = document.getElementById('checkin').getElementsByTagName('tbody')[0];
      for (var i = 0; i < table.rows.length; i++) {
          if (table.rows[i].cells[1].innerHTML == roomNumber) {
              var name = table.rows[i].cells[0].innerHTML;
              var checkinDate = table.rows[i].cells[2].innerHTML;
              var checkoutDate = new Date().toLocaleDateString();
  
              var checkoutTable = document.getElementById('checkout').getElementsByTagName('tbody')[0];
              var newRow = checkoutTable.insertRow(checkoutTable.rows.length);
  
              var cell1 = newRow.insertCell(0);
              var cell2 = newRow.insertCell(1);
              var cell3 = newRow.insertCell(2);
  
              cell1.innerHTML = name;
              cell2.innerHTML = roomNumber;
              cell3.innerHTML = checkoutDate;
  
              table.deleteRow(i);
              break;
          }
      }
      document.getElementById('checkout-form').reset();
    });
  
    // Logout 
    window.logout = function() {
      window.location.href = "index.html";
    };
  });
  