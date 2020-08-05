<?php 
 class spec extends Model{
private $id;
private $specId;
private $itemId;
private $specText;


		public function getid()
		{
 		return $this->id;
}

		public function getspecId()
		{
 		return $this->specId;
}

		public function getitemId()
		{
 		return $this->itemId;
}

		public function getspecText()
		{
 		return $this->specText;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setspecId($specId)
		{
		  $this->specId=$specId;
		}

		public function setitemId($itemId)
		{
		  $this->itemId=$itemId;
		}

		public function setspecText($specText)
		{
		  $this->specText=$specText;
		}
} 
 ?>