//***************************************************
//                VALIDATIONS
//***************************************************

//validates the username
function validateName(form_name,object_name,span_name)
{
	var name = document.forms[form_name][object_name];
	var span = document.getElementById(span_name);

  if (name.value == "") 
  {
   	span.innerHTML = "*required";
   	name.style.border= "1px solid red";
   	return false; 
  }
  else
  {
  	//checks if the username does not contain numbers or symbols 
  	var pattern = new RegExp("^[a-zA-Z]+$");

  	if (pattern.test(name.value)) 
  	{
  		name.style.border= "";
 		  span.innerHTML = "";
 		  return true; 
  	}
  	else
  	{
  		span.innerHTML = "*name must not contain numbers or symbols";
 		  name.style.border = "1px solid red";
 		  return false; 
  	}
  }
}

//validates the message 
function validateMessage(form_name,object_name,span_name)
{
  var message = document.forms[form_name][object_name];
  var span = document.getElementById(span_name);

  if (message.value == "") 
  {
    span.innerHTML = "*required";
    message.style.border= "1px solid red";
    return false; 
  }
  else
  {
    span.innerHTML = "";
    message.style.border= "";
    return true; 
  }
}
//checks if a value is an interger
function isInt(value)
{
  return !isNaN(value) && (function(x){return(x|0)===x;})(parseFloat(value))
}

//validates the select input fields
function validateSelectInputField(form_name,object_name,span_name)
{
  var selectInputField = document.forms[form_name][object_name];
  var span = document.getElementById(span_name);

  if (selectInputField.value == "") 
  {
    span.innerHTML = "*please select one";
    selectInputField.style.border= "1px solid red";
    return false; 
  }
  else
  {
      selectInputField.style.border= "";
      span.innerHTML = "";
      return true; 
  }
}


//validates the date
function validateDate(form_name,object_name,span_name)
{
  var date = document.forms[form_name][object_name];
  var span = document.getElementById(span_name);

  if (date.value=="") 
  {
    span.innerHTML = "*required";
    date.style.border= "1px solid red";
    return false; 
  }
  else
  {
    date.style.border= "";
    span.innerHTML = "";
    return true; 
  }
}

//validates the email
function validateEmail(form_name,object_name,span_name)
{
  var email = document.forms[form_name][object_name];
  var span = document.getElementById(span_name);
  if (email.value=="") 
  {
    span.innerHTML = "*required";
    email.style.border= "1px solid red";
    return false; 
  }
  else
  {
    email.style.border= "";
    span.innerHTML = "";
    return true; 
  }
}

//validates the grade
function validateInt(form_name,object_name,span_name)
{
  var int = document.forms[form_name][object_name];
  var span = document.getElementById(span_name);
  if (int.value=="") 
  {
    span.innerHTML = "*required";
    int.style.border= "1px solid red";
    return false; 
  }
  else
  {

    //checks if the value is a number
    if (isInt(int.value))
    {
      int.style.border= "";
      span.innerHTML = "";
      return true; 
    }
    span.innerHTML = "*Number required";
    int.style.border= "1px solid red";
    return false; 
  }
}

//validates the email
function validateTelephone(form_name,object_name,span_name)
{
  var telephone = document.forms[form_name][object_name];
  var span = document.getElementById(span_name);
  if (telephone.value=="") 
  {
    span.innerHTML = "*required";
    telephone.style.border= "1px solid red";
    return false; 
  }
  else
  {
    telephone.style.border= "";
    span.innerHTML = "";
    return true; 
  }
}

 //validates the password
function validatePassword(fieldObject,spanObject)
{
   if (fieldObject.value == "") 
   {
  	spanObject.innerHTML = "*required";
  	fieldObject.style.border = "1px solid red";
  	return false; 
   }
   else
  {

  	/*//if password is not empty do the following
  	//checks the length of the password
  	if (fieldObject.value.length>=6 & fieldObject.value.length<13)
  	{

  		//if the password meets the length, check for an Uppercase letter, symbol, nummber, 
  		var pattern = new RegExp("^(?=.*?[A-Z])(?=.*?[a-z])(?=.*?[0-9])(?=.*?[#?!@$%^&*-]).{6,}$");
  		if(pattern.test(fieldObject.value))
  		{
  			spanObject.innerHTML = "";
  			fieldObject.style.border = "";
  			return true; 
  		}
  		else
  		{

  			spanObject.innerHTML = "*password must have atleast a number, symbol and an uppercase letter";
  			fieldObject.style.border = "1px solid red";
  			return false; 
  		}
  	}
  	else
  	{
  		spanObject.innerHTML = "*password length shoud be between 6 and 12 characters";
  		fieldObject.style.border = "1px solid red";
  		return false; 
  	}*/

      spanObject.innerHTML = "";
       fieldObject.style.border = "";
        return true; 
   }
}

//validates the login form
function validateApartmentForm()
{
  var nameValidation = validateName("post_apartment_form","name","apartment_name_span");
  var houseTypeValidation = validateSelectInputField("post_apartment_form","house_type","house_type_span");
  var conditionValidation = validateSelectInputField("post_apartment_form","condition","apartment_condition_span");
  var locationValidation = validateSelectInputField("post_apartment_form","location","apartment_location_span");
  var propertyTypeValidation = validateSelectInputField("post_apartment_form","property_type","property_type_span");
  var propertyStatusValidation = validateSelectInputField("post_apartment_form","property_status","property_status_span");

  var priceValidation = validateInt("post_apartment_form","price","apartment_price_span");
  var numberOfBedroomsValidation = validateInt("post_apartment_form","number_of_bedrooms","number_of_bedrooms_span");
  var filesValidation=validatePhoto();
  

  if (nameValidation & houseTypeValidation & conditionValidation & locationValidation
    & propertyTypeValidation & propertyStatusValidation & priceValidation 
    & numberOfBedroomsValidation & filesValidation) 
  {
   //calls the function that adds an apartment to the database
   manageApartment("post_apartment_form","add_apartment");
  }
  return false;
}

