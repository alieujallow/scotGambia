<?php

//includes the datbase class
require_once('../classes/region.php');

//adds a staff to the system
if (isset($_GET['add_region']) & !empty($_GET['add_region']))
{
    //gets the region name
	$regionName = $_GET["region"];

    //sets the sql
    $sql="INSERT INTO region(name) VALUES('$regionName')";

    //creates a new region
    $region= new Region;

    if($region->addRegion($sql))
    {
        echo "region_added";
    } 
    else
    {
        echo "failure";
    }
}

?>