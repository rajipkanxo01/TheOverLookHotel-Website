



 $(function () {
    // initializing arrival date and departure date
    $("#arrivalDate").datepicker({
        minDate: 0 , dateFormat: "yy-mm-dd"
    });
    $("#departureDate").datepicker({
        minDate: 0 , dateFormat: "yy-mm-dd"
    });
}),


// on search button click
// $("#search").click(function () {
//     var selectedArrivalDate = $("#arrivalDate").val();
//     var selectedDepartureDate = $("#departureDate").val();



//     if (Date.parse(selectedArrivalDate) > Date.parse(selectedDepartureDate)) {
//         alert('From date should be before to date');
//     }

// });





$("#search").click(function () {
    var singleBedRoomSuiteCount = 0;
    var threeSingleBedRoomSuiteCount = 0;
    var singleRoomCount = 0;
    var twoSingleRoomSuiteCount = 0;
    var doubleRoomCount = 0;


    var selectedArrivalDate = $("#arrivalDate").val();
    var selectedDepartureDate = $("#departureDate").val();
    

    $.get("rooms.xml", function (xml) {
        $(xml).find("rooms").each(function() {

        var roomStartDate = $(this).find("bookStartDate").text();
        var roomEndDate = $(this).find("bookEndDate").text();
        var roomType = $(this).find("roomType").text();
       var roomNumber = $(this).attr("roomNumber"); 
       
       
        var newRoomStartDate = new Date(roomStartDate);
        var newRoomEndDate = new Date(roomEndDate);

        var newSelectedArrivalDate = new Date(selectedArrivalDate);
        var newSelectedDepartureDate = new Date(selectedDepartureDate);
  

        if ((roomType === "Single Bedroom Suite")) {
            if(((selectedArrivalDate <= roomStartDate && roomStartDate <=
             selectedDepartureDate || selectedArrivalDate <= roomEndDate &&
             roomEndDate <= selectedDepartureDate))) {
                 alert("Not available " + roomNumber);
             } 

            // if (((roomStartDate >= selectedArrivalDate && roomStartDate <= selectedDepartureDate) 
            //  (roomEndDate >= selectedArrivalDate && roomEndDate <= selectedDepartureDate))) {
            //      alert ("booked " + roomNumber )
             }
             else {
                 alert('not booked ' + roomNumber );
             }
        };
    },
    ) 
});
})
