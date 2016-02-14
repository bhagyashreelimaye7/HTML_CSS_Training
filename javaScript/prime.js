/*function prime(){
  //alert("in");
  //var num=document.getElementById("no").value;
   var num= document.getElementById("no");
  //alert(num);
  // var i=2;
  // while(num>1)
  // {
  //     if(i%2!=0)
  //     {
  //       if(num%i == 0)
  //       {

  //         alert(i);
  //         document.getElementById("output").value+=i;
  //         num=num/i;
  //         i++;
  //       }
  //       else{
  //         i++;
  //       }
  //     }
  //}
  if(isNaN(num)){

      document.getElementById("err").innerHTML="error";
  }
  else{

    //alert("error");
    alert("hi");
  }
}*/

/*function prime(){
  if(!isNaN($('#num').val())){
    while (num%2 == 0){
      document.getElementById('output').innerText="Prime factors:"+2;
      num=num/2;
    }
    for (int i = 3; i <= sqrt(num); i = i+2){
      while(num%i==0){
        document.getElementById('output').innerText="Prime factors:"+i;
        num=num/i;
      }
    }
    if(num>2){
      document.getElementById('output').innerText="Prime factors:"+num;
    }
  }
}
*/


function prime() {
  if(!isNaN($('#num').val()))
  {
  var number=$('#num').val();
        var factors = [], i;

        for (i = 2; i <= number; i++) {
            while ((number % i) === 0) {

                factors.push(i);
                number=number/i;
            }
        }

     var output=factors.join();
     document.getElementById('output').innerText="Prime factors:"+output;
  }
  else
    {
      document.getElementById('output').innerText="Wrong number format";
    }
}

