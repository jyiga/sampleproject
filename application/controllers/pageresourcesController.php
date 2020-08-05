<?php 
 class pageresourcesController extends Controller{

 	 	 public function view()
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
	 	 	 	 $this->_model->setid(htmlspecialchars($id));
	 	 	 	 $this->_model->setresourcepath(htmlspecialchars($_REQUEST['resourcepath']));
	 	 	 	 $this->_model->setresourceType(htmlspecialchars($_REQUEST['resourceType']));
	 	 	 	$this->set('json',$this->_model->__update()); 
 	 	}
 	 	  public function add()
 	 	 {
			$this->doNotRenderHeader=1;
		

			try{

				$list=array("jpg" => "image/jpg", "jpeg" => "image/jpeg", "gif" => "image/gif", "png" => "image/png");
				$countfiles = $_REQUEST['fileCount'];
				for($i=0;$i<$countfiles;$i++){
					$path=utility::importFile('file'.$i,$list);
					$this->_model->setresourcepath($path['path']);
					$this->_model->setresourceType(htmlspecialchars($_REQUEST['restype']));
					$this->_model->__save();
				}
				$this->set('json',"Successfull Save,0");
	
			}catch(Exception $exception)
			{
				$this->set('json',"Error:".$exception->getMessage());
			}
				   


 	 	}
 	 	 public function delete($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($id);
	 	 	 	 $this->set('json',$this->_model->__delete()); 
 	 	} 
 	} ?>