//validates the unit Form
function validateAddUnitForm()
{
  var unitValidation = validateName("add_unit_form","unit","unit_span_name");
  if (unitValidation) 
  {
    addUnit();
  }
  return false;
}

//validates the region Form
function validateAddRegionForm()
{
  var regionValidation = validateName("add_region_form","region","region_span_name");
  if (regionValidation) 
  {
    addRegion();
  }
  return false;
}

//validates the qualification Form
function validateAddQualificationForm()
{
  var qualificationValidation = validateName("add_qualification_form","qualification","qualification_span_name");
  if (qualificationValidation) 
  {
    addQualification();
  }
  return false;
}

//validates the other section Form
function validateAddOtherSectionForm()
{
  var otherSectionValidation = validateName("add_other_section_form","other_section_name","other_section_span_name");
  if (otherSectionValidation) 
  {
    addOtherSection();
  }
  return false;
}

//validates the add user form
function validateAddUserForm()
{
  var usernameValidation = validateName("add_user_form","username","add_user_span");
  var roleValidation = validateSelectInputField("add_user_form","role","role_span");
  if (usernameValidation & roleValidation) 
  {
    //checks if the username exists or not
    confirmUsername("add_user_form");
  }
  return false;
}

//function that validates the login form
function validateLoginForm()
{
  var password = document.forms["loginForm"]["password"];
  var passwordSpan=document.getElementById("passwordSpan");

  var usernameValidation = validateName("loginForm","username","usernameSpan");
  var passwordValidation = validatePassword(password,passwordSpan);

  if (usernameValidation & passwordValidation)
   {
      //calls the funtion that logs in the user
      loginUser();
   }
   return false;
}

//validates the photo
function validatePhoto()
{
   //selects and previews the file
   var filePicker=document.getElementById("picture_picker");
   var pictureSpan=document.getElementById("pic_span");

   //getting file properties
   if (filePicker.value=="") 
   {
    pictureSpan.innerHTML="Please select at least one image.";
    filePicker.style.border= "1px solid red";
    return false;
   }

   //checks for the number of images
   if (filePicker.files.length>8) 
   {
    pictureSpan.innerHTML="The number of images should not be more than 8.";
    filePicker.style.border= "1px solid red";
    return false;
   }

   var count=0;
   //loops through the files and checks for the extensions and sizes
   for (var i =0; i < filePicker.files.length; i++)
   {
      //gets the file extension and file size
      var fileExtension = filePicker.files[i].name.split('.').pop().toLowerCase();
      var fileSize = filePicker.files[i].size;

      //checks for the image extension
     if (fileExtension =="jpeg" || fileExtension =="jpg" || fileExtension =="png" || fileExtension =="gif")
      {
        //checks for the file size
        if (fileSize<=1000000) 
        {
          count++;
        }
        else
        {
           //file too large
           pictureSpan.innerHTML= "\""+filePicker.files[i].name+"\" is too large";
           filePicker.style.border= "1px solid red";
           return false;
        }
      }
      else
      {
        //file extension not supported
        pictureSpan.innerHTML="\""+filePicker.files[i].name+"\" is not supported";
        filePicker.style.border= "1px solid red";
        return false;
      }
   }

   if (count<=filePicker.files.length)
   {
     pictureSpan.innerHTML="";
     filePicker.style.border= "";
     return true;
   }
}




