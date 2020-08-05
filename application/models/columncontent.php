<?php 
 class columncontent extends Model
 {
private $id;
private $contextContent;
private $columnId;
private $creationDate;
private $modificationDate;
private $isActive;


		public function getid()
		{
 		return $this->id;
}

		public function getcontextContent()
		{
 		return $this->contextContent;
}

		public function getcolumnId()
		{
 		return $this->columnId;
}

		public function getcreationDate()
		{
 		return $this->creationDate;
}

		public function getmodificationDate()
		{
 		return $this->modificationDate;
}

		public function getisActive()
		{
 		return $this->isActive;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setcontextContent($contextContent)
		{
		  $this->contextContent=$contextContent;
		}

		public function setcolumnId($columnId)
		{
		  $this->columnId=$columnId;
		}

		public function setcreationDate($creationDate)
		{
		  $this->creationDate=$creationDate;
		}

		public function setmodificationDate($modificationDate)
		{
		  $this->modificationDate=$modificationDate;
		}

		public function setisActive($isActive)
		{
		  $this->isActive=$isActive;
		}

		public function getContent()
		{
			$criteria="columnId=:param0";
			$bind=array($this->columnId);
			$this->__findCriteria($criteria, $bind);
			//error_log(base64_decode($this->contextContent)."\n",3,ROOT.DS.'tmp'.DS.'logs'.DS.'page.log');
			return base64_decode($this->contextContent);
		}
} 
 