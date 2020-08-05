<?php 
 class categorypgesController extends Controller{

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
	 	 	 	 $this->_model->setcategoryId($_REQUEST['categoryId']);
	 	 	 	 $this->_model->setfileName($_REQUEST['fileName']);
	 	 	 	 $this->_model->setfilePath($_REQUEST['filePath']);
	 	 	 	 $this->_model->setcreationDate($_REQUEST['creationDate']);
	 	 	 	$this->set('json',$this->_model->__update()); 
 	 	}
 	 	  public function add()
 	 	 {
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setcategoryId($_REQUEST['categoryId']);
	 	 	 	 $this->_model->setfileName($_REQUEST['fileName']);
	 	 	 	 $this->_model->setfilePath($_REQUEST['filePath']);
	 	 	 	 $this->_model->setcreationDate($_REQUEST['creationDate']);
	 	 	 	$this->set('json',$this->_model->__save()); 
 	 	}
 	 	 public function delete($id)
 	 	{
	 	 	 	$this->doNotRenderHeader=1;
	 	 	 	 $this->_model->setid($id);
	 	 	 	 $this->set('json',$this->_model->__delete()); 
 	 	} 
 	} ?>