<?php 
 class usersController extends Controller{

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
	 	 	 	 $this->_model->setfirstName($_REQUEST['firstName']);
	 	 	 	 $this->_model->setlastName($_REQUEST['lastName']);
	 	 	 	 $this->_model->setmobileNumber($_REQUEST['mobileNumber']);
	 	 	 	 $this->_model->setcreationDate($_REQUEST['creationDate']);
	 	 	 	 $this->_model->setstatusId($_REQUEST['statusId']);
	 	 	 	$this->set('json',$this->_model->__update()); 
 	 	}
 	 	  public function add()
 	 	 {
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setfirstName($_REQUEST['firstName']);
	 	 	 	 $this->_model->setlastName($_REQUEST['lastName']);
	 	 	 	 $this->_model->setmobileNumber($_REQUEST['mobileNumber']);
	 	 	 	 $this->_model->setcreationDate($_REQUEST['creationDate']);
	 	 	 	 $this->_model->setstatusId($_REQUEST['statusId']);
	 	 	 	$this->set('json',$this->_model->__save()); 
 	 	}
 	 	 public function delete($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($id);
	 	 	 	 $this->set('json',$this->_model->__delete()); 
		  } 
		  
 	} ?>