//validates the search form
function validateSearchForm()
{
  //getting the field objects
  var firstName = document.forms["searchForm"]["first_name"];
  var lastName = document.forms["searchForm"]["last_name"];
  var payrollNumber = document.forms["searchForm"]["payroll_number"];

  //getting the spans
  var errorSpan = document.getElementById("error_span");
  var firstNameSpan = document.getElementById("first_name_span");
  var lastNameSpan = document.getElementById("last_name_span");
  var payrollNumberSpan = document.getElementById("payroll_number_span");
 
  //checks if all of the fields are empty
  if (firstName.value=="" & lastName.value=="" & payrollNumber.value=="")
  {
    errorSpan.innerHTML="*atleast one field is required";
    return false;
  }
  //checks if the first name is not empty and the rest are empty
  else if(firstName.value!="" & lastName.value=="" & payrollNumber.value=="")
  {
    errorSpan.innerHTML="";
    //validates the first name
    var firstNameValidation = ValidateSearchFormName(firstName,firstNameSpan);
    if (firstNameValidation)
     {
      searchStaff();
     }
     return false;
  }
  //checks if the last name is not empty and the rest are empty
  else if(firstName.value=="" & lastName.value!=""
   & payrollNumber.value=="")
  {
    errorSpan.innerHTML="";
    //validates the last name
    var lastNameValidation = ValidateSearchFormName(lastName,lastNameSpan);
    if (lastNameValidation)
     {
      searchStaff();
     }
     return false;
  }
  //checks if the payroll is not empty and the rest are empty
  else if(firstName.value=="" & lastName.value=="" & payrollNumber.value!="")
  {
    errorSpan.innerHTML="";
    //validates the payroll
    var payrollValidation = validatePayroll(payrollNumber,payrollNumberSpan);
    if (payrollValidation)
     {
      searchStaff();
     }
     return false;
  }
  //checks if the payroll and first name is not empty
  else if(firstName.value!="" & lastName.value=="" & payrollNumber.value!="")
  {
    errorSpan.innerHTML="";
    var payrollValidation = validatePayroll(payrollNumber,payrollNumberSpan);
    var firstNameValidation = ValidateSearchFormName(firstName,firstNameSpan);

    if (payrollValidation & firstNameValidation)
     {
      searchStaff();
     }
     return false;
  }
  //checks if the payroll and last name is not empty
  else if(firstName.value=="" & lastName.value!="" & payrollNumber.value!="")
  {
    errorSpan.innerHTML="";
    var payrollValidation = validatePayroll(payrollNumber,payrollNumberSpan);
    var lastNameValidation = ValidateSearchFormName(lastName,lastNameSpan);
    
    if (payrollValidation & lastNameValidation)
     {
      searchStaff();
     }
     return false;
  }
  //checks if the first name and last name is not empty
  else if(firstName.value!="" & lastName.value!="" & payrollNumber.value=="")
  {
    errorSpan.innerHTML="";
    var firstNameValidation = ValidateSearchFormName(firstName,firstNameSpan);
    var lastNameValidation = ValidateSearchFormName(lastName,lastNameSpan);
    if (firstNameValidation & lastNameValidation)
     {
      searchStaff();
     }
     return false;
  }
  //checks if the first name and last name and payroll is not empty
  else if(firstName.value!="" & lastName.value!="" & payrollNumber.value!="")
  {
    errorSpan.innerHTML="";
    var firstNameValidation = ValidateSearchFormName(firstName,firstNameSpan);
    var lastNameValidation = ValidateSearchFormName(lastName,lastNameSpan);
    var payrollValidation = validatePayroll(payrollNumber,payrollNumberSpan);
    if (firstNameValidation & lastNameValidation & payrollValidation)
     {
      searchStaff();
     }
     return false;
  }
}

 //VALIDATES SEARCH FORM NAMES
  function ValidateSearchFormName(fieldObject,spanObject)
  {
    //VALIDATES THE FIRST NAME
    if (fieldObject.value!="") 
    {
       //checks if the username does not contain numbers or symbols 
       var pattern = new RegExp("^[a-zA-Z]+$");

       if (pattern.test(fieldObject.value)) 
       {
          fieldObject.style.border= "";
          spanObject.innerHTML = "";
          return true; 
       }
      else
      {
        spanObject.innerHTML = "*must not contain numbers or symbols";
        fieldObject.style.border = "1px solid red";
        return false; 
      }
    }
    return false;
  }

//validates the payroll
function validatePayroll(fieldObject,spanObject)
{
    if (fieldObject.value!="")
    {

      //checks if the payroll is a number
      if (isInt(fieldObject.value)) 
      {
        //checks for the length
        var payrollLength= fieldObject.value.length;
        if (payrollLength<6) 
        {
          return true;
        }
        else
        {
          fieldObject.style.border="1px solid red";
          spanObject.innerHTML="*6 digits required";
          return false;
        }
      }
      else
      {
        fieldObject.style.border="1px solid red";
        spanObject.innerHTML="*number required";
        return false;
      }
    }
    return false;
}

//validates the change password form
function validateChangePasswordForm()
{
  //gets the field objects
  var currentPassword = document.forms["change_password_form"]["current_password"];
  var newPassword = document.forms["change_password_form"]["new_password"];
  var confirmPassword = document.forms["change_password_form"]["confirm_password"];

  //gets the span objects
  var currentPasswordSpan = document.getElementById("current_password_span");
  var newPasswordSpan = document.getElementById("new_password_span");
  var confirmPasswordSpan = document.getElementById("confirm_password_span");
  var passwordNotEqualSpan = document.getElementById("passwordsNotEqualSpan");

  var currentPasswordValidation = validatePassword(currentPassword,currentPasswordSpan);
  var newPasswordValidation = validatePassword(newPassword,newPasswordSpan);
  var confirmPasswordValidation = validatePassword(confirmPassword,confirmPasswordSpan);

  if (currentPasswordValidation & newPasswordValidation & confirmPasswordValidation)
   {
      //checks whether the two new password fields are equal
      if (arePasswordsEqual(newPassword,confirmPassword))
       {
          passwordNotEqualSpan.innerHTML="";
          confirmCurrentPassword(currentPassword);
       }
       else
       {
          passwordNotEqualSpan.innerHTML="Passwords Not Equal";
          newPassword.style.border="1px solid red";
          confirmPassword.style.border="1px solid red";
          newPassword.value="";
          confirmPassword.value="";
       }
   }
   return false;
}

//checks if the two passwords are equal
function arePasswordsEqual(newPassword,confirmPassword)
{
  if (newPassword.value == confirmPassword.value)
   {
    return true;
   }
   return false;
}

//confirms the current password
function confirmCurrentPassword(currentPassword)
{
  var currentPass = currentPassword.value;

  //sets the url
  url = "../controllers/userController.php?currentPass="+currentPass;

  //calls the ajax function
  ajax(url, confirmPasswordResponse);

}

//confirm password response
function confirmPasswordResponse(xhttp)
{
  var response = xhttp.responseText;
  if (response =="password_not_correct")
  {
    document.getElementById("current_password_span").innerHTML="Wrong Password";
    document.forms["change_password_form"]["current_password"].value="";
  }
  else if(response =="password_correct")
  {
    //calls the function that changes the password
    changePassword();
    document.getElementById("current_password_span").innerHTML="";
  }
}

