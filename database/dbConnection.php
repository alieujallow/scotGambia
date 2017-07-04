<?php

/*
*database connection class
*/

//includes the credentials of the database
require_once('dbcredentials.php');

/**
* 
*/
class Dbconnection
{
	//properties
	public $connection;
	public $result;

	//methods
	/*
	*connection method
	*@return returns true or false
	*/
	function connect()
	{
		$this ->connection = mysqli_connect(SERVER,USER,PASS,DB);
		if ($this ->connection) 
		{
			return true;
		}
		return false;
	}

	/*
	*query method
	*@param $sql
	*@return returns true or false
	*/
	function query($sql)
	{
		if($this->connect())
		{
			//run query
			$this->result = mysqli_query($this->connection,$sql);

			//if the query is wrong kill the script
			if(!$this->result)
			{
				die(mysqli_error($this->connection));
			}

			//closes the connection
			//mysqli_close($this->connection);

			//returns the result
			return $this->result;
		}
		return "connection_error";
	}



	/*
	*gets a row
	*@return returns true or false
	*/
	function getRow()
	{
	  //it returns only one record
	  return mysqli_fetch_assoc($this->result);
	}

	/*
	*gets the number of rows
	*@return returns true or false
	*/
	function getNumRows()
	{
	  //returns the number of rows
	  return mysqli_num_rows($this->result);
	}

	//gets the last inserted id
	function getLastInsertedId()
	{
		return mysqli_insert_id($this ->connection);
	}
}
?>