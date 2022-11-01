$(document).ready(function(){
    $("button").click(function(){
    var slno = $("#slno").val();
    var firstname = $("#firstname").val();
    var lastname = $("#lastname").val();
    var city = $("#city").val();
    var country = $("#country").val();
    var row = "<tr><td>" + slno + "</td><td>" + firstname +"</td><td>" + lastname + "</td><td>" + city + "</td><td>" + country + "</td></tr>";
    $("table tbody").append(row);
         var addSerialNumber = function () {
      $('table tr').each(function (index) {
        $(this).find('td:nth-child(1)').html(index - 1 + 1);
      });
    };
    addSerialNumber();
    });
    
  });
