<?php 
 class plansController extends Controller{

 	 	 public function view()
 	 	{
		 }	
		 
		 public function upload()
		 {

		 }
 	 	public function viewcombobox()
 	 	 {
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	$this->set('json',$this->_model->__viewCombo());
	 	}	
 	 	 public function viewall()
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	$this->set('json',$this->_model->__view());
		}	
 	 	 public function edit($id)
 	 	{
	 	 	 	 $this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($id);
	 	 	 	 $this->_model->setuserId($_REQUEST['userId']);
	 	 	 	 $this->_model->setsqm($_REQUEST['sqm']);
	 	 	 	 $this->_model->setplanDescription($_REQUEST['planDescription']);
	 	 	 	 $this->_model->setplanTypeId($_REQUEST['planTypeId']);
	 	 	 	 $this->_model->setcreationDate($_REQUEST['creationDate']);
	 	 	 	 $this->_model->setmodificationDate($_REQUEST['modificationDate']);
	 	 	 	 $this->_model->setstyleId($_REQUEST['styleId']);
	 	 	 	 $this->set('json',$this->_model->__update()); 
 	 	}
 	 	  public function add()
 	 	 {
			   try{
				   $this->doNotRenderHeader=1;
				   //save the plan
	 	 	 	 $this->_model->setuserId($_SESSION['userId']);
	 	 	 	 $this->_model->setsqm($_REQUEST['sqm']);
	 	 	 	 $this->_model->setplanDescription($_REQUEST['planDescription']);
	 	 	 	 $this->_model->setplanTypeId($_REQUEST['planTypeId']);
				$this->_model->setstyleId($_REQUEST['styleId']);
					
				 $id=$this->_model->__saveReturnId(); 

				// adding file to db
				   $list=array("jpg" => "image/jpg", "jpeg" => "image/jpeg", "gif" => "image/gif", "png" => "image/png");
				   $countfiles = 5;
				   for($i=1;$i<$countfiles;$i++){
					$path=utility::importFile('file'.$i,$list);
					$planpge=new planpge();
					$planpge->setid($id);
					$planpge->setimageName($path['path']);
					$planpge->setfileSize($path['size']);
					
					
					$planpgeTye=new planpgetype();
					$criteria='typeName=:param0';
					$ppg=$planpge->getPicType($i-1);

					$planpgeTye->__findCriteria($criteria,array($ppg));


					$planpge->setviewId($planpgeTye->getid());
					$planpge->__save();

					$imageFile=new imagefile();
					$imageFile->setitemId($id);
					$imageFile->setpath($path['path']);
					$imageFile->setisActive(1);
					$imageFile->__save();	
				   }
				   $this->set('json',"Successfull Save,".$id);
				}catch(Exception $e)
				{
					$this->set('json',"Error:".$e->getMessage());
				}
 	 	}
 	 	 public function delete($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($id);
	 	 	 	 $this->set('json',$this->_model->__delete()); 
 	 	} 
 	}
