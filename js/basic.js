$(document).ready(function(){
    var i =0;
    $("button").click(function () {
        if( i==0){
        $("h1.hello").css("color","red");
        i++;
        }
        else
        $("h1.hello").css("color","blue");
    });
  
});