//changes the password
function changePassword()
{
  //gets the password
  var password = document.forms["change_password_form"]["confirm_password"].value;

  //sets the url
  url="../controllers/userController.php?newPassword="+password;

  //calls the ajax function
  ajax(url, changePasswordResponse);
}

function changePasswordResponse(xhttp)
{
  var response = xhttp.responseText;
  if (response =="password_changed")
  {
    document.getElementById("message").innerHTML="Password Changed Successfully";
    triggerModal();
    document.getElementById("modalBtn").onclick=resetChangePasswordForm;
  }
}

//validates the region Form
function validateChangeUsernameForm()
{
  var usernameValidation = validateName("change_username_form","username","change_username_span");
  if (usernameValidation) 
  {
    //checks if the username exists or not
    confirmUsername("change_username_form");
  }
  return false;
}

function confirmUsername(formName)
{
  //gets the username
  var username = document.forms[formName]["username"].value;

  //sets the url
  url="../controllers/userController.php?newUsername="+username+"&formName="+formName;

  //calls the ajax function
  ajax(url, confirmUsernameResponse);
}

function confirmUsernameResponse(xhttp)
{
  var responseList = JSON.parse(xhttp.responseText);
  if (responseList[0] =="change_username_form")
  {
    if (responseList[1] =="username_exists")
    {
      document.getElementById("change_username_span").innerHTML="username exists";
    }
    else if (responseList[1] =="username_does_not_exist")
    {
      //calls the function that changes the username
      changeUsername();

      //calls the function that gets the username
      getUserName();
    }
  }
  else if (responseList[0] =="add_user_form")
  {
    if (responseList[1] =="username_exists")
    {
      document.getElementById("add_user_span").innerHTML="username exists";
    }
    else if (responseList[1] =="username_does_not_exist")
    {
      //calls the function that adds a user to the system
      addUser();
    }
  }
}

function changeUsername()
{
  //gets the username
  var username = document.forms["change_username_form"]["username"].value;

  //sets the url
  url="../controllers/userController.php?changeUsername="+username;

  //calls the ajax function
  ajax(url, changeUsernameResponse);
}

function changeUsernameResponse(xhttp)
{
  var response = xhttp.responseText;
  if (response =="username_changed")
  {
    document.getElementById("message").innerHTML="Username changed Successfully";
    triggerModal();
    document.getElementById("modalBtn").onclick=resetChangeUsernameForm;
  }
}

//validates the edit Staff form
function validateContactForm()
{
  var nameValidation = validateName("contactForm","name","contact_form_name_span");
  var subjectValidation = validateName("contactForm","subject","contact_form_subject_span");
  var messageValidation = validateMessage("contactForm","message","contact_form_message_span");
  var emailValidation = validateEmail("contactForm","email","contact_form_email_span");

  if (nameValidation & subjectValidation & messageValidation & emailValidation) 
  {
   //calls the function that sends the message
   addStaff("edit_staff_form","edit_staff");
  }
  return false;
}
//functions that sends the message
function sendMessage(formName)
{
  var name = document.forms[formName]["name"].value;
  var subject = document.forms[formName]["subject"].value;
  var email = document.forms[formName]["email"].value;
  var message = document.forms[formName]["message"].value;

   $.ajax({
      url: "controllers/staffController.php?name="+name+"&subject="+subject+"&email="+email+"&message="+message, 
      type: "POST",            
      data: form_data, 
      dataType: 'text',
      contentType: false,       
      cache: false,             
      processData:false,        
      success: function(data)   
      {
        if (data == "staff_added")
        {
          document.getElementById("message").innerHTML="Staff Added Successfully";
          triggerModal();
          document.getElementById("modalBtn").onclick=resetStaffForm;
        }
      }
    });
}
//********************************************************************
//                       MANAGE SEARCH AND LOGIN SESSION
//********************************************************************

//searches for a staff
function searchStaff()
{
  //gets the values
  var firstName = document.forms["searchForm"]["first_name"].value;
  var lastName = document.forms["searchForm"]["last_name"].value;
  var payrollNumber = document.forms["searchForm"]["payroll_number"].value;

  //sets the url
  url="controllers/staffController.php?first_name="+firstName+"&last_name="+lastName
  +"&payroll_number="+payrollNumber+"&search=yes";

  //calls the ajax function
    ajax(url, printStaffInfo);
}

//check for user login
function checkUserLogin()
{
  //sets the url
  url="http://localhost/scot/settings/initialization.php?userLogin=yes";
   
  //calls the ajax function
  ajax(url, getUserLoginStatus);
}

//gets userLOGIN status
function getUserLoginStatus(xhttp)
{
  var response = xhttp.responseText;
  if (response =="user_not_loggedin")
  {
    //redirect user to login
    window.location.href = "http://localhost/scot/login/";
  }
}
//********************************************************************
//                          MANAGE UNIT
//********************************************************************
//adds a unit to the system
function addUnit()
{
  //collects the user information
  var unit= document.forms["add_unit_form"]["unit"].value;

  //sets the url
    url= "controllers/unitController.php?unit="+unit+"&add_unit=yes";

    //calls the ajax function
    ajax(url, getAddResponse);
}

//gets unit
function getLocation()
{
  //sets the url
  url="http://localhost/scot/controllers/dataController.php?location=all";

  //calls the ajax function
  ajax(url, printData);
}

