


$(function () {
    $("#arrivalDate").datepicker({
        minDate: 0
    });
    $("#departureDate").datepicker({
        minDate: 0
    });  
});

$("#search").click(function () { 
    var selectedArrivalDate = $("#arrivalDate").val();
    var selectedDepartureDate = $("#departureDate").val();

  

        if (Date.parse(selectedArrivalDate) > Date.parse(selectedDepartureDate)) {
            alert('From date should be before to date');   
        }
});

  $.get("rooms.xml"),
      function xmlCall(xml) {
          var node = "rooms";
          count = $(xml).find("rooms").length;
          console.log(count);
          console.log(help)
      };

 $("#search").click(function () { 
    console.log("clicked") , 
       $.get("rooms.xml"), 
    function (xml,status) {
        console.log("called")
        var text = "";
        $(xml).find("rooms").each(function () {
            console.log("workd")
            var roomType = $(this).attr("roomNumber");
            text += "Room Type: " + roomType + " <br> <br>";
        })
        $("#threeBedRoom").html(text);
    }
 })

         
    // $.get("rooms.xml"),
    //     function xmlCall(xml) {
    //         var list = " ";
    //         $(xml).find("rooms").each(function () {
    //             var roomNumber = $(this).find("roomType").text();

    //             list += "Room Types: " + roomNumber;
    //         })
    //         $("#threeBedRoom").html(list);
    //     }
   
 







