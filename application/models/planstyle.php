<?php 
 class planstyle extends Model{
private $id;
private $styleName;
private $isActive;


		public function getid()
		{
 		return $this->id;
}

		public function getstyleName()
		{
 		return $this->styleName;
}

		public function getisActive()
		{
 		return $this->isActive;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setstyleName($styleName)
		{
		  $this->styleName=$styleName;
		}

		public function setisActive($isActive)
		{
		  $this->isActive=$isActive;
		}
} 
 ?>