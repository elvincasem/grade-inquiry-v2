(function()
{
 "use strict";
 /*
   hook up event handlers 
 */
 function register_event_handlers()
 {
    
    
     /* button  #search */
    
    
        /* button  #search */
    
    
        /* button  #back */
    
    
        /* button  #back */
    $(document).on("click", "#back", function(evt)
    {
         activate_page("#mainpage"); 
    });
    
        /* button  #search */
    
    
        /* button  #search */
    $(document).on("click", "#search", function(evt)
    {
        /* your code goes here */ 
    });
    
        /* button  #search */
    $(document).on("click", "#search", function(evt)
    {
        //
        $.ajax({
                            url: 'http://localhost/github/graderesult/search.php',
                            type: 'get',
                            data: {name: $('input#lastname').val(), idnumber: $('input#idnumber').val()},
                            success: function(response) {
                                $('#response').html(response);
                                console.log(response);
                            }
                        });
        //console.log($.ajax);
        
        activate_page("#grade-result"); 
    });
    
    }
 document.addEventListener("app.Ready", register_event_handlers, false);
})();
