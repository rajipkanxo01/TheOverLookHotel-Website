$.ajax({
    
    url: "rooms.xml",
    dataType: "xml",
    success: function (data) {
        // console.log(data);
        $(data).find("RoomList rooms").each(function() {
            count = 0;
            alert(count);
            
        });
    },
    error: function () { 
        $(".timeline").text("Failed");
     }
});