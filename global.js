//Declaring global variable without keyword var
inValue = document.getElementById('input').value;

//Declaring a global object without keyword var
json = 
{
	"Value" : inValue
}

alert(json.Value);


//Overwriting existing global JSON object. 
this.JSON = 
{
	parse: 	function()
			{
				return "BROKEN";
			}
}


//Showing JSON object parse attribute in browser
function Break()
{
	alert("JSON is " + JSON.parse() + " now!");
}



//Declaring inside a function a global variable
function Local()
{
	//Initializing global Variables in local area by excluding keyword var 
	result = document.getElementById('result');
	
	glVariable = inValue; 
	
	
	checkVariables();
}


//Showing content of global variable in browser
function checkVariables()
{
	result.innerHTML = glVariable;
}