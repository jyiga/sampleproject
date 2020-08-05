<?php 
 class room extends Model{
private $id;
private $planId;
private $roomTypeId;
private $roomDescription;


		public function getid()
		{
 		return $this->id;
}

		public function getplanId()
		{
 		return $this->planId;
}

		public function getroomTypeId()
		{
 		return $this->roomTypeId;
}

		public function getroomDescription()
		{
 		return $this->roomDescription;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setplanId($planId)
		{
		  $this->planId=$planId;
		}

		public function setroomTypeId($roomTypeId)
		{
		  $this->roomTypeId=$roomTypeId;
		}

		public function setroomDescription($roomDescription)
		{
		  $this->roomDescription=$roomDescription;
		}
} 
 ?>