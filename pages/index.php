<!DOCTYPE html>
<html lang="en">
  <head>
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <!-- The above 3 meta tags *must* come first in the head; any other head content must come *after* these tags -->
    <title>SCOT GAMBIA</title>

    <!-- Bootstrap -->
     <!-- css -->
    <!--<link href="../css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link href="../font-awesome/css/font-awesome.min.css" rel="stylesheet" type="text/css" />
    <link href="../css/nivo-lightbox.css" rel="stylesheet" />
    <link href="../css/nivo-lightbox-theme/default/default.css" rel="stylesheet" type="text/css" />
    <link href="../css/owl.carousel.css" rel="stylesheet" media="screen" />
    <link href="../css/owl.theme.css" rel="stylesheet" media="screen" />
    <link href="../css/flexslider.css" rel="stylesheet" />
    <link href="../css/animate.css" rel="stylesheet" />
    <link href="../css/style.css" rel="stylesheet">
    <link href="../color/default.css" rel="stylesheet">-->

    <link href="../css/bootstrap.min.css" rel="stylesheet" type="text/css">
    <link type="text/css" rel="stylesheet" href="../css/style1.css"/>

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!-- WARNING: Respond.js doesn't work if you view the page via file:// -->
    <!--[if lt IE 9]>
      <script src="https://oss.maxcdn.com/html5shiv/3.7.3/html5shiv.min.js"></script>
      <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
  </head>
  <body onload="checkUserLogin(),getHeader(),getUserName()">
    <div class="container-fluid">
      <div class="row">
        <script type="text/javascript" src="../layout/navBar.js"></script>
    </div>
</div>

