<?php
//includes the datbase class
require_once('../database/dbConnection.php');

//PROCESSING USER LOGIN
if (isset($_POST['login']) & !empty($_POST['login']))
{
	//checks for the username
	if (isset($_POST['username']) & !empty($_POST['username']))
	{
		$username = $_POST['username'];
	}

	//checks for the password
	if (isset($_POST['password']) & !empty($_POST['password']))
	{
		$password = $_POST['password'];
	}

	//calls the login function
	loginUser($username,$password);
}

//logs in the user
function loginUser($username,$password)
{
	//query
	$sql="SELECT * FROM user WHERE username='$username'";

	//creates an object of the database class
	$db = new Dbconnection;
	$result = $db->query($sql);

	if ($result)
	{
		//returns a row of the result
		$row = $db->getRow();

		if ($row == null) 
		{
			//wrong username
			echo "wrong username";
		}
		else
		{
			//correct username //now verify the password
			if(password_verify($password, $row['password'])) 
			{
				//password is correct
				//creating sessions
				session_start();
				$_SESSION['userid'] = $row['id'];
				$_SESSION['username'] = $row['username'];
				$_SESSION['role'] = $row['role'];
				echo "success";
			}
			else
			{
				//wrong passowrd
				echo "wrong password";
			}
		}

	}
	elseif ($result=="connection_error") 
	{
		echo "connection_error";
	}
	else
	{
		echo "query_error";
	}
}

// default password
//echo password_hash("123", PASSWORD_DEFAULT);
?>