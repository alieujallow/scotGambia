<?php
/**
* this is a staff class that handles everything  about a staff
*/
require('../database/dbConnection.php');
class OtherSection extends Dbconnection
{
	
	
	//adds a qualification
	function addOtherSection($sql)
	{
		return $this->query($sql);
	}
}
?>