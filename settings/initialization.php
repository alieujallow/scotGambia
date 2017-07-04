<?php
session_start();

//verify user user login
function verifyUserLogin()
{
		//check for login and permission
	if (isset($_SESSION['userid']) && !empty($_SESSION['userid']))
	{
		//valid user and user is logged in
		echo "user_loggedin";
	}
	else
	{
		echo "user_not_loggedin";
		//user not logged in
	}
}


//verifies user login
if(isset($_GET['userLogin']) & !empty($_GET['userLogin'])) 
{
	//gets the userLogin
	$userLogin=$_GET['userLogin'];

	//class the verify user login fucntion
	verifyUserLogin();
}

?>