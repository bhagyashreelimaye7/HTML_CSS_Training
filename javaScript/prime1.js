function prime(){
  //alert("in");
  var num=document.getElementById("no").value;
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
      alert("hi");
  }
  else{
    var error="error";
    //alert("error");
    document.getElementById("err").innerHTML=error;
  }
}
