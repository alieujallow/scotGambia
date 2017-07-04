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

function getHeader()
{
	//sets the url
  	url = "../controllers/userController.php?getUserRole=yes";

  	//calls the ajax function
  	ajax(url, userRoleResponse);
}

function userRoleResponse(xhttp)
{
  var response = xhttp.responseText;
  if (response == "1") 
  {
  	var listContainer = document.getElementById("listContainer");
  	var ul= document.createElement('ul');
  	ul.setAttribute("class","nav nav-tabs");
  	ul.setAttribute("role","tablist");
  		//creates the staff list
  		var staffList= document.createElement('li');
  		staffList.setAttribute("role","presentation");
  		staffList.setAttribute("class","active");
  			var a= document.createElement('a');
  			a.setAttribute("href","#staff_list");
  			a.setAttribute("aria-controls","home");
  			a.setAttribute("role","tab");
  			a.setAttribute("data-toggle","tab");
  			var linkText = document.createTextNode("Staff List");

  			a.appendChild(linkText);
  			staffList.appendChild(a);

  		//creates the add staff list
  		var addStaff= document.createElement('li');
  		addStaff.setAttribute("role","presentation");
  			var a= document.createElement('a');
  			a.setAttribute("href","#post");
  			a.setAttribute("aria-controls","home");
  			a.setAttribute("role","tab");
  			a.setAttribute("data-toggle","tab");
  			var linkText = document.createTextNode("POST");
  			addStaff.addEventListener("click", function()
      		{
        		loadData();
      		});

  			a.appendChild(linkText);
  			addStaff.appendChild(a);

  		//creates the settings tab
  		var settings= document.createElement('li');
  		settings.setAttribute("role","presentation");
  			var a= document.createElement('a');
  			a.setAttribute("href","#settings");
  			a.setAttribute("aria-controls","home");
  			a.setAttribute("role","tab");
  			a.setAttribute("data-toggle","tab");
  			var linkText = document.createTextNode("Settings");

  			a.appendChild(linkText);
  			settings.appendChild(a);

  		//creates the database setUp tab
  		var dbSetUp= document.createElement('li');
  		dbSetUp.setAttribute("role","presentation");
  			var a= document.createElement('a');
  			a.setAttribute("href","#dbSetup");
  			a.setAttribute("aria-controls","home");
  			a.setAttribute("role","tab");
  			a.setAttribute("data-toggle","tab");
  			var linkText = document.createTextNode("Database Setup");
  			dbSetUp.addEventListener("click", function()
      		{
        		getRole();
      		});
  			a.appendChild(linkText);
  			dbSetUp.appendChild(a);

  		ul.appendChild(staffList);
  		ul.appendChild(addStaff);
  		ul.appendChild(settings);
  		ul.appendChild(dbSetUp);
  		listContainer.appendChild(ul);
  }
  else if (response == "2")
  {
  	var listContainer = document.getElementById("listContainer");
  	var ul= document.createElement('ul');
  	ul.setAttribute("class","nav nav-tabs");
  	ul.setAttribute("role","tablist");
  		//creates the staff list
  		var staffList= document.createElement('li');
  		staffList.setAttribute("role","presentation");
  		staffList.setAttribute("class","active");
  			var a= document.createElement('a');
  			a.setAttribute("href","#staff_list");
  			a.setAttribute("aria-controls","home");
  			a.setAttribute("role","tab");
  			a.setAttribute("data-toggle","tab");
  			var linkText = document.createTextNode("Staff List");

  			a.appendChild(linkText);
  			staffList.appendChild(a);

  		//creates the add staff list
  		var addStaff= document.createElement('li');
  		addStaff.setAttribute("role","presentation");
  			var a= document.createElement('a');
  			a.setAttribute("href","#add_staff");
  			a.setAttribute("aria-controls","home");
  			a.setAttribute("role","tab");
  			a.setAttribute("data-toggle","tab");
  			var linkText = document.createTextNode("Add Staff");

  			a.appendChild(linkText);
  			addStaff.appendChild(a);

  		//creates the settings tab
  		var settings= document.createElement('li');
  		settings.setAttribute("role","presentation");
  			var a= document.createElement('a');
  			a.setAttribute("href","#settings");
  			a.setAttribute("aria-controls","home");
  			a.setAttribute("role","tab");
  			a.setAttribute("data-toggle","tab");
  			var linkText = document.createTextNode("Settings");

  			a.appendChild(linkText);
  			settings.appendChild(a);

  		ul.appendChild(staffList);
  		ul.appendChild(addStaff);
  		ul.appendChild(settings);
  		listContainer.appendChild(ul);
  }
}










