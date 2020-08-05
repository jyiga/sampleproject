<?php 
 class webpage extends Model{
private $id;
private $namepge;
private $parentId;
private $orderIndex;
private $showPge;


		public function getid()
		{
 		return $this->id;
}

		public function getnamepge()
		{
 		return $this->namepge;
}

		public function getparentId()
		{
 		return $this->parentId;
}

		public function getorderIndex()
		{
 		return $this->orderIndex;
}

		public function getshowPge()
		{
 		return $this->showPge;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setnamepge($namepge)
		{
		  $this->namepge=$namepge;
		}

		public function setparentId($parentId)
		{
		  $this->parentId=$parentId;
		}

		public function setorderIndex($orderIndex)
		{
		  $this->orderIndex=$orderIndex;
		}

		public function setshowPge($showPge)
		{
		  $this->showPge=$showPge;
		}

		public function getPage($pgeName)
		{
			$criteria="namepge =:param0";
			$bind=array($pgeName);
			$this->__findCriteria($criteria , $bind);
			$webpageSection=new webpagesection();
			$html=$webpageSection->generateSection($this->id);
			//error_log($html."\n",3,ROOT.DS.'tmp'.DS.'logs'.DS.'home.log') ;
			return $html;

		}

		public function generateNavigationLogic()
		{
				$sql="Select * from webpage where showPge='1' and parentId is null order by orderIndex";
				$content='';
				foreach($this->__resultSetBind($sql) as $row)
				{
					$pgeId=$row['id'];
					$pgeName=$row['namepge'];
					if($this->pgeHasChild($pgeId))
					{
						$content.='<li class="dropdown submenu"><a href="#" class="dropdown-toggle" data-toggle="dropdown">'.$pgeName.'</a>';
						$content.='<ul class="dropdown-menu other_dropdwn">';
						$sql2="Select * from webpage where parentId=:param0 order by orderIndex";
						$bind=array($pgeId);
						foreach($this->__resultSetBind($sql2,$bind) as $row2)
						{
							$pgeName=$row2['namepge'];
							$content.='<li><a href="#">'.$pgeName.'</a></li>';
						}
						$content.='</ul></li>';

					}else
					{
						$content.='<li><a href="#">'.$pgeName.'</a></li>';
					}
					
				}
				return $content;

		}

		public function generateQuickLinks()
		{
				$sql="Select * from webpage where showPge='1' and parentId is null order by orderIndex";
				$content='';
				foreach($this->__resultSetBind($sql) as $row)
				{
					$pgeId=$row['id'];
					$pgeName=$row['namepge'];
					if($this->pgeHasChild($pgeId))
					{
						//$content.='<li class="dropdown submenu"><a href="#" class="dropdown-toggle" data-toggle="dropdown">'.$pgeName.'</a>';
						//$content.='<ul class="dropdown-menu other_dropdwn">';
						$sql2="Select * from webpage where parentId=:param0 order by orderIndex";
						$bind=array($pgeId);
						foreach($this->__resultSetBind($sql2,$bind) as $row2)
						{
							$pgeName=$row2['namepge'];
							$content.='<li><a href="#">'.$pgeName.'</a></li>';
						}
						

					}else
					{
						//$content.='<li><a href="#">'.$pgeName.'</a></li>';
					}
					
				}
				return $content;

		}


		public function pgeHasChild($id)
		{
			$count=0;
			$sql="parentId=:param0";
			$bind=array($id);
			$count=$this->_countDefined($sql,$bind);
			return $count>0?true:false;

		}

		
} 
 ?>