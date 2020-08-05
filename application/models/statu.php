<?php 
 class statu extends Model{
private $id;
private $statusName;
private $isActive;


		public function getid()
		{
 		return $this->id;
}

		public function getstatusName()
		{
 		return $this->statusName;
}

		public function getisActive()
		{
 		return $this->isActive;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setstatusName($statusName)
		{
		  $this->statusName=$statusName;
		}

		public function setisActive($isActive)
		{
		  $this->isActive=$isActive;
		}
} 
 ?>