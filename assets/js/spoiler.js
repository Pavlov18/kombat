     $(document).ready(function(){
          $('.spoiler_links').click(function() {
              if ($(this).parent().children('div.spoiler_body').hasClass("close-body")) {
                  $(this).parent().children('div.spoiler_body').removeClass("close-body").addClass("anim-body");
                  $(this).addClass("closed");
              }
              else {
                  $(this).parent().children('div.spoiler_body').addClass("close-body").removeClass("anim-body");
                  $(this).removeClass("closed");
              }
          });
     });