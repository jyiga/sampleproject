<?php 
 class planpge extends Model{
private $id;
private $viewId;
private $imageName;
private $creationDate;
private $fileSize;


		public function getid()
		{
 		return $this->id;
}

		public function getviewId()
		{
 		return $this->viewId;
}

		public function getimageName()
		{
 		return $this->imageName;
}

		public function getcreationDate()
		{
 		return $this->creationDate;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setviewId($viewId)
		{
		  $this->viewId=$viewId;
		}

		public function setimageName($imageName)
		{
		  $this->imageName=$imageName;
		}

		public function setcreationDate($creationDate)
		{
		  $this->creationDate=$creationDate;
		}

		public function getPicType($index)
		{
			$picTypeList=explode(',',$_SESSION['picType']);
			if(sizeof($picTypeList)>0&&sizeof($picTypeList)<$index)
			{
				return $picTypeList[$index];

			}else{
				return -1;
			}

		}


		public function getfileSize()
		{
			return $this->fileSize;
		}


		public function setfileSize($fileSize)
		{
			$this->fileSize = $fileSize;

			return $this;
		}
} 
 ?>