document.write
(
  '<nav class="navbar navbar-default">'+
        '<div class="container-fluid">'+
        '<div class="navbar-header">'+
          '<button type="button" class="navbar-toggle collapsed" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1" aria-expanded="false">'+
            '<span class="sr-only">Toggle navigation</span>'+
            '<span class="icon-bar"></span>'+
            '<span class="icon-bar"></span>'+
            '<span class="icon-bar"></span>'+
          '</button>'+
          '<div style="float: left;">'+
            ''+
          '</div>'+
          '<a class="navbar-brand" href="#" style="margin-top:5%;">SCOT GAMBIA</a>'+
        '</div>'+

        '<div class="collapse navbar-collapse" id="bs-example-navbar-collapse-1">'+
          
          '<ul class="nav navbar-nav navbar-right">'+
            '<li class="dropdown">'+
              '<a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-haspopup="true" aria-expanded="false"><span id="navUsername"></span><span class="caret"></span></a>'+
              '<ul class="dropdown-menu">'+
                '<li><a href="#" onclick="logoutUser();">logout</a></li>'+
              '</ul>'+
            '</li>'+
          '</ul>'+
        '</div>'+
  '</div>'+
'</nav>'
);
