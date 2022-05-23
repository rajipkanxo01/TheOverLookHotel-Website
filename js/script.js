


// $(function () {
//     $("#arrivalDate").datepicker({
//         minDate: 0
//     });
//     $("#departureDate").datepicker({
//         minDate: 0
//     });  
// });



   
 


 $(function () {
    // initializing arrival date and departure date
    $("#arrivalDate").datepicker({
        minDate: 0
    });
    $("#departureDate").datepicker({
        minDate: 0
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


// get bookstartdate and book end date
$.get("rooms.xml"), function (xml) {
    var bookStartDate = $(xml).find("bookStartDate");
    var displayDate = $(bookStartDate[0]).text();
    $("#threeBedRoom").html(displayDate);

}

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

        var arrivalDate = $(this).find("bookStartDate").text();
        var departureDate = $(this).find("bookEndDate").text();
        var roomType = $(this).find("roomType").text();            

        // single bedroom suite
        if ((roomType === "Single Bedroom Suite" && !((departureDate < selectedArrivalDate) && (departureDate < selectedDepartureDate)
        && (arrivalDate < selectedArrivalDate) && (departureDate < selectedArrivalDate)))) {
           singleBedRoomSuiteCount++;     
        }

        // 3-single bedroom suite
        // if ((roomType === "3-Single Bedroom Suite" && !((departureDate < selectedArrivalDate) && (departureDate < selectedDepartureDate) &&
        //         (arrivalDate < selectedArrivalDate) && (departureDate < selectedArrivalDate)))) {
        //     threeSingleBedRoomSuiteCount++;
        // }

        // // 2-single bedroom suite
        // if ((roomType === "2-Single Bedroom Suite" && !((departureDate < selectedArrivalDate) && (departureDate < selectedDepartureDate) &&
        //         (arrivalDate < selectedArrivalDate) && (departureDate < selectedArrivalDate)))) {
        //     twoSingleRoomSuiteCount++;
        // }

        // // single room
        // if ((roomType === "Single Room" && !((departureDate < selectedArrivalDate) && (departureDate < selectedDepartureDate) &&
        //         (arrivalDate < selectedArrivalDate) && (departureDate < selectedArrivalDate)))) {
        //     singleRoomCount++;
        // }

        // // double room
        // if ((roomType === "Double Room" && !((departureDate < selectedArrivalDate) && (departureDate < selectedDepartureDate) &&
        //         (arrivalDate < selectedArrivalDate) && (departureDate < selectedArrivalDate)))) {
        //     doubleRoomCount++;
        // }
        

        });

        console.log(twoSingleRoomSuiteCount);

        $("#singleBedRoomSuite").html(singleBedRoomSuiteCount);
        // $("#twoBedRoomSuite").html(twoSingleRoomSuiteCount);
        // $("#threeSingleBedRoomSuite").html(threeSingleBedRoomSuiteCount);
        // $("#singleBedRoom").html(singleRoomCount);
        // $("#doubleBedRoom").html(doubleRoomCount);

    },
    
    ) 
});

    


        








