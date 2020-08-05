<?php 
 class attkey extends Model{
private $id;
private $attName;


		public function getid()
		{
 		return $this->id;
}

		public function getattName()
		{
 		return $this->attName;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setattName($attName)
		{
		  $this->attName=$attName;
		}
} 
 ?>