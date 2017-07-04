<?php
/**
* this is a staff class that handles everything  about a staff
*/
require('../database/dbConnection.php');
class Staff extends Dbconnection
{
	
	
	//adds a staff
	function staffQuery($sql)
	{
		return $this->query($sql);
	}

	//gets email and payroll
	function emailPayrollCheck($sql)
	{
		if($this->query($sql))
		{
			return $this->getNumRows();
		}
	}

	//gets the staff summary data
	function getStaffInfo($sql)
	{
		if($this->query($sql))
		{
			//gets the number of rows
			$numRows=$this->getNumRows();

			//creates an array
			$rows=array($numRows);

			if($numRows>0)
			{
				//fetch all the rows
				while ($row=$this->getRow()) 
				{
					$rows[]=$row;
				}
			}
			return $rows;
		}
	}

	//gets the last inserted id of a staff
	function getLastStaffInsertedId()
	{
		return $this->getLastInsertedId();
	}
}
?>