$(document).ready(function() {
	SetUnknown();
	
	function SetUnknown(){
	var JAI ="???";
	var TI1 = "???";
	var TI2 = "???";
	var TS = "???";
	var TP = "???";
	var TK = "???";
	var RT1 = "???";
	var RT2 = "???";
	var RT3 = "???";
	var GF = "???";
	var MF = "???";
	var RM1 = "???";
	var RM2 = "???";
	var NK = "???";
	var NE = "???";
	
	var TI1J = "???";
	var TI2J = "???";
	var TSJ = "???";
	var TPJ = "???";
	var TKJ = "???";
	var RT1J = "???";
	var RT2J = "???";
	var RT3J = "???";
	var GFJ = "???";
	var MFJ = "???";
	var RM1J = "???";
	var RM2J = "???";
	var NKJ = "???";
	var NEJ = "???";
	}
	
    $("#button0").click(function(){
     
        if($(this).is(":checked")){
            $("#tester").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italic'
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
            $(".Slot:nth-child(2)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italic'
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
            $(".Slot:nth-child(3)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italic'
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
            $(".Slot:nth-child(4)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italic'
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
            $(".Slot:nth-child(5)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italic'
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
            $(".Slot:nth-child(6)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italic'
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
            $(".Slot:nth-child(7)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italic'
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
            $(".Slot:nth-child(8)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italic'
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
            $(".Slot:nth-child(9)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italic'
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
            $(".Slot:nth-child(10)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italic'
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
            $(".Slot:nth-child(11)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italic'
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
            $(".Slot:nth-child(12)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italic'
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
            $(".Slot:nth-child(13)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italic'
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
            $(".grayColor:nth-child(14)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italic'
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
            $(".grayColor:nth-child(15)").css({'color': 'red','text-transform': 'uppercase', 'font-style': 'italic'
                                 ,'text-decoration': 'line-through'});
            $("#14").prop("disabled", true);
            $("#select14").prop("disabled", true);
        } else {
            $(".grayColor:nth-child(15)").css({'color': 'white','text-transform': 'capitalize', 'text-decoration': 'none'});
            $("#14").prop("disabled", false);
            $("#select14").prop("disabled", false);
        }
    });
      $("#reset").click(function(){
	      $('input').val('');
	      $('select').val('');
	      $('textarea').val('');
	      $('input:checkbox').removeAttr('checked');
	  });
    $("#copy").click(function(){
	 doExport();
	 $("#export_field").select();
	    
  try {
    var successful = document.execCommand('copy');
    var msg = successful ? 'successful' : 'unsuccessful';
    console.log('Copying text command was ' + msg);
  } catch (err) {
    console.log('Oops, unable to copy');
  }
    });
      $("#export").click(function(){
		doExport();	
    });    
function doExport(){
		      var notes = $("#notes").val();
		  var JAI = $("#jailor").val();
		  var TI1 = $("#1").val();
		  var TI2 = $("#2").val();
		  var TS = $("#3").val();
		  var TP = $("#4").val();
		  var TK = $("#5").val();
		  var RT1 = $("#6").val();
		  var RT2 = $("#7").val();
		  var RT3 = $("#8").val();
		  var GF = $("#9").val();
		  var MF = $("#10").val();
		  var RM1 = $("#11").val();
		  var RM2 = $("#12").val();
		  var NK = $("#13").val();
		  var NE = $("#14").val();
		  
		  var TI1J = $("#select1").val();
		  var TI2J = $("#select2").val();
		  var TSJ = $("#select3").val();
		  var TPJ = $("#select4").val();
		  var TKJ = $("#select5").val();
		  var RT1J = $("#select6").val();
		  var RT2J = $("#select7").val();
		  var RT3J = $("#select8").val();
		  var MFJ = $("#select10").val();
		  var RM1J = $("#select11").val();
		  var RM2J = $("#select12").val();
		  var NKJ = $("#select13").val();
		  var NEJ = $("#select14").val();
		  
			var export_string = notes + '\n\n JAI ' + JAI +
			'\n TI ' + TI1 + " " + TI1J +
			'\n TI ' + TI2 + " " + TI2J +
			'\n TS ' + TS + " " + TSJ +
			'\n TP ' + TP + " " + TPJ +
			'\n TK ' + TK + " " + TKJ +
			'\n RT ' + RT1 + " " + RT1J +
			'\n RT ' + RT2 + " " + RT2J +
			'\n RT ' + RT3 + " " + RT3J +
			'\n GF ' + GF + 
			'\n MF ' + MF + " " + MFJ +
			'\n RM ' + RM1 + " " + RM1J +
			'\n RM ' + RM2 + " " + RM2J +
			'\n NK ' + NK + " " + NKJ +
			'\n NE ' + NE + " " + NEJ ;		
		  $("#export_field").val(export_string);
}
});
