<?php

/**
* 
*/



require('../database/dbConnection.php');
class Data extends dbConnection
{
	
	//gets data
	function getData($sql,$name)
	{
		$result = $this->query($sql);
		if ($result)
		{
			$resultSet = array($name);
			while ($row = $this->getRow()) 
			{
				$resultSet[] = $row;
			}
			return json_encode($resultSet);
		}
	}
}

	/*$sql="SELECT * FROM qualification";
	$data = new Data;
	$result = $data->getData($sql);
	echo $result;*/

?>