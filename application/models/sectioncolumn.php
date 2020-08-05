<?php 
 class sectioncolumn extends Model{
private $id;
private $columnNm;
private $sectionId;
private $columnCls;


		public function getid()
		{
 		return $this->id;
}

		public function getcolumnNm()
		{
 		return $this->columnNm;
}

		public function getsectionId()
		{
 		return $this->sectionId;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setcolumnNm($columnNm)
		{
		  $this->columnNm=$columnNm;
		}

		public function setsectionId($sectionId)
		{
		  $this->sectionId=$sectionId;
		}

		/**
		 * Get the value of columnCls
		 */ 
		public function getcolumnCls()
		{
		return $this->columnCls;
		}

		/**
		 * Set the value of columnCls
		 *
		 * @return  self
		 */ 
		public function setcolumnCls($columnCls)
		{
		$this->columnCls = $columnCls;

		return $this;
		}

		private function openColumn()
		{
			return "<div class='".$this->columnCls."'>";

		}

		private function closeColumn()
		{
			return "</div>";

		}

		public function getColumnContent()
		{
			
			$columContent=new columncontent();
			$columContent->setcolumnId($this->id);
			$this->__find($this->id);
			$content=$columContent->getContent();
			return $this->openColumn().$content.$this->closeColumn();
		}
} 
 ?>