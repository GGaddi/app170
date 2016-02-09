$(document).ready(function() {

	var $email = $('<input type="text" name="email" placeholder="e-mail" class = "account"/>');
	//var $email = $('<input type="email" name="email" placeholder="e-mail"/>');
	$('#register').click(function() {
		//console.log("I am working.");
		if( $(this).text() == "(or create an account)") {
			$email.show();
			$('#login').prepend($email);
			$('#log').text("sign up!");
			$(this).text("(did you want to log in?)");
		}
		else {
			$email.hide();
			$('#log').text("log in!");
			$(this).text("(or create an account)");
		}
	});
});

//$('#log').click(
function createJSON() {
	var value = 0;
	var username;
	var password;
	var email;
	$("input[class=account]").each(function() {
		if($('#log').text() == "log in!"){ 
			if( value == 0) {
				username = $(this).val();
				value = value +1;
			}
			else if (value == 1) {
				password = $(this).val();
			}
    		//var email = $(this).attr("name");
    		//console.log(username);
    		//console.log(password);
    		//console.log("Break");
    	}
    	else{
    		if( value == 0) {
				email = $(this).val();
				value = value +1;
			}
			else if (value == 1) {
				username = $(this).val();
				value = value +1;
			}
			else if (value == 2){
				password =  $(this).val();
			}
    		/*console.log(username);
    		console.log(password);
    		console.log(email); */
    		//console.log("Break");
    	} 
	});
	if($('#log').text() == "log in!") {
		/*console.log("check here");
		console.log(username);
    	console.log(password);
    	console.log(email);
    	console.log("end"); */
		if(username == "" || password == ""){
			location.href = 'index.html';
		}
		else {
			jsonObj = [];
			item = {};
    		item ["username"] = username;
    		item ["password"] = password;

    		jsonObj.push(item);
			jsonString = JSON.stringify(jsonObj);
			//console.log("I am running");
			//console.log(jsonString);
			location.href = 'home.html';
		}
	}
	else {
		if(username == "" || password == "" || email == ""){
			location.href = 'index.html';
		}
		else{
			jsonObj = [];
			item = {};
    		item ["username"] = username;
    		item ["password"] = password;
    		item ["email"] = email;

    		jsonObj.push(item);
			jsonString = JSON.stringify(jsonObj);
			//console.log("I am running");
			//console.log(jsonString);
			location.href = 'home.html';
		}
	}
}