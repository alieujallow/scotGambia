<?php
require('../classes/data.php');




//gets the qualification list
if (isset($_GET['property_type']) & !empty($_GET['property_type'])) 
{
	$sql="SELECT * FROM property_type";
	getData($sql,"property_type");
}
//gets the units list
elseif (isset($_GET['location']) & !empty($_GET['location'])) 
{
	$sql="SELECT * FROM location";
	getData($sql,"location");
}
//gets the property condition
elseif (isset($_GET['condition']) & !empty($_GET['condition'])) 
{
	$sql="SELECT * FROM property_condition";
	getData($sql,"condition");
}
//gets the apartment type list
elseif (isset($_GET['house_type']) & !empty($_GET['house_type'])) 
{
	$sql="SELECT * FROM house_type";
	getData($sql,"house_type");
}

//gets the property status
elseif (isset($_GET['property_status']) & !empty($_GET['property_status'])) 
{
	$sql="SELECT * FROM property_status";
	getData($sql,"property_status");
}

//get data
function getData($sql,$name)
{
	$data = new Data;

	//returns a json encode of the result set
	$result = $data->getData($sql,$name);
	echo $result;
}

?>