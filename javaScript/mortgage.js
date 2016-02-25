function GetSimpleInterest()
{

	var principle = parseFloat(document.getElementById("amt").value);
	var rate = parseFloat(document.getElementById("intRate").value);
	var tenure = parseInt(document.getElementById("tenure").value);


	var interestFrequency=document.getElementById("rate").value;

	if(interestFrequency=="monthly")
	{
		rate/=12;

	}
	if(interestFrequency=="daily")
		rate/=12*31;




	var interest=principle*Math.pow(1 +(rate/52),tenure/52);
	var amount=principle+interest;

	document.getElementById("interest").value=interest;
	document.getElementById("totalAmount").value=amount;
	document.getElementById("monthlyPayment").value=amount/(tenure *12);


}

