<?php 
 class testexp extends Model{
private $id;
private $name;


		public function getid()
		{
 		return $this->id;
}

		public function getname()
		{
 		return $this->name;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setname($name)
		{
		  $this->name=$name;
		}
} 
 ?>