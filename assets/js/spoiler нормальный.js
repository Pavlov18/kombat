     $(document).ready(function(){
          $('.spoiler_links').click(function(){

             $(this).parent().children('div.spoiler_body').toggle('normal');
                  if ((this).classList.contains("closed")) {
         (this).classList.remove("closed");
       }
       else {
         (this).classList.add("closed");
       }
             return false;
          });

     });
