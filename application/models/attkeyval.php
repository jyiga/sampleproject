<?php 
 class attkeyval extends Model{
private $id;
private $guiToolId;
private $attKeyId;
private $attVal;


		public function getid()
		{
 		return $this->id;
}

		public function getguiToolId()
		{
 		return $this->guiToolId;
}

		public function getattKeyId()
		{
 		return $this->attKeyId;
}

		public function getattVal()
		{
 		return $this->attVal;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setguiToolId($guiToolId)
		{
		  $this->guiToolId=$guiToolId;
		}

		public function setattKeyId($attKeyId)
		{
		  $this->attKeyId=$attKeyId;
		}

		public function setattVal($attVal)
		{
		  $this->attVal=$attVal;
		}
} 
 ?>