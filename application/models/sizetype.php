<?php 
 class sizetype extends Model{
private $id;
private $sizeName;
private $isActive;


		public function getid()
		{
 		return $this->id;
}

		public function getsizeName()
		{
 		return $this->sizeName;
}

		public function getisActive()
		{
 		return $this->isActive;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setsizeName($sizeName)
		{
		  $this->sizeName=$sizeName;
		}

		public function setisActive($isActive)
		{
		  $this->isActive=$isActive;
		}
} 
 ?>