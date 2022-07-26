$cartype = "";
$(function () {
    $(document).scroll(function () {
        var $nav = $("nav");
        var $navbrand = $(".navbar-brand");
        var $navitem = $(".nav-item");
        $nav.toggleClass('scrolled', $(this).scrollTop() > $nav.height());
        $navbrand.attr('style','color:black !important');
        $navitem.attr('style','color:black !important');
        if($(this).scrollTop() < 20){
            $navbrand.attr('style','color:white !important');
            $navitem.attr('style','color:white !important');
        }
    });
});

$("#hatchback").on("click", function(){
    $("#cars").fadeOut("slow", function() {
        $("#change").text("Choose Your Plan :");
        $("#silver").text("300");
        $("#gold").text("400");
        $("#platinum").text("600");
        $("#prices").css("display", "flex");
        $cartype = "HatchBack";
      });
});

$("#sedan").on("click", function(){
    $("#cars").fadeOut("slow", function() {
        $("#change").text("Choose Your Plan :");
        $("#silver").text("400");
        $("#gold").text("500");
        $("#platinum").text("700");
        $("#prices").css("display", "flex");
        $cartype = "Sedan";
      });
});

$("#suv-muv").on("click", function(){
    $("#cars").fadeOut("slow", function() {
        $("#change").text("Choose Your Plan :");
        $("#silver").text("500");
        $("#gold").text("600");
        $("#platinum").text("900");
        $("#prices").css("display", "flex");
        $cartype = "Suv-Muv";
      });
});

$("#silver-btn").on("click", function(){
    var $price = $("#silver").text();
    $("#prices").fadeOut("slow", function() {
        $("#change").text("Fill Some Details :");
        $("#form").css("display", "flex");
        $("#disabledInput").val($cartype);
    });
});

$("#gold-btn").on("click", function(){
    var $price = $("#gold").text();
    $("#prices").fadeOut("slow", function() {
        $("#change").text("Fill Some Details :");
        $("#form").css("display", "flex");
        $("#disabledInput").val($cartype);
    });
});

$("#platinum-btn").on("click", function(){
    var $price = $("#platinum").text();
    $("#prices").fadeOut("slow", function() {
        $("#change").text("Fill Some Details :");
        $("#form").css("display", "flex");
        $("#disabledInput").val($cartype);
    });
});