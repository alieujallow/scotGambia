<?php
/**
* this is a staff class that handles everything  about a staff
*/
require('../database/dbConnection.php');
class Region extends Dbconnection
{
	
	
	//adds a region
	function addRegion($sql)
	{
		return $this->query($sql);
	}
}
?>