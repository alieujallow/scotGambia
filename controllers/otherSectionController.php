<?php

//includes the datbase class
require_once('../classes/otherSection.php');

//adds a qualification to the system
if (isset($_GET['add_other_section']) & !empty($_GET['add_other_section']))
{
    //gets the qualification name
	$otherSectionName = $_GET["other_section"];

    //sets the sql
    $sql="INSERT INTO other_section(name) VALUES('$otherSectionName')";

    //creates a new region
    $otherSection= new OtherSection;

    if($otherSection->addOtherSection($sql))
    {
        echo "other_section_added";
    } 
    else
    {
        echo "failure";
    }
}

?>