//prints data
function printData(xhttp)
{
  var resultSet = JSON.parse(xhttp.responseText);
  if (resultSet[0]=="property_type") 
  {
    var select = document.getElementById("property_type");
  }
  else if (resultSet[0]=="condition")
  {
    var select = document.getElementById("condition");
  }
  else if (resultSet[0]=="location")
  {
    var select = document.getElementById("location");
  }
  else if (resultSet[0]=="house_type")
  {
    var select = document.getElementById("house_type");
  }
  else if (resultSet[0]=="property_status")
  {
    var select = document.getElementById("property_status");
  }

  for (var i =1; i<resultSet.length; i++)
  {
    var row = resultSet[i];
    var option = document.createElement("option");
    option.innerHTML=row["name"];
    option.value=row["id"];
    select.appendChild(option);
  }
}
//********************************************************************
//                          MANAGE REGION
//********************************************************************

//gets unit
function getCondition()
{
  
  //sets the url
  url="http://localhost/scot/controllers/dataController.php?condition=all";

  //calls the ajax function
  ajax(url, printData);
}

//adds a unit to the system
function addRegion()
{
  //collects the user information
  var region= document.forms["add_region_form"]["region"].value;

  //sets the url
    url= "controllers/regionController.php?region="+region+"&add_region=yes";

    //calls the ajax function
    ajax(url, getAddResponse);
}

//********************************************************************
//                          MANAGING PROPERTY TYPE
//********************************************************************

//get qualification
function getPropertyType()
{
  //sets the url
  url="http://localhost/scot/controllers/dataController.php?property_type=all";

  //calls the ajax function
  ajax(url, printData);
}

//adds a qualification to the system
function addQualification()
{
  //collects the user information
  var qualification= document.forms["add_qualification_form"]["qualification"].value;

  //sets the url
    url= "controllers/qualificationController.php?qualification="+qualification+"&add_qualification=yes";

    //calls the ajax function
    ajax(url, getAddResponse);
}

//********************************************************************
//                          MANAGING PROPERTY STATUS
//********************************************************************

//get qualification
function getPropertyStatus()
{
  //sets the url
  url="http://localhost/scot/controllers/dataController.php?property_status=all";

  //calls the ajax function
  ajax(url, printData);
}

//adds a qualification to the system
function addQualification()
{
  //collects the user information
  var qualification= document.forms["add_qualification_form"]["qualification"].value;

  //sets the url
    url= "controllers/qualificationController.php?qualification="+qualification+"&add_qualification=yes";

    //calls the ajax function
    ajax(url, getAddResponse);
}
//********************************************************************
//                          MANAGE OTHER SECTION
//********************************************************************

//gets other section
function getHouseType()
{
  //sets the url
  url="http://localhost/scot/controllers/dataController.php?house_type=all";

  //calls the ajax function
  ajax(url, printData);
}

//adds a unit to the system
function addOtherSection()
{
  //collects the user information
  var otherSection= document.forms["add_other_section_form"]["other_section_name"].value;

  //sets the url
    url= "controllers/otherSectionController.php?other_section="+otherSection+"&add_other_section=yes";

    //calls the ajax function
    ajax(url, getAddResponse);
}
//********************************************************************
//                          MANAGING APARTMENT
//********************************************************************

//adds a staff to the systme
function manageApartment(formId,action)
{
    //jquery ajax
    var form_data = new FormData();  

    //collecting form data
    form_data.append('name',   $(formId +" input[name=name]").val());
    form_data.append('houseType',  $(formId +" select[name=house_type]").val());
    form_data.append('condition',    $(formId +" select[name=condition]").val());
    form_data.append('location',  $(formId +" select[name=location]").val());
    form_data.append('propertyType', $(formId +" select[name=property_type]").val());
    form_data.append('propertyStatus', $(formId +" select[name=property_status]").val());
    form_data.append('price',  $(formId +" input[name=price]").val());
    form_data.append('numberOfBedrooms', $(formId +" input[name=number_of_bedrooms]").val());
    form_data.append('action',action);

    var c=0;
    var file_data,arr;
    $('input[type="file"]').each(function()
    {
      file_data = $('input[type="file"]')[c].files; // get multiple files from input file
      for(var i = 0;i<file_data.length;i++)
      {
        form_data.append('arr[]', file_data[i]); // we can put more than 1 image file
      }
        c++;
    }); 








    /*var files = $('#picture_picker').prop('files');
    $.each(files, function(i, file)
     {
      form_data.append("file_"  + i, file);
     });*/


    //var file_data = $('#picture_picker').prop('files');  
    //form_data.append('images', file_data);
         
    $.ajax({
      url: "../controllers/staffController.php?", 
      type: "POST",            
      data: form_data, 
      dataType: 'text',
      contentType: false,       
      cache: false,             
      processData:false,        
      success: function(data)   
      {
        if (data == "apartment_added")
        {
          document.getElementById("message").innerHTML="apartment Added Successfully";
          triggerModal();
          document.getElementById("modalBtn").onclick=resetPostApartmentForm;
        }
      }
    });
}

//prints addstaff response
function printAddStaffResponse(xhttp)
{
  var response = xhttp.responseText;
  if (response=="staff_added") 
  {
    document.getElementById("message").innerHTML="Staff Added Successfully";
    triggerModal();
    document.getElementById("modalBtn").onclick=resetStaffForm;
  }
  else if(response=="pic")
  {
     document.getElementById("message").innerHTML="image Successfully";
     triggerModal();
  }
  else if(response=="staff_edited")
  {
    alert("Your Changes are Successfully Saved");

    //make the modal disappear
    $(function ()
    {
      $('#edit_staff_modal').modal('toggle');
    });
    //refresh the staff profile
    getStaffProfileInformation();
  }

}

