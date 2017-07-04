<?php

if (isset($_GET['logout']) & !empty($_GET['logout']))
{
	//start session
	session_start();

	//destroy session
	if(session_destroy())
	{
		echo "logged_out";
	}
}

?>