<?php 
 class servicetype extends Model{
private $id;
private $serviceName;
private $startTime;
private $endTime;
private $isActive;


		public function getid()
		{
 		return $this->id;
}

		public function getserviceName()
		{
 		return $this->serviceName;
}

		public function getstartTime()
		{
 		return $this->startTime;
}

		public function getendTime()
		{
 		return $this->endTime;
}

		public function getisActive()
		{
 		return $this->isActive;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setserviceName($serviceName)
		{
		  $this->serviceName=$serviceName;
		}

		public function setstartTime($startTime)
		{
		  $this->startTime=$startTime;
		}

		public function setendTime($endTime)
		{
		  $this->endTime=$endTime;
		}

		public function setisActive($isActive)
		{
		  $this->isActive=$isActive;
		}
} 
 ?>