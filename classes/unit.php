<?php
/**
* this is a staff class that handles everything  about a staff
*/
require('../database/dbConnection.php');
class Unit extends Dbconnection
{
	
	
	//adds a staff
	function addUnit($sql)
	{
		return $this->query($sql);
	}
}
?>