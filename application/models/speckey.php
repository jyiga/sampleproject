<?php 
 class speckey extends Model{
private $id;
private $specText;


		public function getid()
		{
 		return $this->id;
}

		public function getspecText()
		{
 		return $this->specText;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setspecText($specText)
		{
		  $this->specText=$specText;
		}
} 
 ?>