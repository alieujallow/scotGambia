<?php

//includes the datbase class
require_once('../classes/unit.php');

//adds a staff to the system
if (isset($_GET['add_unit']) & !empty($_GET['add_unit']))
{
    //gets the unit name
	$unit = $_GET["unit"];

    //sets the sql
    $sql="INSERT INTO unit(name) VALUES('$unit')";

    //creates a new user
    $unit= new Unit;

    if($unit->addUnit($sql))
    {
        echo "unit_added";
    } 
    else
    {
        echo "failure";
    }
}

?>