//get staff info
function getStaffInfo()
{
  //sets the url
  url="controllers/staffController.php?staff_info=all";

  //calls the ajax function
  ajax(url, printStaffInfo);
}

//prints staff info
function printStaffInfo(xhttp)
{
  var rows = JSON.parse(xhttp.responseText);
  var staffList = document.getElementById("staffInfo");
  //clears the staff list before printing
  staffList.innerHTML="";

  //prints the number of rows
  document.getElementById("searchResult").innerHTML="Record(s): "+rows[0];

  for (var i =1; i<rows.length; i++)
  {
    var record = rows[i];

    //creates a staff card
    var staffCard= document.createElement('div');
    staffCard.setAttribute("class","staff_card");
    staffCard.setAttribute("id",record["id"]);
    staffCard.addEventListener("click", function()
    {
        getStaffId(this.id);
    });

    //creates a row
    var row= document.createElement('div');
    row.setAttribute("class","row");

    //creates column
    var column= document.createElement('div');
    column.setAttribute("class","col-md-12");

    //creates staff info container
    var staffInfoContainer= document.createElement('div');
    staffInfoContainer.setAttribute("id","staff_info_container");

    //creates staff pic container
    var staffPicContainer= document.createElement('div');
    staffPicContainer.setAttribute("id","staff_pic_container");
    
    //creates the ul element
    var ul = document.createElement('ul');
    //sets the id to the ul element
    ul.setAttribute("id","staff_info");

    // Creates the li element
    var first_name_li = document.createElement('li');
    //creates the span element
    var span = document.createElement('span');
    //sets the class to the span element
    span.setAttribute("class","label");
    //sets the value of the span
    span.innerHTML="First Name: ";
    first_name_li.appendChild(span);
    //creates the span element
    span = document.createElement('span');
    //sets the class to the span element
    span.setAttribute("class","value");
    span.setAttribute("id","staff_first_name");
    //sets the value of the span
    span.innerHTML=record["first_name"];
    first_name_li.appendChild(span);


    // Creates the li element
    middle_name_li = document.createElement('li');
    //creates the span element
    span = document.createElement('span');
    //sets the class to the span element
    span.setAttribute("class","label");
    //sets the value of the span
    span.innerHTML="Middle Name: ";
    middle_name_li.appendChild(span);
    //creates the span element
    span = document.createElement('span');
    //sets the class to the span element
    span.setAttribute("class","value");
    span.setAttribute("id","staff_middle_name");
    //sets the value of the span
    span.innerHTML=record["middle_name"];
    middle_name_li.appendChild(span);

    // Creates the li element
    last_name_li = document.createElement('li');
    //creates the span element
    span = document.createElement('span');
    //sets the class to the span element
    span.setAttribute("class","label");
    //sets the value of the span
    span.innerHTML="Last Name: ";
    last_name_li.appendChild(span);
    //creates the span element
    span = document.createElement('span');
    //sets the class to the span element
    span.setAttribute("class","value");
    span.setAttribute("id","staff_last_name");
    //sets the value of the span
    span.innerHTML=record["last_name"];
    last_name_li.appendChild(span);

    // Creates the li element
    designation_li = document.createElement('li');
    //creates the span element
    span = document.createElement('span');
    //sets the class to the span element
    span.setAttribute("class","label");
    //sets the value of the span
    span.innerHTML="Designation: ";
    designation_li.appendChild(span);
    //creates the span element
    span = document.createElement('span');
    //sets the class to the span element
    span.setAttribute("class","value");
    span.setAttribute("id","designation");
    //sets the value of the span
    span.innerHTML=record["designation"];
    designation_li.appendChild(span);

    // Creates the li element
    gender_li= document.createElement('li');
    //creates the span element
    span = document.createElement('span');
    //sets the class to the span element
    span.setAttribute("class","label");
    //sets the value of the span
    span.innerHTML="Gender: ";
    gender_li.appendChild(span);
    //creates the span element
    span = document.createElement('span');
    //sets the class to the span element
    span.setAttribute("class","value");
    span.setAttribute("id","gender");
    //sets the value of the span
    span.innerHTML=record["gender"];
    gender_li.appendChild(span);

    //creates an image
    var image= document.createElement('img');

    if (record["profile_pic"]=="")
    {
      //sets the attribute of the image if the profile pic is empty
      image.setAttribute("src","img/placeHolder.jpg");
    }
    else
    {
      //sets the attribute of the image
      image.setAttribute("src","img/profile_pic/"+record["profile_pic"]);
    }
    image.setAttribute("class","img-circle img-responsive");
    image.setAttribute("width","90");
    image.setAttribute("height","90");

    ul.appendChild(first_name_li);
    ul.appendChild(middle_name_li);
    ul.appendChild(last_name_li);
    ul.appendChild(designation_li);
    ul.appendChild(gender_li);

    staffInfoContainer.appendChild(ul);
    staffPicContainer.appendChild(image);
    column.appendChild(staffInfoContainer);
    column.appendChild(staffPicContainer);
    row.appendChild(column);
    staffCard.appendChild(row);
    staffList.appendChild(staffCard);
  }
}

function getStaffId(id)
{
  //sets the url 
  url = "controllers/staffController.php?staffId="+id;

  //calls the ajax function
  ajax(url, storeStaffId);
}

//prints the staff profile
function storeStaffId(xhttp)
{
  var response = xhttp.responseText;
  if (response == "staff_id_stored") 
  {
     window.location.href="pages/profile.html";
  }
}

