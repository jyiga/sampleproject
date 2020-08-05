<?php 
 class categorysController extends Controller{

 	 	 public function view()
 	 	{
	 	}	
 	 	public function viewcombobox()
 	 	 {
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	$this->set('json',$this->_model->__viewCombo());
		 }	
		 
		 public function getContent()
		 {
			$this->doNotRenderHeader=1;
			$this->set('json',$this->_model->getfooterLink(-1));

		 }
 	 	 public function viewall()
 	 	{
				$this->doNotRenderHeader=1;
				// JY12062020 Add a union sql for the image link
				$sql="SELECT ca.*,cap.fileName FROM `category` ca inner join categorypge cap on ca.id=cap.categoryId ";
	 	 	 	$this->set('json',$this->_model->__viewSql($sql));
		}	
 	 	 public function edit($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($id);
	 	 	 	 $this->_model->setcategoryName($_REQUEST['categoryName']);
	 	 	 	 $this->_model->setparentId($_REQUEST['parentId']);
					$this->set('json',$this->_model->__update()); 
		  }
		  // JY12062020 Edit function to enable the Category have an image
 	 	  public function add()
 	 	 {
			   try
			   {
					$this->doNotRenderHeader=1;
					$this->_model->setcategoryName($_REQUEST['categoryName']);
					// JY11062020 The can be null add
					if($_REQUEST['parentId']!=='' || $_REQUEST['parentId']!=NULL )
					{
						$this->_model->setparentId($_REQUEST['parentId']);
					}
					//JY11062020 Changed the junction to return the in order to add the image
					$id = $this->_model->__saveReturnId(); 
					$list = array('jpg' => 'image/jpg', 'jpeg' => 'image/jpeg', 'gif' => 'image/gif', 'png' => 'image/png','css'=>'text/css','js'=>'text/javascript');
					//$uploadPath="../public/theme//";
					$path = utility::importFile('file',$list);
					$categoryPge = new categorypge();
					$categoryPge->setcategoryId($id);
					$categoryPge->setfileName($path['path']);
					$categoryPge->setfilePath($path['path']);
					$this->set('json',$categoryPge->__save());
			   }catch(Exception $exc)
			   {
				$this->set('json',array("message"=>$exc->getMessage()));
			   }
	 	 	 		

				
					   
 	 	}
 	 	 public function delete($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($id);
	 	 	 	 $this->set('json',$this->_model->__delete()); 
 	 	} 
 	} ?>