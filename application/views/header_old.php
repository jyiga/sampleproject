<?php


ob_start();
//session_start();

$status = session_status();
if($status == PHP_SESSION_NONE){
    //There is no active session
    session_start();
}else if($status == PHP_SESSION_DISABLED){
        //Sessions are not available
    }else
        if($status == PHP_SESSION_ACTIVE){
            //Destroy current and start new one
            //session_destroy();
            //session_start();
        }


if(isset($_SESSION['userId'])){
    if (isset($_SESSION['LAST_ACTIVITY']) && (time() - $_SESSION['LAST_ACTIVITY'] > 3600))
    {
        // last request was more than 30 minutes ago
        session_unset();     // unset $_SESSION variable for the run-time
        session_destroy();
        // destroy session data in storage
        $url=$_SERVER[REQUEST_URI];
        //tokenization
        $urlToken=explode('/',$url);
        $urlNew="";
        for($i=2;$i<sizeof($urlToken);$i++)
        {

            $urlNew.=$urlToken[$i];
        }
        header('location:../?msg=session logged out');
    }else
    {
        //session_unset();     // unset $_SESSION variable for the run-time
        //session_destroy();
        //header('location:../?msg=session logged out');
    }

}else
{
    header('location:../?msg=your session expired');
}





?>

<!DOCTYPE html>
<html lang="en">

<head>
    <meta http-equiv="Content-Type" content="text/html; charset=UTF-8">
    <!-- Meta, title, CSS, favicons, etc. -->
    <meta charset="utf-8">
    <meta http-equiv="X-UA-Compatible" content="IE=edge">
    <meta name="viewport" content="width=device-width, initial-scale=1">

    <title><?php echo $_SESSION['appName'];?></title>

    <!-- Bootstrap -->
    <link href="../public/vendor/bootstrap/dist/css/bootstrap.min.css" rel="stylesheet">
    <!-- Font Awesome -->
    <link href="../public/vendor/font-awesome/css/font-awesome.min.css" rel="stylesheet">
    <!-- NProgress -->
    <link href="../public/vendor/nprogress/nprogress.css" rel="stylesheet">
    <link href="../public/vendor/switchery/dist/switchery.min.css" rel="stylesheet">
    <link href="../public/vendor/iCheck/skins/flat/green.css" rel="stylesheet">
    <link rel="stylesheet" type="text/css" href="../public/plugins/scripts/jquery/themes/material/easyui.css" />
    <link rel="stylesheet" type="text/css" href="../public/plugins/scripts/jquery/themes/icon.css" />
    <!--<link rel="stylesheet" media="screen" href="lib/handsontable/dist/jquery.handsontable.full.css">-->
    <!--<link rel="stylesheet" href="lib/signtures/assets/jquery.signaturepad.css">-->
    <!--<link rel="stylesheet" href="lib/datepicker/css/datepicker.css" type="text/css">-->
    <link href="../public/vendor/animate.css/animate.min.css" rel="stylesheet">

    <!-- Custom Theme Style -->
    <link href="../public/css/custom.min.css" rel="stylesheet">


    <!--<link href="css/bootstrap.min.css" rel="stylesheet">-->

    <!--<link href="fonts/css/font-awesome.min.css" rel="stylesheet">-->


    <!-- Custom styling plus plugins -->

    <!--<link href="css/icheck/flat/green.css" rel="stylesheet">-->
    <!--<link href="css/progressbar/bootstrap-progressbar-3.3.0.css" rel="stylesheet">-->






    <!-- NProgress -->
    <!--<link href="css/nprogress/nprogress.css" rel="stylesheet">
    <link href="css/custom.css" rel="stylesheet">-->


    <link rel='stylesheet' href='../public/plugins/scripts/fullcalendar/fullcalendar.css' />


    <!--[if lt IE 9]>
    <!--<script src="../assets/js/ie8-responsive-file-warning.js"></script>-->
    <![endif]-->

    <!-- HTML5 shim and Respond.js for IE8 support of HTML5 elements and media queries -->
    <!--[if lt IE 9]>
    <script src="https://oss.maxcdn.com/html5shiv/3.7.2/html5shiv.min.js"></script>
    <script src="https://oss.maxcdn.com/respond/1.4.2/respond.min.js"></script>
    <![endif]-->
    <style type="text/css">
        /* *, *:before, *:after{
    -webkit-box-sizing:content-box;
    -moz-box-sizing:content-box;
    box-sizing:content-box;
    }*/
        .datagrid-editable-input,.textbox-text{
            color:#0061C1;
        }
        td input{
            height:30px;
            width:30%;
            border:1px solid #CCC;
            border-radius:3px;
            font-size:16px;
            margin-top:10px;
            margin-bottom:10px;
        }
        td select{
            height:30px;
            width:30%;
            border:1px solid #CCC;
            border-radius:3px;
            font-size:16px;
            margin-top:10px;
            margin-bottom:10px;
        }
        .easyui-datebox{
            height:30px;
            width:30%;
            border:1px solid #CCC;
            border-radius:3px;
            font-size:16px;
            margin-top:10px;
            margin-bottom:10px;
        }
    </style>
</head>


<body class="nav-md">

