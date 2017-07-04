<?php
/**
* this is a staff class that handles everything  about a staff
*/
require('../database/dbConnection.php');
class Qualification extends Dbconnection
{
	
	
	//adds a qualification
	function addQualification($sql)
	{
		return $this->query($sql);
	}
}
?>