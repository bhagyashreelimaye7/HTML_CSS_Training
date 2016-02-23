(function($){
  $(document).ready(function($) {
    $("#datepicker").datepicker();
  });
})(jQuery);

  function start(){

    var currentDate = new Date();
    var cmonth = currentDate.getMonth()+1;
    var cday =currentDate.getDate();
    var cyear = currentDate.getFullYear();
    var ctime = currentDate.getTime();


   var date = document.getElementById("datepicker").value;
   if (date) {

   var bdate= new Date(date);
   alert(bdate);
   var bmonth = bdate.getMonth()+1;
   var bday = bdate.getDate();
   var byear = bdate.getFullYear();
   var btime = bdate.getTime();


   var timeDiff = Math.abs(currentDate.getTime() - bdate.getTime());
   var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
   var diffHours = Math.ceil(Math.abs(currentDate - bdate) / 365);
   var diffMin = diffHours*60;

   document.getElementById("days").value= diffDays;
   document.getElementById("hours").value= currentDate.getHours();
   document.getElementById("min").value= currentDate.getMinutes();
   document.getElementById('err').innerHTML = "";
   }
   else{
    document.getElementById('err').innerHTML = "<span>Date cannot be blank</span>";//('Date cannot be blank');
   }

  }


function reset(){
  document.getElementById("datepicker").value="";
  document.getElementById("days").value="";
  document.getElementById("hours").value="";
  document.getElementById("min").value="";
}
