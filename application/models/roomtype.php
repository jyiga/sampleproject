<?php 
 class roomtype extends Model{
private $id;
private $roomTypeName;
private $dashboard;
private $creationDate;


		public function getid()
		{
 		return $this->id;
}

		public function getroomTypeName()
		{
 		return $this->roomTypeName;
}

		public function getdashboard()
		{
 		return $this->dashboard;
}

		public function getcreationDate()
		{
 		return $this->creationDate;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setroomTypeName($roomTypeName)
		{
		  $this->roomTypeName=$roomTypeName;
		}

		public function setdashboard($dashboard)
		{
		  $this->dashboard=$dashboard;
		}

		public function setcreationDate($creationDate)
		{
		  $this->creationDate=$creationDate;
		}
} 
 ?>