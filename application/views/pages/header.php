<?php

function htmlheader()
{
	$html=materialElement::headerElemet(1).materialElement::bodyElement();
	$html.=materialElement::navigationPanel();
	//$html.=materialElement::navBar();
	return $html;
}

echo htmlheader();



?>