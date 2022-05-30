



 $(function () {
    // initializing arrival date and departure date
    $("#arrivalDate").datepicker({
        minDate: 0 , dateFormat: "yy-mm-dd"
    });
    $("#departureDate").datepicker({
        minDate: 0 , dateFormat: "yy-mm-dd"
    });
}),




$("#search").click(function () {

    var singleBedRoomSuiteCount = 3;
    var threeSingleBedRoomSuiteCount = 1;
    var twoSingleRoomSuiteCount = 1;
    var singleRoomCount = 10;
    var doubleRoomCount = 27;

    var selectedArrivalDate = $("#arrivalDate").val();
    var selectedDepartureDate = $("#departureDate").val();

        if (Date.parse(selectedArrivalDate) > Date.parse(selectedDepartureDate)) {
             alert('From date should be before to date');
     }
    

    $.get("../xml/rooms.xml", function (xml) {
        $(xml).find("rooms").each(function() {

        var roomStartDate = $(this).find("bookStartDate").text();
        var roomEndDate = $(this).find("bookEndDate").text();
        var roomType = $(this).find("roomType").text();
       var roomNumber = $(this).attr("roomNumber"); 
    
  

        if ((roomType === "Single Bedroom Suite")) {
            if(((selectedArrivalDate <= roomStartDate && roomStartDate <=
             selectedDepartureDate || selectedArrivalDate <= roomEndDate &&
             roomEndDate <= selectedDepartureDate))) {
                 if(singleBedRoomSuiteCount > 0)
                 {
                    singleBedRoomSuiteCount--;
                 }
                 
             } 
        }  
        
        if ((roomType === "3-Single Bedroom Suite")) {
            if(((selectedArrivalDate <= roomStartDate && roomStartDate <=
                selectedDepartureDate || selectedArrivalDate <= roomEndDate &&
                roomEndDate <= selectedDepartureDate))) {
                    threeSingleBedRoomSuiteCount = 0;
                } 
            }  
        
        if ((roomType === "2-Single Bedroom Suite")) {
            if(((selectedArrivalDate <= roomStartDate && roomStartDate <=
                selectedDepartureDate || selectedArrivalDate <= roomEndDate &&
                roomEndDate <= selectedDepartureDate))) {
                    twoSingleRoomSuiteCount = 0;
                } 
            }  

        if ((roomType === "Single Room")) {
            if(((selectedArrivalDate <= roomStartDate && roomStartDate <=
                selectedDepartureDate || selectedArrivalDate <= roomEndDate &&
                roomEndDate <= selectedDepartureDate))) {
                    if(singleRoomCount > 0)
                    {
                        singleRoomCount--;
                    }
                    
                } 
            } 

        if ((roomType === "Double Room")) {
            if(((selectedArrivalDate <= roomStartDate && roomStartDate <=
                selectedDepartureDate || selectedArrivalDate <= roomEndDate &&
                roomEndDate <= selectedDepartureDate))) {
                    if(doubleRoomCount > 0)
                    {
                        doubleRoomCount--;
                    }
                    
                } 
            } 
        });

        $("#singleBedRoomSuite").html(singleBedRoomSuiteCount);
        $("#threeSingleBedRoomSuite").html(threeSingleBedRoomSuiteCount);
        $("#twoSingleBedRoomSuite").html(twoSingleRoomSuiteCount);
        $("#singleBedRoom").html(singleRoomCount);
        $("#doubleBedRoom").html(doubleRoomCount);
    },
    ) 
});
