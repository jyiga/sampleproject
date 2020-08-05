<?php 
 class theme extends Model{
private $id;
private $themeName;
private $isDefault;


		public function getid()
		{
 		return $this->id;
}

		public function getthemeName()
		{
 		return $this->themeName;
}

		public function getisDefault()
		{
 		return $this->isDefault;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setthemeName($themeName)
		{
		  $this->themeName=$themeName;
		}

		public function setisDefault($isDefault)
		{
		  $this->isDefault=$isDefault;
		}
} 
 ?>