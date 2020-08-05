<?php 
 class plan extends Model{
private $id;
private $userId;
private $sqm;
private $planDescription;
private $planTypeId;
private $creationDate;
private $modificationDate;
private $styleId;


		public function getid()
		{
 		return $this->id;
}

		public function getuserId()
		{
 		return $this->userId;
}

		public function getsqm()
		{
 		return $this->sqm;
}

		public function getplanDescription()
		{
 		return $this->planDescription;
}

		public function getplanTypeId()
		{
 		return $this->planTypeId;
}

		public function getcreationDate()
		{
 		return $this->creationDate;
}

		public function getmodificationDate()
		{
 		return $this->modificationDate;
}

		public function getstyleId()
		{
 		return $this->styleId;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setuserId($userId)
		{
		  $this->userId=$userId;
		}

		public function setsqm($sqm)
		{
		  $this->sqm=$sqm;
		}

		public function setplanDescription($planDescription)
		{
		  $this->planDescription=$planDescription;
		}

		public function setplanTypeId($planTypeId)
		{
		  $this->planTypeId=$planTypeId;
		}

		public function setcreationDate($creationDate)
		{
		  $this->creationDate=$creationDate;
		}

		public function setmodificationDate($modificationDate)
		{
		  $this->modificationDate=$modificationDate;
		}

		public function setstyleId($styleId)
		{
		  $this->styleId=$styleId;
		}
} 
 ?>