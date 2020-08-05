<?php 
 class clothitem extends Model{
private $id;
private $itemName;
private $itemDescription;
private $cost;
private $date;
private $isActive;
private $idCat;


		public function getid()
		{
 		return $this->id;
}

		public function getitemName()
		{
 		return $this->itemName;
}

		public function getitemDescription()
		{
 		return $this->itemDescription;
}

		public function getcost()
		{
 		return $this->cost;
}

		public function getdate()
		{
 		return $this->date;
}

		public function getisActive()
		{
 		return $this->isActive;
}

		public function getidCat()
		{
 		return $this->idCat;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setitemName($itemName)
		{
		  $this->itemName=$itemName;
		}

		public function setitemDescription($itemDescription)
		{
		  $this->itemDescription=$itemDescription;
		}

		public function setcost($cost)
		{
		  $this->cost=$cost;
		}

		public function setdate($date)
		{
		  $this->date=$date;
		}

		public function setisActive($isActive)
		{
		  $this->isActive=$isActive;
		}

		public function setidCat($idCat)
		{
		  $this->idCat=$idCat;
		}
} 
 ?>