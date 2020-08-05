<?php 
 class customerdeliverypoint extends Model{
private $id;
private $customerId;
private $placeName;
private $lat;
private $lng;


		public function getid()
		{
 		return $this->id;
}

		public function getcustomerId()
		{
 		return $this->customerId;
}

		public function getplaceName()
		{
 		return $this->placeName;
}

		public function getlat()
		{
 		return $this->lat;
}

		public function getlng()
		{
 		return $this->lng;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setcustomerId($customerId)
		{
		  $this->customerId=$customerId;
		}

		public function setplaceName($placeName)
		{
		  $this->placeName=$placeName;
		}

		public function setlat($lat)
		{
		  $this->lat=$lat;
		}

		public function setlng($lng)
		{
		  $this->lng=$lng;
		}
} 
 ?>