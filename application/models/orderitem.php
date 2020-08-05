<?php 
 class orderitem extends Model{
private $id;
private $orderId;
private $itemId;
private $qty;


		public function getid()
		{
 		return $this->id;
}

		public function getorderId()
		{
 		return $this->orderId;
}

		public function getitemId()
		{
 		return $this->itemId;
}

		public function getqty()
		{
 		return $this->qty;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setorderId($orderId)
		{
		  $this->orderId=$orderId;
		}

		public function setitemId($itemId)
		{
		  $this->itemId=$itemId;
		}

		public function setqty($qty)
		{
		  $this->qty=$qty;
		}
		public function orderTable()
		{
			$total=0;
			$sql="Select oi.*, itm.amount,itm.itemName,(itm.amount*oi.qty) total from orderitem oi inner join item itm on oi.itemId=itm.id where orderId=:param0";
			$bind = array($this->orderId);
			$data = array();
			foreach($this-> __resultSetBind($sql,$bind) as $row)
			{
				$total=$total+floatval($row['total']);
				$data2=array();
				$data2['itemName']=$row['itemName'];
				$data2['qty']=$row['qty'];
				$data2['amount']=number_format($row['amount'],2);
				$data2['total']=number_format($row['total'],2);
				array_push($data,$data2);

			}
			$data2=array();
			$data2['itemName']="";
			$data2['qty']="";
			$data2['amount']="Total";
			$data2['total']=number_format($total,2);
			array_push($data,$data2);

			return $data;



		}
} 
 ?>