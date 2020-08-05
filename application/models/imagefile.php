<?php 
 class imagefile extends Model{
private $id;
private $itemId;
private $path;
private $isActive;


		public function getid()
		{
 		return $this->id;
}

		public function getitemId()
		{
 		return $this->itemId;
}

		public function getpath()
		{
 		return $this->path;
}

		public function getisActive()
		{
 		return $this->isActive;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setitemId($itemId)
		{
		  $this->itemId=$itemId;
		}

		public function setpath($path)
		{
		  $this->path=$path;
		}

		public function setisActive($isActive)
		{
		  $this->isActive=$isActive;
		}
} 
 ?>