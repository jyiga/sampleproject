<?php 
 class roomdemin extends Model{
private $id;
private $deminId;
private $roomId;


		public function getid()
		{
 		return $this->id;
}

		public function getdeminId()
		{
 		return $this->deminId;
}

		public function getroomId()
		{
 		return $this->roomId;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setdeminId($deminId)
		{
		  $this->deminId=$deminId;
		}

		public function setroomId($roomId)
		{
		  $this->roomId=$roomId;
		}
} 
 ?>