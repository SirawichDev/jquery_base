/* $(document).ready(function(){
    var i =0;
    $("button").click(function () {
        
        $("h1.hello").css("color","red");
      });
  
}); */
$(function(){
    $("button").click(function () {  
     /*    $(".image").toggle(1000);
        $(".image").hide(1000);
        $(".image").show(1000); */
       $(".image").fadeOut(1000);
    });
});
/* 
$(function(){
    $("button").click(function () {  
        $("h1").toggle().css("color","pink");
    });
}); */