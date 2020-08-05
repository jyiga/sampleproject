<?php 
 class webpagesection extends Model{
		private $id;
		private $sectionName;
		private $positionIndex;
		private $columnNo;
		private $pgeId;
		private $clsSection;


		public function getid()
		{
 		return $this->id;
}

		public function getsectionName()
		{
 		return $this->sectionName;
}

		public function getpositionIndex()
		{
 		return $this->positionIndex;
}

		public function getcolumnNo()
		{
 		return $this->columnNo;
}

		public function getpgeId()
		{
 		return $this->pgeId;
}

	public function getclsSection()
	{
			return $this->clsSection;
	}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setsectionName($sectionName)
		{
		  $this->sectionName=$sectionName;
		}

		public function setpositionIndex($positionIndex)
		{
		  $this->positionIndex=$positionIndex;
		}

		public function setcolumnNo($columnNo)
		{
		  $this->columnNo=$columnNo;
		}

		public function setpgeId($pgeId)
		{
		  $this->pgeId=$pgeId;
		}

		public function setclsSection($clsSection)
		{
		  $this->clsSection=$clsSection;
		}

		public function generateSection($pgeId)
		{
			$sql="SELECT * FROM webpagesection where pgeId=:param0 order by positionIndex";
			$bind=array($pgeId);
			$html='';
			foreach($this->__resultSetBind($sql,$bind) as $row)
			{
				$html.=$this->openSection($row['clsSection']);
				//the Section Contents
				$sectionId=$row['id'];
				$sqlInner="Select * from sectioncolumn where sectionId=:param0";
				$bindInner=array($sectionId);
				foreach($this->__resultSetBind($sqlInner,$bindInner) as $rowInner)
				{
					$columnId=$rowInner['id'];
					$selectionColumn=new sectioncolumn();
					$selectionColumn->setid($columnId);
					$html.= $selectionColumn->getColumnContent();
				}
				$html.=$this->closeSection();
			}
			return $html;
		}

		private function openSection($cls)
		{
			$html='<section class="'.$cls.'">';
			return $html;

		}
		private function closeSection()
		{
			$html="</section>";
			return $html;

		}
} 
 ?>