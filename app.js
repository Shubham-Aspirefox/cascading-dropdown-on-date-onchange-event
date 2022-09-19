const nameList = ["ben", "doremon", "ganesh", "flower", "donald-duck"];
// var options = $('#options');
$("#date").change(function() {
    // console.log("clicked");
   for(i=0;i<nameList.length;i++){
    var select = $('<option></option>');
    select.attr('value',`${nameList[i]}`);
    select.text(`${nameList[i]}`);
    $("#options").append(select);
}
})

// validation**
$(document).ready (function () {  
    $("#validForm").validate ({
        rules:{
            date:{
                required:true
            }, 
            options:{
                required:true
            }
        },
        messages:{
            date:{
                required:'please enter  date'
            }, 
            options:{
                required:'please select an option'
            }
        }
    });  
  });