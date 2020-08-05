<?php 
 class itemimage extends Model{
private $id;
private $filename;
private $isActive;


		public function getid()
		{
 		return $this->id;
}

		public function getfilename()
		{
 		return $this->filename;
}

		public function getisActive()
		{
 		return $this->isActive;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setfilename($filename)
		{
		  $this->filename=$filename;
		}

		public function setisActive($isActive)
		{
		  $this->isActive=$isActive;
		}
} 
 ?>