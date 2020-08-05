<?php 
 class plandemin extends Model{
private $id;
private $planId;
private $deminId;


		public function getid()
		{
 		return $this->id;
}

		public function getplanId()
		{
 		return $this->planId;
}

		public function getdeminId()
		{
 		return $this->deminId;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setplanId($planId)
		{
		  $this->planId=$planId;
		}

		public function setdeminId($deminId)
		{
		  $this->deminId=$deminId;
		}
} 
 ?>