<?php 
 class listhandle extends Model{
private $id;
private $idVal;
private $textVal;
private $listName;


		public function getid()
		{
 		return $this->id;
}

		public function getidVal()
		{
 		return $this->idVal;
}

		public function gettextVal()
		{
 		return $this->textVal;
}

		public function getlistName()
		{
 		return $this->listName;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setidVal($idVal)
		{
		  $this->idVal=$idVal;
		}

		public function settextVal($textVal)
		{
		  $this->textVal=$textVal;
		}

		public function setlistName($listName)
		{
		  $this->listName=$listName;
		}
} 
 ?>