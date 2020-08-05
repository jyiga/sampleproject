<?php 
 class themefilesController extends Controller{

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
	 	 	 	 //$this->_model->setfile(htmlspecialchars($file));
	 	 	 	 $this->_model->setfileType(htmlspecialchars($_REQUEST['fileType']));
	 	 	 	 $this->_model->setextractable(htmlspecialchars($_REQUEST['extractable']));
	 	 	 	$this->set('json',$this->_model->__update()); 
 	 	}
 	 	  public function add()
 	 	 {
	 	 	 	 $this->doNotRenderHeader=1;
	 	 	 	 $list=array('jpg' => 'image/jpg', 'jpeg' => 'image/jpeg', 'gif' => 'image/gif', 'png' => 'image/png','css'=>'text/stylesheet','js'=>'text/javascript');
				 $uploadPath="../public/theme/".htmlspecialchars($_REQUEST['fileType'])."/";
				 $path=utility::importFile('file',$list,$uploadPath);
	 	 	 	 $this->_model->setfile($path);
	 	 	 	 $this->_model->setfileType(htmlspecialchars($_REQUEST['fileType']));
				 $this->_model->setextractable(htmlspecialchars($_REQUEST['extractable']));
				 
				 $id=$this->_model->__saveReturnId();

				 //extract values
				if( $this->_model->getextractable())
				{

				}

	 	 	 	//$this->set('json',$this->_model->__save()); 
 	 	}
 	 	 public function delete($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($id);
	 	 	 	 $this->set('json',$this->_model->__delete()); 
 	 	} 
 	} ?>