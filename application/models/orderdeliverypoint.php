<?php 
 class orderdeliverypoint extends Model{
private $id;
private $orderId;
private $deliveryPointId;


		public function getid()
		{
 		return $this->id;
}

		public function getorderId()
		{
 		return $this->orderId;
}

		public function getdeliveryPointId()
		{
 		return $this->deliveryPointId;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setorderId($orderId)
		{
		  $this->orderId=$orderId;
		}

		public function setdeliveryPointId($deliveryPointId)
		{
		  $this->deliveryPointId=$deliveryPointId;
		}
} 
 ?>