<div class="container">
  <div id="listContainer"></div>
  <!-- Tab panes -->
  <div class="tab-content">

    <div role="tabpanel" class="tab-pane active" id="staff_list">
        <h1>LIST OF CARS AND APPARTMENTS ON SALE AND LETTING</h1>
    </div>

    <div role="tabpanel" class="tab-pane" id="post">
       
      <div></div><br>
    <div class="row">
     <div class="panel panel-success col-md-8">
      <div class="panel-heading">Post an Apartment</div>
      <div class="panel-body">
        <form name="post_apartment_form" onsubmit="return validateApartmentForm()" action="" method="GET" id="post_apartment_form" enctype="multipart/form-data">
          <div class="row">

            <div class="form-group col-md-6">
              <label>Name</label>
              <input type="text" class="form-control" id="name" placeholder="apartment name" name="name">
              <span id="apartment_name_span" style="color: red;"></span>
            </div>
            <div class="form-group col-md-6">
              <label>House Type</label><br>
              <select id="house_type" class="form-control" name="house_type">
                <option value="">Select..</option>
              </select>
              <span id="house_type_span" style="color: red;"></span>
            </div>

          </div>
          <div class="row"> 
            <div class="form-group col-md-6">
            <label>Condition</label><br>
              <select id="condition" class="form-control" name="condition">
                <option value="">Select..</option>
              </select>
              <span id="apartment_condition_span" style="color: red;"></span>
          </div>
          <div class="form-group col-md-6">
            <label>Location</label><br>
              <select id="location" class="form-control" name="location">
                <option value="">Select..</option>
              </select>
              <span id="apartment_location_span" style="color: red;"></span>
          </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
            <label>Property Type</label><br>
              <select id="property_type" class="form-control" name="property_type">
                <option value="">Select..</option>
              </select>
              <span id="property_type_span" style="color: red;"></span>
          </div>
          <div class="form-group col-md-6">
            <label>Property Status</label><br>
              <select id="property_status" class="form-control" name="property_status">
                <option value="">Select..</option>
              </select>
              <span id="property_status_span" style="color: red;"></span>
          </div>
          </div>
          <div class="row">
            <div class="form-group col-md-6">
            <label>Price</label>
            <input type="text" class="form-control" id="price" placeholder="Price" name="price">
            <span id="apartment_price_span" style="color: red;"></span>
          </div>
          <div class="form-group col-md-6">
            <label>Number of bedrooms</label>
            <input type="text" class="form-control" id="number_of_bedrooms" placeholder="Number of bedrooms" name="number_of_bedrooms">
            <span id="number_of_bedrooms_span" style="color: red;"></span>
          </div>
          </div>
          <div class="row">
             <!-- <input type="file" name="file[]" class="form-control" id="picture_picker" multiple>-->
             <input type="file" name="file" class="form-control" id="picture_picker">
            <span id="pic_span" style="color: red;"></span>
            <br>
            <button type="submit" class="btn btn-success form-control">Save</button> 
          </div>
        </form>
      </div>
    </div>
    <div class="panel panel-success col-md-4">
      <div class="panel-heading">Change Username</div>
      <div class="panel-body">
        <form name="change_username_form" onsubmit="return validateChangeUsernameForm()" action="" method="GET" id="change_username_form">
          <div class="form-group">
            <label>Username</label>
            <input type="text" class="form-control" id="username" placeholder="Enter New Username" name="username">
            <span id="change_username_span" style="color: red;"></span>
          </div>
            <button type="submit" class="btn btn-success form-control">Save</button> 
        </form>
      </div>
    </div>
    </div>


    </div>

    <!-- settings tab pane -->
    <div role="tabpanel" class="tab-pane" id="settings">
      <div></div><br>
    <div class="row">
     <div class="panel panel-success col-md-4">
      <div class="panel-heading">Change Password</div>
      <div class="panel-body">
        <form name="change_password_form" onsubmit="return validateChangePasswordForm()" action="" method="GET" id="change_password_form">
          <div class="form-group">
            <label>Current Password</label>
            <input type="password" class="form-control" id="current_password" placeholder="Current Password" name="current_password">
            <span id="current_password_span" style="color: red;"></span>
          </div>
          <div class="form-group">
            <label>New Password</label>
            <input type="password" class="form-control" id="new_password" placeholder="New Password" name="new_password">
            <span id="new_password_span" style="color: red;"></span>
          </div>
          <div class="form-group">
            <label>Confirm Password</label>
            <input type="password" class="form-control" id="confirm_password" placeholder="Confirm Password" name="confirm_password">
            <span id="confirm_password_span" style="color: red;"></span>
          </div>
            <span id="passwordsNotEqualSpan" style="color: red;"></span>
            <button type="submit" class="btn btn-success form-control">Save</button> 
        </form>
      </div>
    </div>
    <div class="panel panel-success col-md-4">
      <div class="panel-heading">Change Username</div>
      <div class="panel-body">
        <form name="change_username_form" onsubmit="return validateChangeUsernameForm()" action="" method="GET" id="change_username_form">
          <div class="form-group">
            <label>Username</label>
            <input type="text" class="form-control" id="username" placeholder="Enter New Username" name="username">
            <span id="change_username_span" style="color: red;"></span>
          </div>
            <button type="submit" class="btn btn-success form-control">Save</button> 
        </form>
      </div>
    </div>
    </div>

    </div>

     <!-- setup tab pane -->
    <div role="tabpanel" class="tab-pane" id="dbSetup"> 
         <h1>ACCEPT OR REJECT REQUESTS</h1>
    </div>
    </div>
    </div>

  <div class="modal fade bs-example-modal-sm" tabindex="-1" role="dialog" aria-labelledby="mySmallModalLabel" id="staff_modal">
    <div class="modal-dialog modal-sm" role="document">
      <div class="modal-content">
        <p id="message"></p>
        <button type="button" class="btn btn-primary" data-dismiss="modal" id="modalBtn">OK</button>
      </div>
    </div>
  </div>

    <!-- jQuery (necessary for Bootstrap's JavaScript plugins) -->
    <script src="https://ajax.googleapis.com/ajax/libs/jquery/1.12.4/jquery.min.js"></script>
    <!-- Include all compiled plugins (below), or include individual files as needed -->
    <script src="../js/bootstrap.min.js"></script>
    <script type="text/javascript" src="../js/script.js"></script>
    <script type="text/javascript" src="../layout/header.js"></script>
  </body>
</html>