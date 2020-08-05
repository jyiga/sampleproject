<?php 
 class verifycode extends Model{
private $id;
private $userId;
private $code;
private $isActive;
private $creationDate;
private $verificationDate;


		public function getid()
		{
 		return $this->id;
}

		public function getuserId()
		{
 		return $this->userId;
}

		public function getcode()
		{
 		return $this->code;
}

		public function getisActive()
		{
 		return $this->isActive;
}

		public function getcreationDate()
		{
 		return $this->creationDate;
}

		public function getverificationDate()
		{
 		return $this->verificationDate;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setuserId($userId)
		{
		  $this->userId=$userId;
		}

		public function setcode($code)
		{
		  $this->code=$code;
		}

		public function setisActive($isActive)
		{
		  $this->isActive=$isActive;
		}

		public function setcreationDate($creationDate)
		{
		  $this->creationDate=$creationDate;
		}

		public function setverificationDate($verificationDate)
		{
		  $this->verificationDate=$verificationDate;
		}

		public function generateCode($userId)
		{
			$array=array('A','B','C','D','E','F','H','I','J','K','L','M','N','O','P','Q','R','S','T','U','V','W','X','Y','Z');
			$numberArray=array(0,1,2,3,4,5,6,7,8,9);
			$lowest=0;
			$highest=sizeof($array)-1;
			$highestNo=sizeof($numberArray)-1;
			$secertCode=null;

			for($i=0;$i<5;$i++)
			{
				if($i%2==0 && $i>0)
				{
					$secertCode.=$numberArray[rand($lowest,$highestNo)];

				}else{
					$secertCode.=$array[rand($lowest,$highest)];
				}
			}

			$this->setuserId($userId);
			$this->setcode($secertCode);
			$this->setisActive(0);
			$this->__save();
		}
} 
 ?>