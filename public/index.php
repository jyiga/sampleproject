<?php	
session_start();
define('DS', DIRECTORY_SEPARATOR);
define('ROOT', dirname(dirname(__FILE__)));
//if the
$url = isset($_GET['url'])?$_GET['url']:'home/login';

require_once (ROOT . DS . 'library' . DS . 'bootstrap.php');
