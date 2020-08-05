<?php 
 class item extends Model{
private $id;
private $itemName;
private $itemDescription;
private $creationDate;
private $ModifiedDate;
private $isActive;
private $categoryId;
private $amount;
private $uom;


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

		public function getcreationDate()
		{
 		return $this->creationDate;
}

		public function getModifiedDate()
		{
 		return $this->ModifiedDate;
}

		public function getisActive()
		{
 		return $this->isActive;
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

		public function setcreationDate($creationDate)
		{
		  $this->creationDate=$creationDate;
		}

		public function setModifiedDate($ModifiedDate)
		{
		  $this->ModifiedDate=$ModifiedDate;
		}

		public function setisActive($isActive)
		{
		  $this->isActive=$isActive;
		}

		/**
		 * Get the value of categoryId
		 */ 
		public function getcategoryId()
		{
			return $this->categoryId;
		}

		/**
		 * Set the value of categoryId
		 *
		 * @return  self
		 */ 
		public function setcategoryId($categoryId)
		{
		$this->categoryId = $categoryId;

		return $this;
		}

		public function getItemHtmlView($categoryId)
		{
			$sql="SELECT itm.* ,(select imf.path from imagefile imf where imf.itemId=itm.id limit 0 ,1 ) path from item itm where itm.categoryId =:param0";
			$bind=array($categoryId);
			$html="";
			foreach($this->__resultSetBind($sql,$bind) as $row)
			{
					$src='../'.$row['path'];
					$itemName=$row['itemName'];
					$html.=templatex::singleProduct(true,$src,$itemName,number_format($row['amount']).' @ '.$row['uom'],$row['id']);
			}
			return $html;
		}

		public function getDataList($categoryId)
		{
			$sql="SELECT itm.* ,(select imf.path from imagefile imf where imf.itemId=itm.id limit 0 ,1 ) path from item itm where itm.categoryId =:param0";
			$bind=array($categoryId);
			$html="";
			$data=array();

			foreach($this->__resultSetBind($sql,$bind) as $row)
			{
					$data2=array();
					$src='../'.$row['path'];
					$itemName=$row['itemName'];

					$data2['itemName']=$itemName;
					array_push($data,$data2);

			}
			return $data;
		}

		/**
		 * Get the value of amount
		 */ 
		public function getamount()
		{
		return $this->amount;
		}

		/**
		 * Set the value of amount
		 *
		 * @return  self
		 */ 
		public function setamount($amount)
		{
			$this->amount = $amount;

			return $this;
		}



		/**
		 * Get the value of uom
		 */ 
		public function getuom()
		{
		return $this->uom;
		}

		/**
		 * Set the value of uom
		 *
		 * @return  self
		 */ 
		public function setuom($uom)
		{
		$this->uom = $uom;

		return $this;
		}
} 
 ?>