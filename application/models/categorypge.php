<?php 
 class categorypge extends Model{
private $id;
private $categoryId;
private $fileName;
private $filePath;
private $creationDate;


		public function getid()
		{
 		return $this->id;
}

		public function getcategoryId()
		{
 		return $this->categoryId;
}

		public function getfileName()
		{
 		return $this->fileName;
}

		public function getfilePath()
		{
 		return $this->filePath;
}

		public function getcreationDate()
		{
 		return $this->creationDate;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setcategoryId($categoryId)
		{
		  $this->categoryId=$categoryId;
		}

		public function setfileName($fileName)
		{
		  $this->fileName=$fileName;
		}

		public function setfilePath($filePath)
		{
		  $this->filePath=$filePath;
		}

		public function setcreationDate($creationDate)
		{
		  $this->creationDate=$creationDate;
		}
} 
 ?>