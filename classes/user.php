<?php
/**
* this is a staff class that handles everything  about a staff
*/
require('../database/dbConnection.php');
class User extends Dbconnection
{
	//adds a user
	function userQuery($sql)
	{
		return $this->query($sql);
	}

	//gets the password password
	function getPassword($sql)
	{
		if($this->query($sql))
		{
			$row = $this->getRow();
			return $row["password"];
		}
	}

	//gets the username
	function getUsername($sql)
	{
		if($this->query($sql))
		{
			return $this->getNumRows();
		}
	}
}
?>