<div class="container body">
    <div class="main_container">

        <div class="col-md-3 left_col">
            <div class="left_col scroll-view">

                <div class="navbar nav_title" style="border: 0;">
                    <a href="admin.php" class="site_title"><i class="fa fa-wrench"></i><span>HASH WARE HOUSE</span></a>
                </div>
                <div class="clearfix"></div>

                <!-- menu prile quick info -->
                <div class="profile">
                    <div class="profile_pic">
                        <img src="../public/images/user.png" alt="..." class="img-circle profile_img">
                    </div>
                    <div class="profile_info">
                        <span>Welcome,</span>
                        <h2 id="usernametxtholder"><?php echo $_SESSION['username']; ?></h2>
                    </div>
                </div>
                <!-- /menu prile quick info -->

                <br />

                <!-- sidebar menu -->
                <div id="sidebar-menu" class="main_menu_side hidden-print main_menu">
                    <div class="menu_section" id="sidem">

                    <?php
                    echo Menu::sideMenu();
                    ?>

                    </div>


                </div>
                <!-- /sidebar menu -->

                <!-- /menu footer buttons -->
                <div class="sidebar-footer hidden-small">
                    <a data-toggle="tooltip" data-placement="top" title="Settings">
                        <span class="glyphicon glyphicon-cog" aria-hidden="true"></span>
                    </a>
                    <a data-toggle="tooltip" data-placement="top" title="FullScreen">
                        <span class="glyphicon glyphicon-fullscreen" aria-hidden="true"></span>
                    </a>
                    <a data-toggle="tooltip" data-placement="top" title="Lock">
                        <span class="glyphicon glyphicon-eye-close" aria-hidden="true"></span>
                    </a>
                    <a data-toggle="tooltip" data-placement="top" title="Logout">
                        <span class="glyphicon glyphicon-off" aria-hidden="true"></span>
                    </a>
                </div>
                <!-- /menu footer buttons -->
            </div>
        </div>

        <!-- top navigation -->
        <div class="top_nav">

            <div class="nav_menu">
                <nav class="" role="navigation">
                    <div class="nav toggle">
                        <a id="menu_toggle"><i class="fa fa-bars"></i></a>
                    </div>

                    <ul class="nav navbar-nav navbar-right">
                        <li class="">
                            <a href="javascript:;" class="user-profile dropdown-toggle" data-toggle="dropdown" aria-expanded="false">
                                <img src="../public/images/user.png" alt=""><?php echo $_SESSION['username']; ?>
                                <span class=" fa fa-angle-down"></span>
                            </a>
                            <ul class="dropdown-menu dropdown-usermenu animated fadeInDown pull-right">
                                <li><a href="../systemUsers/changepassword">Change Password</a>
                                </li>

                                <li>
                                    <a href="help.html">Help</a>
                                </li>
                                <li><a href="../systemUsers/logout"><i class="fa fa-sign-out pull-right"></i> Log Out</a>
                                </li>
                            </ul>
                        </li>
                        <!-- note notification can go here-->
                    </ul>
                </nav>
            </div>

        </div>
        <!-- /top navigation -->

        <!-- page content -->

        <div class="right_col" role="main" >
            <div class="page-title">
                <div class="title_left">
                    <h3><?php
                        /*if(isset($_REQUEST['view'])){
                            $header=explode("_",$_REQUEST['view']);
                            $header2="";
                            $header3="";
                            for($i=0;$i<sizeof($header);$i++){
                                if($i<2){
                                    $header2.= strtoupper($header[$i])."&nbsp;";
                                }else{
                                    $header3.=$header[$i]."&nbsp;";
                                }
                            }
                            echo "<span>".$header2."</span>:<span>".$header3."</span>";
                        }else{
                            echo "DashBoard";
                        }
                        */
                        ?></h3>
                </div>

                <div class="title_right">
                    <div class="col-md-5 col-sm-5 col-xs-12 form-group pull-right top_search">
                        <div class="input-group">
                            <input type="text" class="form-control" placeholder="Search for...">
                                    <span class="input-group-btn">
                            <button class="btn btn-default" type="button">Go!</button>
                        </span>
                        </div>
                    </div>
                </div>
            </div>
            <div class="clearfix"></div>

            <div class="row">

                <div class="col-md-12 col-sm-12 col-xs-12">
                    <div class="x_panel" style="height:auto;">
                        <div class="x_title">
                            <h2 id="titleId">
                                <?php

                                echo $controller;
                                ?></h2>
                            <h2 id="titleId2"></h2>
                            <ul class="nav navbar-right panel_toolbox">
                                <!--<li><a class="collapse-link"><i class="fa fa-chevron-up"></i></a>
                                </li>
                                <li class="dropdown">
                                    <a href="#" class="dropdown-toggle" data-toggle="dropdown" role="button" aria-expanded="false"><i class="fa fa-wrench"></i></a>
                                    <ul class="dropdown-menu" role="menu">
                                        <li><a href="#">Settings 1</a>
                                        </li>
                                        <li><a href="#">Settings 2</a>
                                        </li>
                                    </ul>
                                </li>-->
                                <li><a href="../dashboard/index">Dashboard</a>
                                </li>
                            </ul>
                            <div class="clearfix"></div>
                        </div>
                        <div class="x_content">