//gets the profile information of a staff
function getStaffProfileInformation()
{
  //sets the url
  url = "../controllers/staffController.php?staff_profile_information=all";

  //calls the ajax function
  ajax(url, printStaffProfileInformation);
}

//prints the staff profile information
function printStaffProfileInformation(xhttp)
{
  var data = JSON.parse(xhttp.responseText);
  var staffRow = data[0];
  var unit = data[1];
  var region= data[2];
  var $qualification= data[3];
  var $otherSection= data[4];

  var staffInfo = staffRow[1];
  var unitInfo = unit[1];
  var regionInfo= region[1];
  var $qualificationInfo = $qualification[1];
  var $otherSectionInfo = $otherSection[1];

  document.getElementById('fname').innerHTML=staffInfo['first_name'];
  document.getElementById('mname').innerHTML=staffInfo['middle_name'];
  document.getElementById('lname').innerHTML=staffInfo['last_name'];
  document.getElementById('dob').innerHTML=staffInfo['date_of_birth'];
  document.getElementById('gen').innerHTML=staffInfo['gender'];
  document.getElementById('addr').innerHTML=staffInfo['address'];
  document.getElementById('em').innerHTML=staffInfo['email'];
  document.getElementById('tel').innerHTML=staffInfo['tel'];
  document.getElementById('doa').innerHTML=staffInfo['date_of_appointment'];
  document.getElementById('Pnumber').innerHTML=staffInfo['payroll_number'];
  document.getElementById('gr').innerHTML=staffInfo['grade'];
  document.getElementById('desig').innerHTML=staffInfo['designation'];

  if (staffInfo['profile_pic']=="")
  {
    document.getElementById('profile_picture_view').src="../img/placeHolder.jpg";
  }
  else
  {
    document.getElementById('profile_picture_view').src="../img/profile_pic/"+staffInfo['profile_pic'];
  }
  document.getElementById('qual').innerHTML=$qualificationInfo['name'];
  document.getElementById('re').innerHTML=regionInfo['name'];
  document.getElementById('uni').innerHTML=unitInfo['name'];
  document.getElementById('other').innerHTML=$otherSectionInfo['name'];
  var editBtn = document.getElementsByName('editBtn');
  editBtn[0].id= staffInfo['id'];
}
//**********************************************************************
//                  Managing Editing a Staff Profile
//**********************************************************************

//gets the profile information of a staff
function editStaffProfile()
{
  //sets the url
  url = "../controllers/staffController.php?staff_profile_information=all";

  //calls the ajax function
  ajax(url, editStaffProfileResponse);
}

//prints the staff profile information
function editStaffProfileResponse(xhttp)
{
  var data = JSON.parse(xhttp.responseText);
  var staffRow = data[0];
  var staffInfo = staffRow[1];
  
  //collects the form data
    document.forms["edit_staff_form"]["first_name"].value=staffInfo['first_name'];
    document.forms["edit_staff_form"]["middle_name"].value=staffInfo['middle_name'];
    document.forms["edit_staff_form"]["last_name"].value=staffInfo['last_name'];
    document.forms["edit_staff_form"]["date_of_birth"].value=staffInfo['date_of_birth'];
    document.forms["edit_staff_form"]["gender"].value=staffInfo['gender'];
    document.forms["edit_staff_form"]["designation"].value=staffInfo['designation'];
    document.forms["edit_staff_form"]["address"].value=staffInfo['designation'];
    document.forms["edit_staff_form"]["email"].value=staffInfo['email'];
    document.forms["edit_staff_form"]["telephone"].value=staffInfo['tel'];
    document.forms["edit_staff_form"]["date_of_appointment"].value=staffInfo['date_of_appointment'];
    document.forms["edit_staff_form"]["payroll_number"].value=staffInfo['payroll_number'];
    document.forms["edit_staff_form"]["grade"].value=staffInfo['grade'];
    document.forms["edit_staff_form"]["qualification"].value=staffInfo['qualification_id'];
    document.forms["edit_staff_form"]["region"].value=staffInfo['region_id'];
    document.forms["edit_staff_form"]["unit"].value=staffInfo['unit_id'];
    document.forms["edit_staff_form"]["other_section"].value=staffInfo['other_section_id'];
    if (staffInfo['profile_pic']=="")
    {
      document.forms["edit_staff_form"]["edit_staff_profile_picture"].src="../img/placeHolder.jpg";
    }
    else
    {
      document.forms["edit_staff_form"]["edit_staff_profile_picture"].src="../img/profile_pic/"+staffInfo['profile_pic'];
    }
}

//gets email and payroll
function emailPayrollCheck()
{
  //collects the email and payroll
  var email = document.forms["add_staff_form"]["email"].value;
  var payrollNumber = document.forms["add_staff_form"]["payroll_number"].value;

  //sets the url
  url= "controllers/staffController.php?email="+email+"&payroll_number="+payrollNumber
  +"&emailPayroll=yes";

  //calls the ajax function
  ajax(url, emailPayrollResponse);
}

//handles the email and payroll response
function emailPayrollResponse(xhttp)
{
  var count =0;
  var array = JSON.parse(xhttp.responseText);
   if (array[0]=="email_exists")
    {
      var email = document.forms["add_staff_form"]["email"];
      var span = document.getElementById("add_staff_email_span");

      span.innerHTML="*email exists."
      email.style.border="1px solid red";
    }
    else{count++;}

    if (array[1]=="payroll_number_exists")
    {
      var payrollNumber = document.forms["add_staff_form"]["payroll_number"];
      var span = document.getElementById("add_staff_payroll_span");

      span.innerHTML="*payroll number exists."
      payrollNumber.style.border="1px solid red";
    }else{count++;}

    if (count==2) 
    {
       addStaff("#add_staff_form","add_staff");
    }
}



