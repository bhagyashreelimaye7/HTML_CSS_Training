var flag=1;
var modWord="";
var tempStore="";


function Trim()
{
	//e.g. for "aabcbded" the chosen characters should be the first and second "b")
	//e.g. for "abcbba" you'd end up with "acbab")
	//e.g. "abc_def" would become "abc")

	var word=document.getElementById("text").value;

	var firstCharacter=0;
	var lastCharcater=word.length-1;

	//var similarChars="";
	FarthestSimilarChars(word,0,word.length-1);
}


function FarthestSimilarChars(word,start,end)
{

	var tempStart=start;
	var tempEnd=end;

	var ctr=-1;

	while(ctr!=0)
	{



			var startIndexArray=Array();
			var endIndexArray=Array();
			var charsLength=Array();
			var ctr=0;



			for(;start<word.length;start++)
			{

					for(end=tempEnd;end>start;end--)
					{

						//alert(start+","+end);



						if(word.charAt(start)==word.charAt(end))//identical detected
						{
							//alert("yo==>"+start+","+end);
							startIndexArray[ctr]=start;
							endIndexArray[ctr]=end;
							charsLength[ctr]=parseInt(end)-parseInt(start);
							ctr++;

						}


					}

			}





			if(ctr!=0) //identicals exist
			{
				flag--;


				var max=0;
				var maxIndex=0;

				for(var x=0;x<charsLength.length;x++)
				{


					if(parseInt(charsLength[x])>parseInt(max))
					{
						max=charsLength[x];
						maxIndex=x;
					}

				}

				//got the largest identical string
				//alert(  "The farthest identical text is "+ word.substring(startIndexArray[maxIndex],endIndexArray[maxIndex]+1)  );


				 tempStart=startIndexArray[maxIndex]+1;
				 tempEnd=endIndexArray[maxIndex]-1;

				//FarthestSimilarChars(word, , )
				continue;
			}


		}//while


	//after loop break ..
	//else // no identicals
	//{
		//flag++;
		//alert(flag)

		//alert(  "No identical string reached: "+ word.substring(tempStart,tempEnd+1)  );

		var nonIdenticalString=word.substring(tempStart,tempEnd+1);
		var textBefore=word.substring(0,tempStart -1);// -1 as we remove the one from the left
		var textAfter=word.substring(tempEnd+2,word.length);// -1 as we remove the one from the left
		var similarChar=word.substring(tempStart -1,tempStart);

		var newText=textBefore + nonIdenticalString + textAfter + similarChar ;


		//alert(  "New String: "+newText );


		if(newText.indexOf('_') > -1) // no underscore
		{
			 newText = newText.substring(0, newText.indexOf('_'));
			// alert(  "New String after removal of underscore: "+newText );
		}



		if(modWord!=newText)
		{
			modWord=newText;
			FarthestSimilarChars(newText, 0, newText.length-1);
		}
		else
		document.getElementById("output").innerHTML=newText;



	//}








}
