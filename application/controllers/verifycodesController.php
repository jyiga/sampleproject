<?php 
 class verifycodesController extends Controller{

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
	 	 	 	 $this->_model->setid($id);
	 	 	 	 $this->_model->setuserId($_REQUEST['userId']);
	 	 	 	 $this->_model->setcode($_REQUEST['code']);
	 	 	 	 $this->_model->setisActive($_REQUEST['isActive']);
	 	 	 	 $this->_model->setcreationDate($_REQUEST['creationDate']);
	 	 	 	 $this->_model->setverificationDate($_REQUEST['verificationDate']);
	 	 	 	$this->set('json',$this->_model->__update()); 
 	 	}
 	 	  public function add()
 	 	 {
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setuserId($_REQUEST['userId']);
	 	 	 	 $this->_model->setcode($_REQUEST['code']);
	 	 	 	 $this->_model->setisActive($_REQUEST['isActive']);
	 	 	 	 $this->_model->setcreationDate($_REQUEST['creationDate']);
	 	 	 	 $this->_model->setverificationDate($_REQUEST['verificationDate']);
	 	 	 	$this->set('json',$this->_model->__save()); 
 	 	}
 	 	 public function delete($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($id);
	 	 	 	 $this->set('json',$this->_model->__delete()); 
 	 	} 
 	} ?>