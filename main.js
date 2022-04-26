function BMI() {
	var w = document.getElementById('w').value;
	var h = document.getElementById('h').value;
	
	//formula
	var bmi = w / (h / 100 * h / 100);
	//var bmi = w / (h*h);

	document.getElementById("result").innerHTML = "Your BMI is: " + bmi;


	if(bmi < 16.0)
	{
		document.getElementById("result_status").innerHTML = "Status : Severely Underweight";
	}
	else if (bmi >= 16.0 && bmi <= 18.4)
	{
		document.getElementById("result_status").innerHTML = "Status : Underweight";
	}
	else if (bmi >= 18.5 && bmi <= 24.99)
	{
		document.getElementById("result_status").innerHTML = "Status : Normal";
	}
	else if (bmi >= 25.0 && bmi <= 29.99)
	{
		document.getElementById("result_status").innerHTML = "Status :  Overweight";
	}
	else if (bmi >= 30.0 && bmi <= 34.99)
	{
		document.getElementById("result_status").innerHTML = "Status : Moderately Obese";
	}
	else if (bmi >= 35.0 && bmi <= 39.99)
	{
		document.getElementById("result_status").innerHTML = "Status : Severely Obese";
	}
	else if (bmi >= 40)
	{
		document.getElementById("result_status").innerHTML = "Status :  Morbidly Obese";
	}
}


function FeetToCm(){
	var feet = document.getElementById('F').value;

	var cm = 30.48 * feet;

	document.getElementById("result_FeetToCm").innerHTML ="Result :"+ cm+" CM";
}

function MeterToCm(){
	var meter = document.getElementById('M').value;

	var cm = 100 * meter;

	document.getElementById("result_MeterToCm").innerHTML ="Result :"+ cm+" CM";
}