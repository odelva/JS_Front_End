 $(document).ready(function() {
  
var audio = $("audio")[0];
var audio2=$("audio")[1];
var orig_colors=["#004d99", "#004d1a" ,"#b30000", "#b3b300"];
var color_arr=["blue","#00cc00","red","yellow"];
var color_id=["blue","green","red","yellow"];
var result_arr=[];
var user_clicked=[];
var stricton=false;
var running=false;
var round_level=1;
var random_num=null;
var poweron=false;




    $('#switchoff').click(function(){

      poweron=true;
       $('#switchoff').css('visibility', 'hidden');
       $('#switchon').css('visibility', 'visible');
       if(poweron){
       
       $('#inner_start').css("pointer-events", "auto");
       
       alert("power's on");
     
      


      $('#display').css('color', 'red');

        $('#inner_strict').on('click',function(){
          

           stricton=!stricton;
           
           alert("stricton: "+stricton);

          

            if(stricton===true){
              $('#strict_alert').css('background-color', 'red');
            
           }
            else if(stricton===false){

            $('#strict_alert').css('background-color', 'grey');
          
           }
          
           
        });

        

        $('#inner_start').on('click', function(){
            running=true;
            alert("inner_start clicked");
             if(running){
             alert("running is true");
             }
         });



       $('.fourcolors').click(function(){
        alert("fourcolors");
    });
       }
    });

  $('#switchon').click(function(){
      $('#display').text('--');
      $('#display').css('color', '#330000');
       $('#strict_alert').css('background-color', 'grey');
      $("#blue").css("background-color", "#004d99"); 
      $("#green").css("background-color", "#004d1a"); 
      $("#red").css("background-color", "#b30000"); 
      $("#yellow").css("background-color", "#b3b300");
      $("#"+color_id[random_num]).css("background-color", orig_colors[random_num]);  
      result_arr=[];
      user_clicked=[];
      running=false;
      stricton=false;      
      round_level=1;
      poweron=false;
       $('#switchoff').css('visibility', 'visible');
       $('#switchon').css('visibility', 'hidden');
       $('#inner_start').css("pointer-events", "none");
       alert("running is false");
    });




});