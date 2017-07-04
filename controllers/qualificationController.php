<?php

//includes the datbase class
require_once('../classes/qualification.php');

//adds a qualification to the system
if (isset($_GET['add_qualification']) & !empty($_GET['add_qualification']))
{
    //gets the qualification name
	$qualificationName = $_GET["qualification"];

    //sets the sql
    $sql="INSERT INTO qualification(name) VALUES('$qualificationName')";

    //creates a new region
    $qualification= new Qualification;

    if($qualification->addQualification($sql))
    {
        echo "qualification_added";
    } 
    else
    {
        echo "failure";
    }
}

?>