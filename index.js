$(document).ready(function() {

	var $email = $('<input type="text" name="email" placeholder="e-mail"/>');
	$('#register').click(function() {
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