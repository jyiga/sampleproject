<?php 
 class themefile extends Model{
private $id;
private $file;
private $fileType;
private $extractable;
private $themeId;


		public function getid()
		{
 		return $this->id;
}

		public function getfile()
		{
 		return $this->file;
}

		public function getfileType()
		{
 		return $this->fileType;
}

		public function getextractable()
		{
 		return $this->extractable;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setfile($file)
		{
		  $this->file=$file;
		}

		public function setfileType($fileType)
		{
		  $this->fileType=$fileType;
		}

		public function setextractable($extractable)
		{
		  $this->extractable=$extractable;
		}

		

	/**
	 * Get the value of themeId
	 */ 
	public function getthemeId()
	{
		return $this->themeId;
	}

	/**
	 * Set the value of themeId
	 *
	 * @return  self
	 */ 
	public function setthemeId($themeId)
	{
	$this->themeId = $themeId;

	return $this;
	}
} 
 ?>