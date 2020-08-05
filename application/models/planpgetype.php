<?php 
 class planpgetype extends Model{
private $id;
private $typeName;


		public function getid()
		{
 		return $this->id;
}

		public function gettypeName()
		{
 		return $this->typeName;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function settypeName($typeName)
		{
		  $this->typeName=$typeName;
		}
} 
 ?>