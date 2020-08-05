<?php 
 class themestyle extends Model{
private $id;
private $attName;
private $attType;
private $themeId;


		public function getid()
		{
 		return $this->id;
}

		public function getattName()
		{
 		return $this->attName;
}

		public function getattType()
		{
 		return $this->attType;
}

		public function getthemeId()
		{
 		return $this->themeId;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setattName($attName)
		{
		  $this->attName=$attName;
		}

		public function setattType($attType)
		{
		  $this->attType=$attType;
		}

		public function setthemeId($themeId)
		{
		  $this->themeId=$themeId;
		}
} 
 ?>