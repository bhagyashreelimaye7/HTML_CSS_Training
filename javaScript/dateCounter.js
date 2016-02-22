  function start(){
    var currentDate = new Date();
    var cmonth = currentDate.getMonth()+1;
    var cday =currentDate.getDate();
    var cyear = currentDate.getFullYear();
    var ctime = currentDate.getTime();


   var date = document.getElementById("date").value;
   if (date) {

   var bdate= new Date(date);
   var bmonth = bdate.getMonth()+1;
   var bday = bdate.getDate();
   var byear = bdate.getFullYear();
   var btime = bdate.getTime();


   var timeDiff = Math.abs(currentDate.getTime() - bdate.getTime());
   var diffDays = Math.ceil(timeDiff / (1000 * 3600 * 24));
   var diffHours = Math.ceil(Math.abs(currentDate - bdate) / 36e5);
   var diffMin = diffHours*60;

   document.getElementById("days").value= diffDays;
   document.getElementById("hours").value= diffHours;
   document.getElementById("min").value= diffMin;
   }
   else{
    document.getElementById('err').innerHTML = "<span>Date cannot be blank</span>";
   }

  }


function reset(){
  document.getElementById("date").value="";
  document.getElementById("days").value="";
  document.getElementById("hours").value="";
  document.getElementById("min").value="";
}
