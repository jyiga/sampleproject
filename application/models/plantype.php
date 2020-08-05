<?php 
 class plantype extends Model{
private $id;
private $planTypeName;


		public function getid()
		{
 		return $this->id;
}

		public function getplanTypeName()
		{
 		return $this->planTypeName;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setplanTypeName($planTypeName)
		{
		  $this->planTypeName=$planTypeName;
		}
} 
 ?>