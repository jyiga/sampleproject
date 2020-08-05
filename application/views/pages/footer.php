<?php
function htmlFooter()
{
		$html=materialElement::footerContent().materialElement::closebodyElement(1).materialElement::closeHeaderElemet();
		return $html;	
}

echo htmlFooter();
?>