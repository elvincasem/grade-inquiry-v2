(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
        /* button  #back */
    $(document).on("click", "#back", function(evt)
    {
         activate_page("#mainpage"); 
    });
      
        /* button  #search */
    $(document).on("click", "#search", function(evt)
    {
        //
        $.ajax({
                            url: '  http://localhost/github/graderesult/search.php',
                            type: 'get',
                            data: {name: $('input#lastname').val(), idnumber: $('input#idnumber').val()},
                            success: function(response) {
                                $('#response').html(response);
                                console.log(response);
                            }
                        });
         activate_page("#grade-result"); 

    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