//handles response from the server after add a user,unit,region,section and qualification
function getAddResponse(xhttp)
{
  var response = xhttp.responseText;

  if (response=="unit_added") 
  {
    document.getElementById("message").innerHTML="Unit Added Successfully";
    triggerModal();
    document.getElementById("modalBtn").onclick=resetUnitForm;
  }
  else if(response=="region_added")
  {
     document.getElementById("message").innerHTML="Region Added Successfully";
     triggerModal();
     document.getElementById("modalBtn").onclick=resetRegionForm;
  }
  else if(response=="qualification_added")
  {
     document.getElementById("message").innerHTML="Qualification Added Successfully";
     triggerModal();
     document.getElementById("modalBtn").onclick=resetQualificationForm;
  }
  else if(response=="user_added")
  {
     document.getElementById("message").innerHTML="User Added Successfully";
     triggerModal();
     document.getElementById("modalBtn").onclick=resetUserForm;
  }
  else if(response=="other_section_added")
  {
     document.getElementById("message").innerHTML="Other section Added Successfully";
     triggerModal();
     document.getElementById("modalBtn").onclick=resetOtherSectionForm;
  }
  else if(response=="failure")
  {
     document.getElementById("unit_span_name").innerHTML="unit Not added";
  }
}

//*****************************************************
//                MANAGING RESETTING THE FORMS
//*****************************************************

function reloadPage()
{
  window.location.href="../";
}

//function that prints a staff profile
function printStaffProfile()
{
   window.print();
}

//function that resets the post apartment form
function resetPostApartmentForm()
{
  //resets the form
  document.getElementById("post_apartment_form").reset();
}

//function that resets the add staff form
function resetRegionForm()
{
  //resets the form
  document.getElementById("add_region_form").reset();
}
//function that resets the add staff form
function resetQualificationForm()
{
  //resets the form
  document.getElementById("add_qualification_form").reset();
}
//function that resets the add staff form
function resetUserForm()
{
  //resets the form
  document.getElementById("add_user_form").reset();
}
//function that resets the add staff form
function resetOtherSectionForm()
{
  //resets the form
  document.getElementById("add_other_section_form").reset();
}
//function that resets the add staff form
function resetStaffForm()
{
  //resets the form
  document.getElementById("add_staff_form").reset();
}

function resetChangePasswordForm()
{
  //resets the form
  document.getElementById("change_password_form").reset();
}

function resetChangeUsernameForm()
{
  //resets the form
  document.getElementById("change_username_form").reset();
}
//*************************************************************
//                    MANAGING USER
//*************************************************************
//logs in the user
function loginUser()
{
  //collects the user credentials
  var username = document.forms["loginForm"]["username"].value;
  var password = document.forms["loginForm"]["password"].value;

  //sets the url for the ajax call
  url = "../unsecure/unsecureProcessing.php?username="+username+"&password="+password+"&login=yes";

  //calls the ajax function
  ajax(url, printLoginUserResponse);

}

//get user name
function getUserName()
{
  //sets the url
  url= "http://localhost/doa/controllers/userController.php?getUserName=yes";

  //calls the ajax function
  ajax(url, printUserName);
}

//prints username
function printUserName(xhttp)
{
  var response = xhttp.responseText;
  document.getElementById("navUsername").innerHTML=response;
}

//logs out the user
function logoutUser()
{
  //sets the url
  url= "http://localhost/scot/login/logout.php?logout=yes";
  ajax(url, getLogoutUserResponse);
}

//gets response of user logout
function getLogoutUserResponse(xhttp)
{
  var response = xhttp.responseText;
  if (response=="logged_out")
   {
    window.location.href="http://localhost/scot/login/";
   }
}

//adds a user to the system
function addUser()
{
  //collects the user information
  var username= document.forms["add_user_form"]["username"].value;
  var role = document.forms["add_user_form"]["role"].value;

  //sets the url
    url= "controllers/userController.php?username="+username+"&roleId="+role+"&add_user=yes";

    //calls the ajax function
    ajax(url, getAddResponse);
}

//prints login response
function printLoginUserResponse(xhttp)
{
  var response = xhttp.responseText;
  if (response=="wrong username") 
  {
    document.getElementById("usernameSpan").innerHTML = response;
    document.getElementById("password").value ="";
  }
  else if(response=="wrong password")
  {
    document.getElementById("passwordSpan").innerHTML = response;
    document.getElementById("password").value ="";
  }
  else if (response=="connection_error" || response=="query_error")
  {
    document.getElementById("errorSpan").innerHTML = response;
  }
  else if (response=="success")
  {
    window.location.href = "../pages/";
  }
}

//gets user role
function getRole()
{
  //sets the url
  url="controllers/dataController.php?role=all";

  //calls the ajax function
  ajax(url, printData);
}
//***************************************************
//                AJAX CALLS
//***************************************************
//ajax function
function ajax(url, cFunction)
{
    var xhttp;
    xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function()
     {
      if (this.readyState == 4 && this.status == 200) 
      {
        cFunction(this);
      }
    };
    xhttp.open("GET", url, true);
    xhttp.send();
}

//function that triggers the modal
function triggerModal()
{
  //triggers the moadal
    $('#staff_modal').modal({
      backdrop: 'static', 
      keyboard: false
    }) 
}

//loads the property status, type, location,condition and house type
function loadData()
{
  getPropertyStatus();
  getPropertyType();
  getLocation();
  getCondition();
  getHouseType();
}

