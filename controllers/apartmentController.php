<?php

//includes the datbase class
require_once('../classes/apartment.php');

//adds a an apartment to the system
if (isset($_POST['action']) & !empty($_POST['action']))
{
    //gets the form data and the action
    $action = $_POST['action'];
    $apartmentName = $_POST['name'];
    $houseType = $_POST['houseType'];
    $condition = $_POST['condition'];
    $location = $_POST["location"];
    $propertyType = $_POST["propertyType"];
    $propertyStatus = $_POST["propertyStatus"];
    $price = $_POST["price"];
    $numberOfBedRooms = $_POST["numberOfBedrooms"];

    //gets the user id
    session_start();
    $userId=$_SESSION['userid'];

    //sets the sql
    /*$sql="INSERT INTO apartment(user_id,property_status_id,house_type_id,name,condition_id,property_type_id,location_id,price,number_of_bedrooms,picture) 
        VALUES('$userId','$propertyStatus','$houseType ','$name','$condition','$propertyType','$location','$price','$numberOfBedRooms')";*/

    //checks whether the user wants to edit or add staff information
    if ($action=="add_apartment")
    {
        //creates an apartment class
        $apartment = new Apartment;
        /*if ($result)
        {
            $lastApartmentId = $apartment->getLastApartmentInsertedId();
        }*/

        //creates the target directory
        $target_dir = "../img/apartment_uploads/";

        $count = count($_FILES['arr']['name']);
        for ($i = 0; $i < $count; $i++)
        { 
          //gets the name
          $name = $_FILES["arr"]["name"];

          //gets the temporary name
          $tempName = $_FILES["arr"]["tmp_name"];

          //Renames the picture if it already exists.
          $j = 0;
          $parts = pathinfo($name[$i]);
          while (file_exists($target_dir.$name[$i]))
          {
            $j++;
            $name[$i] = $parts["filename"] . "-" . $j. "." . $parts["extension"];
          }

          //$sql="INSERT INTO apartment_uploads(apartment_id,name) VALUES('$lastApartmentId','$name[$i]')";

          //sets the sql
         $sql="INSERT INTO apartment(user_id,property_status_id,house_type_id,name,condition_id,property_type_id,location_id,price,number_of_bedrooms,picture) 
         VALUES('$userId','$propertyStatus','$houseType ','$apartmentName','$condition','$propertyType','$location','$price','$numberOfBedRooms','$name[$i]')";

          $result= $apartment->apartmentQuery($sql);
          if ($result)
          {
             move_uploaded_file($tempName[$i], $target_dir.$name[$i]);
          }
        }
        echo "apartment_added";
    }
    else if ($action=="edit_staff")
    {
        
    }

    /*//Edits a staff
    else if ($determinant=="edit_staff")
    {
        //echo "staff_edited";
        session_start();
        $staffId = $_SESSION['staff_id'];
        //sets the query
        $sql = "UPDATE odg_staff SET region_id='$region',unit_id='$unit',other_section_id='$otherSection',qualification_id='$qualification',first_name='$firstName',middle_name='$middleName',last_name='$lastName',date_of_birth='$dateOfBirth',gender='$gender',address='$address',email='$email',tel='$telephone',date_of_appointment='$dateOfAppointment',payroll_number='$payrollNumber',grade='$grade',status='ACTIVE',designation='$designation' WHERE id='$staffId'";

          //creates a staff class
          $staff = new Staff;
          if ($profilePic=="file_not_selected")
          {
            $result = $staff->staffQuery($sql);
            echo "staff_edited"; 
          }
          else
          {
            $fileType=$_FILES["image"]["type"];
            echo "pic";
          }  
    }*/
}
elseif (isset($_GET['emailPayroll']) & !empty($_GET['emailPayroll']))
{
	//gets the email and payroll number and the indicator
	$email = $_GET["email"];
	$payrollNumber = $_GET["payroll_number"];

	//sets the querry
	$sql1="SELECT first_name FROM odg_staff WHERE email='$email'";
	$sql2="SELECT first_name FROM odg_staff WHERE payroll_number='$payrollNumber'";

	//creates a staff class
    $staff = new Staff;
    $result1 = $staff->emailPayrollCheck($sql1);
    $result2 = $staff->emailPayrollCheck($sql2);

    //creates an array for the response
    $responseList = array("","");

    //checks for the results
    if ($result1>0)
    {
    	$responseList[0]="email_exists";
    }

    //checks for the results
    if ($result2>0)
    {
    	$responseList[1]="payroll_number_exists";
    }
    echo json_encode($responseList);
}
//gets the information of all the apartments
elseif (isset($_GET['apartment_info']) & !empty($_GET['apartment_info']))
{

    //sets the sql
    $sql="SELECT apartment.id as apartment_id,apartment.picture, apartment.name as apartment_name, price,number_of_bedrooms,location.name as location_name, property_condition.name as condition_name FROM apartment,location,property_condition WHERE location.id=apartment.location_id AND property_condition.id=apartment.condition_id";

    //creates an apartment Object
    $apartment = new Apartment;

    //gets the rows of all the apartments
    $rows = $apartment->getApartmentInfo($sql);
    echo json_encode($rows);
}
elseif (isset($_GET['search']) & !empty($_GET['search']))
{
    //gets the values
     $firstName=$_GET['first_name'];
     $lastName=$_GET['last_name'];
     $payroll=$_GET['payroll_number'];

     if ($firstName=="" & $lastName=="" & $payroll!="")
     {
        //sets the sql
        $sql="SELECT id,first_name,middle_name,last_name,gender,designation FROM odg_staff WHERE status='ACTIVE' AND payroll_number LIKE '%$payroll%'";
     }
     else if ($firstName=="" & $lastName!="" & $payroll=="") 
     {
         //sets the sql
        $sql="SELECT id,first_name,middle_name,last_name,gender,designation FROM odg_staff WHERE status='ACTIVE' AND last_name LIKE '%$lastName%'";
     }
     else if ($firstName!="" & $lastName=="" & $payroll=="") 
     {
         //sets the sql
        $sql="SELECT id,first_name,middle_name,last_name,gender,designation FROM odg_staff WHERE status='ACTIVE' AND first_name LIKE '%$firstName%'";
     }
     else if ($firstName!="" & $lastName!="" & $payroll=="") 
     {
         //sets the sql
        $sql="SELECT id,first_name,middle_name,last_name,gender,designation FROM odg_staff WHERE status='ACTIVE' AND first_name LIKE '%$firstName%' AND last_name LIKE '%$lastName%'";
     }
     else if ($firstName!="" & $lastName =="" & $payroll!="") 
     {
         //sets the sql
        $sql="SELECT id,first_name,middle_name,last_name,gender,designation FROM odg_staff WHERE status='ACTIVE' AND first_name LIKE '%$firstName%' AND payroll_number LIKE '%$payroll%'";
     }
     else if ($firstName=="" & $lastName !="" & $payroll!="") 
     {
         //sets the sql
        $sql="SELECT id,first_name,middle_name,last_name,gender,designation FROM odg_staff WHERE status='ACTIVE' AND last_name LIKE '%$lastName%' AND payroll_number LIKE '%$payroll%'";
     }
     else if ($firstName!="" & $lastName !="" & $payroll!="") 
     {
         //sets the sql
        $sql="SELECT id,first_name,middle_name,last_name,gender,designation FROM odg_staff WHERE status='ACTIVE' AND last_name LIKE '%$lastName%' AND payroll_number LIKE '%$payroll%' AND first_name LIKE '%$firstName%'";
     }
    //creates a staff class
    $staff = new Staff;

    //gets the rows of all the staff
    $rows = $staff->getStaffInfo($sql);
    echo json_encode($rows);
}

//creates a session for the apartment id
elseif (isset($_GET['apartmentId']) & !empty($_GET['apartmentId']))
{
    session_start();
    $_SESSION['apartment_id'] = $_GET['apartmentId'];
    echo "apartment_id_stored";
}
elseif (isset($_GET['apartment_profile_information']) & !empty($_GET['apartment_profile_information']))
{
    //gets the apartment id
    session_start();
    $apartmentId = $_SESSION['apartment_id'];

     $sql="SELECT apartment.id as apartment_id,apartment.picture, apartment.name as apartment_name, price,number_of_bedrooms,location.name as location_name, property_condition.name as condition_name,property_type.name as property_type,property_status.name as property_status, house_type.name as house_type FROM apartment,location,property_condition,property_type,property_status,house_type WHERE apartment.id='$apartmentId' AND location.id=apartment.location_id AND property_condition.id=apartment.condition_id AND property_type.id=apartment.property_type_id AND property_status.id=apartment.property_status_id AND house_type.id=apartment.house_type_id";

    //creates an apartment object
    $apartment = new Apartment;

    $rows = $apartment->getApartmentInfo($sql);
    echo json_encode($rows);
}
?>
