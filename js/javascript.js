$(document).ready(function() {
	
    $("#button0").click(function(){
     
        if($(this).is(":checked")){
            $("#tester").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italiac'
                                 ,'text-decoration': 'line-through'});
            $("#jailor").prop("disabled", true);
            $("#select0").prop("disabled", true);
        } else {
            $(".Slot:nth-child(1)").css({'color': '#7FF308','text-transform': 'capitalize', 'text-decoration': 'none'});
            $("#jailor").prop("disabled", false);
            $("#select0").prop("disabled", false);
        }
    });
    
      $("#button1").click(function(){
        if($(this).is(":checked")){
            $(".Slot:nth-child(2)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italiac'
                                 ,'text-decoration': 'line-through'});

             $("#1").prop("disabled", true);
             $("#select1").prop("disabled", true);

        } else {
            $(".Slot:nth-child(2)").css({'color': '#7FF308','text-transform': 'capitalize', 'text-decoration': 'none'});
            $("#1").prop("disabled", false);
            $("#select1").prop("disabled", false);
        }
    });
    
       $("#button2").click(function(){
        if($(this).is(":checked")){
            $(".Slot:nth-child(3)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italiac'
                                 ,'text-decoration': 'line-through'});
            $("#2").prop("disabled", true);
            $("#select2").prop("disabled", true);
        } else {
            $(".Slot:nth-child(3)").css({'color': '#7FF308','text-transform': 'capitalize', 'text-decoration': 'none'});
            $("#2").prop("disabled", false);
            $("#select2").prop("disabled", false);
        }
    });
    
        $("#button3").click(function(){
        if($(this).is(":checked")){
            $(".Slot:nth-child(4)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italiac'
                                 ,'text-decoration': 'line-through'});
            $("#3").prop("disabled", true);
            $("#select3").prop("disabled", true);
        } else {
            $(".Slot:nth-child(4)").css({'color': '#7FF308','text-transform': 'capitalize', 'text-decoration': 'none'});
            $("#3").prop("disabled", false);
            $("#select3").prop("disabled", false);
        }
    });
    
          $("#button4").click(function(){
        if($(this).is(":checked")){
            $(".Slot:nth-child(5)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italiac'
                                 ,'text-decoration': 'line-through'});
            $("#4").prop("disabled", true);
            $("#select4").prop("disabled", true);
        } else {
            $(".Slot:nth-child(5)").css({'color': '#7FF308','text-transform': 'capitalize', 'text-decoration': 'none'});
            $("#4").prop("disabled", false);
            $("#select4").prop("disabled", false);
        }
    });
    
              $("#button5").click(function(){
        if($(this).is(":checked")){
            $(".Slot:nth-child(6)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italiac'
                                 ,'text-decoration': 'line-through'});
            $("#5").prop("disabled", true);
            $("#select5").prop("disabled", true);
        } else {
            $(".Slot:nth-child(6)").css({'color': '#7FF308','text-transform': 'capitalize', 'text-decoration': 'none'});
            $("#5").prop("disabled", false);
            $("#select5").prop("disabled", false);
        }
    });
    
            $("#button6").click(function(){
        if($(this).is(":checked")){
            $(".Slot:nth-child(7)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italiac'
                                 ,'text-decoration': 'line-through'});
            $("#6").prop("disabled", true);
            $("#select6").prop("disabled", true);
        } else {
            $(".Slot:nth-child(7)").css({'color': '#7FF308','text-transform': 'capitalize', 'text-decoration': 'none'});
            $("#6").prop("disabled", false);
            $("#select6").prop("disabled", false);
        }
    });
    
            $("#button7").click(function(){
        if($(this).is(":checked")){
            $(".Slot:nth-child(8)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italiac'
                                 ,'text-decoration': 'line-through'});
            $("#7").prop("disabled", true);
            $("#select7").prop("disabled", true);
        } else {
            $(".Slot:nth-child(8)").css({'color': 'rgb(66, 192, 251)','text-transform': 'capitalize', 'text-decoration': 'none'});
            $("#7").prop("disabled", false);
            $("#select7").prop("disabled", false);
        }
    });
    
          $("#button8").click(function(){
        if($(this).is(":checked")){
            $(".Slot:nth-child(9)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italiac'
                                 ,'text-decoration': 'line-through'});
            $("#8").prop("disabled", true);
            $("#select8").prop("disabled", true);
        } else {
            $(".Slot:nth-child(9)").css({'color': '#DD0000','text-transform': 'capitalize', 'text-decoration': 'none'});
            $("#8").prop("disabled", false);
            $("#select8").prop("disabled", false);
        }
    });
    
        $("#button9").click(function(){
        if($(this).is(":checked")){
            $(".Slot:nth-child(10)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italiac'
                                 ,'text-decoration': 'line-through'});
            $("#9").prop("disabled", true);
            $("#select9").prop("disabled", true);
        } else {
            $(".Slot:nth-child(10)").css({'color': '#DD0000','text-transform': 'capitalize', 'text-decoration': 'none'});
            $("#9").prop("disabled", false);
            $("#select9").prop("disabled", false);
        }
    });
    
    $("#button10").click(function(){
        if($(this).is(":checked")){
            $(".Slot:nth-child(11)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italiac'
                                 ,'text-decoration': 'line-through'});
            $("#10").prop("disabled", true);
            $("#select10").prop("disabled", true);
        } else {
            $(".Slot:nth-child(11)").css({'color': 'rgb(66, 192, 251)','text-transform': 'capitalize', 'text-decoration': 'none'});
            $("#10").prop("disabled", false);
            $("#select10").prop("disabled", false);
        }
    });
    
       $("#button11").click(function(){
        if($(this).is(":checked")){
            $(".Slot:nth-child(12)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italiac'
                                 ,'text-decoration': 'line-through'});
            $("#11").prop("disabled", true);
            $("#select11").prop("disabled", true);
        } else {
            $(".Slot:nth-child(12)").css({'color': '#C0BFBE','text-transform': 'capitalize', 'text-decoration': 'none'});
            $("#11").prop("disabled", false);
            $("#select11").prop("disabled", false);
        }
    });
    
      $("#button12").click(function(){
        if($(this).is(":checked")){
            $(".Slot:nth-child(13)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italiac'
                                 ,'text-decoration': 'line-through'});
            $("#12").prop("disabled", true);
            $("#select12").prop("disabled", true);
        } else {
            $(".Slot:nth-child(13)").css({'color': '#C0BFBE','text-transform': 'capitalize', 'text-decoration': 'none'});
            $("#12").prop("disabled", false);
            $("#select12").prop("disabled", false);
        }
    });
    
      $("#button13").click(function(){
        if($(this).is(":checked")){
            $(".grayColor:nth-child(14)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italiac'
                                 ,'text-decoration': 'line-through'});
            $("#13").prop("disabled", true);
            $("#select13").prop("disabled", true);
        } else {
            $(".grayColor:nth-child(14)").css({'color': '#C0BFBE','text-transform': 'capitalize', 'text-decoration': 'none'});
            $("#13").prop("disabled", false);
            $("#select13").prop("disabled", false);
        }
    });
    
        $("#button14").click(function(){
        if($(this).is(":checked")){
            $(".grayColor:nth-child(15)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italiac'
                                 ,'text-decoration': 'line-through'});
            $("#14").prop("disabled", true);
            $("#select14").prop("disabled", true);
        } else {
            $(".grayColor:nth-child(15)").css({'color': 'white','text-transform': 'capitalize', 'text-decoration': 'none'});
            $("#14").prop("disabled", false);
            $("#select14").prop("disabled", false);
        }
    });
    
    

});
