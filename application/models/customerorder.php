<?php 
 class customerorder extends Model{
private $id;
private $sessionId;
private $orderDate;
private $customerId;
private $status;
private $moditifedDate;
private $shipTo;


		public function getid()
		{
 		return $this->id;
}

		public function getsessionId()
		{
 		return $this->sessionId;
}

		public function getorderDate()
		{
 		return $this->orderDate;
}

		public function getcustomerId()
		{
 		return $this->customerId;
}

		public function getstatus()
		{
 		return $this->status;
}

		public function getmoditifedDate()
		{
 		return $this->moditifedDate;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setsessionId($sessionId)
		{
		  $this->sessionId=$sessionId;
		}

		public function setorderDate($orderDate)
		{
		  $this->orderDate=$orderDate;
		}

		public function setcustomerId($customerId)
		{
		  $this->customerId=$customerId;
		}

		public function setstatus($status)
		{
		  $this->status=$status;
		}

		public function setmoditifedDate($moditifedDate)
		{
		  $this->moditifedDate=$moditifedDate;
		}
		public function setshipTo($shipTo)
		{
		  $this->shipTo=$shipTo;
		}
		public function getshipTo()
		{
		  return $this->shipTo;
		}

} 
 ?>