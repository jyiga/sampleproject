<?php 
 class category extends Model{
private $id;
private $categoryName;
private $parentId;


		public function getid()
		{
 		return $this->id;
}

		public function getcategoryName()
		{
 		return $this->categoryName;
}

		public function getparentId()
		{
 		return $this->parentId;
}

		public function setid($id)
		{
		  $this->id=$id;
		}

		public function setcategoryName($categoryName)
		{
		  $this->categoryName=$categoryName;
		}

		public function setparentId($parentId)
		{
		  $this->parentId=$parentId;
		}

		public function getHtmlView()
		{
			$sql="SELECT ca.*,cap.fileName FROM `category` ca inner join categorypge cap on ca.id=cap.categoryId ";
			$html="";
			foreach($this->__resultSetBind($sql) as $row)
			{
				$fileName=str_replace('../',' ',$row['fileName']);
				//$fileName=$row['fileName'];
				$categoryName=$row['categoryName'];
				/*$html.="<div class='col-md-6 col-sm-6'><a class='banner banner-1' href='cfs/loadContent/".$row['id']."'>";
				$html.="<img src='".$fileName."' alt='' style='width:100%; height:250px;'>";
				$html.="<div class='banner-caption text-center'>";
				$html.="<h2 class='white-color btn btn-primary btn-lg'>".$categoryName."</h2></div></a></div>";*/

				$html.="<div class='col-lg-5 col-md-5 col-sm-12 col-xs-12 shadowUp' style='margin-bottom:40px; padding:10px;   background-color: #fff '><div class='col-lg-12'><div><h4 class='catcot'>".$categoryName."</h4></div></div>";
				$html.="<div class='col-lg-12'><img src='".$fileName."' alt='' style='width:100%; height:250px;margin-bottom:15px;'><a href='cfs/loadContent/".$row['id']."' class='view-btn3'>View Products</a></div>";
				$html.="</div><div class='col-lg-1 col-md-1 col-sm-1'></div>";
			}

			return templatex::openSection().$html.templatex::closeSection();
		}

		public function getSideCategory($id)
		{
			$sql="SELECT ca.* FROM category ca where id=:param0";
			$bind=array($id);
			
			$data=array();
			foreach($this->__resultSetBind($sql,$bind) as $row)
			{
				$data2=array();
				$item=new item();
				$data2['link']="../loadContent/".$row['id'];
				$data2['linkName']=$row['categoryName'];
				$data2['id']=$row['id'];
				$data2['itemList']=$item->getDataList($row['id']);
				array_push($data,$data2);
				//create the list of item
			}
			return templatex::openSideWidget().templatex::sideWidget('Products',$data,$id).templatex::closeSideWidget();
		}


		public function getHeaderLink($id)
		{
			$sql="SELECT ca.* FROM category ca";
			
			$data=array();
			foreach($this->__resultSetBind($sql) as $row)
			{
				$data2=array();
				$data2['link']="../loadContent/".$row['id'];
				$data2['linkName']=$row['categoryName'];
				$data2['id']=$row['id'];
				array_push($data,$data2);
			}
			return templatex::links($data,$id);
		}

		public function getfooterLink($id)
		{
			$sql="SELECT ca.* FROM category ca";
			
			$data=array();
			foreach($this->__resultSetBind($sql) as $row)
			{
				$data2=array();
				$data2['link']="../loadContent/".$row['id'];
				$data2['linkName']=$row['categoryName'];
				$data2['id']=$row['id'];
				array_push($data,$data2);
			}
			return templatex::footerlink($data,$id);
		}
} 
 ?>