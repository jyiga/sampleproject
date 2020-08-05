<?php

interface IConnectInfo
{
	const HOST="mysql:host=localhost";
    const UNAME="root";
    const PW="";
    const DBN="serviceon_db_dev";
    const DSN="dbname=".IConnectInfo::DBN.";";
}

?>